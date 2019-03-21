import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { headList } from '@/assets/headList'
import { $post } from '@/utils/request';
import './regist.less'

class Regist extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        $post('/api/user/register', values).then(res => {
          console.log('res', res)
        })
      }
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 6 },
      },
    };
    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="账号"
          >
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: '请输入账号!' }
              ],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="昵称"
          >
            {getFieldDecorator('realName', {
              rules: [
                { required: true, message: '请输入昵称 !' }
              ],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="密码"
          >
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: '请输入密码 !' }
              ],
            })(
              <Input type="password" />
            )}
          </Form.Item>
          <Form.Item
            label="性别"
          >
            {getFieldDecorator("gender", {
              initialValue: '1',
              rules: [
                { required: true, message: '请选择性别 !' }
              ],
            })(
              <Radio.Group>
                <Radio value="1">男</Radio>
                <Radio value="2">女</Radio>
                <Radio value="0">未知</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item
            label="头像"
          >
            {getFieldDecorator("headImg", {
              rules: [
                { required: true, message: '请选择心仪的头像 !' }
              ],
            })(
              <Radio.Group className="headList">
               { headList.map(val => {
                 return (
                  <Radio value={val.id} key={val.id}>
                    <img src={val.url} alt="头像" />
                  </Radio>
                 )
               })}
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item
            wrapperCol={{
              xs: { span: 20, offset: 4 },
              sm: { span: 6, offset: 4 },
            }}
          >
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const RegistForm = Form.create()(Regist);

export default RegistForm;