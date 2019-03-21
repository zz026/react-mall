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
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div className="loginForm">
        <Form onSubmit={this.handleSubmit}>
          <div className="logo">logo</div>
          <Form.Item
            {...formItemLayout}
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
            {...formItemLayout}
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
          <Form.Item {...tailFormItemLayout}>
            <Button htmlType="submit">登录</Button>
          </Form.Item>
      </Form>
    </div>
    )
  }
}

const LoginForm = Form.create()(Login);

export default LoginForm;