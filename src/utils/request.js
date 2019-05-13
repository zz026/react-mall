import { message } from 'antd';
import axios from 'axios';
import JsonP from 'jsonp';
// function request(method, url, params) {
//   return new Promise((resolve, reject) => {
//     const config = {
//       body: JSON.stringify({ a: 1 }),
//       method,
//       // body: params
//     }
//     fetch(url, config).then(function(response) {
//       return response.json();
//     }).then(function(data) {
//       if (data.code === 0) {
//         resolve(typeof data.data === 'undefined' ? data : data.data)
//       } else if (data.code === 20) {
//         console.log('请登录')
//       } else {
//         message.warning('This is message of warning');
//       }
//     }).catch(function(e) {
//       console.log("Oops, error");
//     });
//   })
// };

function request(method, url, params) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      ...params
    }).then(response => {
      const data = response.data
      if (data.code === 0) {
        resolve(data.data !== undefined ? data.data : data)
      } else if (data.code === 1001) {
        console.log('请登录')
        message.warning('请登录')
        setTimeout(() => {
          window.location.href = '/login'
        }, 1000)
      } else {
        message.error('This is message of warning');
      }
    })
  });
}

export function getWeatherRequest() {
  const key = '2eb6a6cfe62c0f435f9c8870624ad48d'
  return new Promise((resolve) => {
    JsonP(`https://restapi.amap.com/v3/weather/weatherInfo?city=440300&key=${key}`, {
      param: 'callback' 
    }, (err, response) => { 
      if (response.status === '1') {
        resolve(response.lives[0])
      }
    }) 
  })
}

export function $get(url, params) {
  return request('GET', url, { params });
}
export function $post(url, data) {
  return request('POST', url, { data });
}
