import { message } from 'antd';

function request(method, url, params) {
  return new Promise((resolve, reject) => {
    const config = {
      method,
      // body: JSON.stringify(params)
    }
    fetch(url, config).then(function(response) {
      return response.json();
    }).then(function(data) {
      if (data.code === 0) {
        resolve(typeof data.data === 'undefined' ? data : data.data)
      } else if (data.code === 20) {
        console.log('请登录')
      } else {
        message.warning('This is message of warning');
      }
    }).catch(function(e) {
      console.log("Oops, error");
    });
  })
};

export function $get(url, params) {
  return request('GET', url, { params });
}
export function $post(url, data) {
  return request('POST', url, { data });
}
