import { message } from 'antd';

export function success(msg = '操作成功') {
  message.success(`${msg}！`);
}
