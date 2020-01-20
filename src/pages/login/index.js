import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import * as tips from '@/utils/tips';
import './login.less';

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        tips.success('登录成功')
        this.props.history.push('home')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginForm">
        <Form onSubmit={this.handleSubmit}>
          <div className="logo">欢迎登陆</div>
          <Form.Item
            label="用户名"
          >
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: '请输入用户名'}
              ],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="密码"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入密码!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </Form.Item>
          <Form.Item style={{textAlign: 'center'}}>
            <Button htmlType="submit" type="primary" style={{marginRight: 10}}>登录</Button>
            <Button>注册</Button>
          </Form.Item>
      </Form>
    </div>
    )
  }
}

const LoginForm = Form.create()(Login);

export default LoginForm;