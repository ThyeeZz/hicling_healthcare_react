import React, { Component } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import './index.scss';
import { connect } from 'react-redux';
import { getLang } from '../../utils/tool';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passwor: ''
    }
  }

  render() {
    let {lang} = this.props.changeLanguageReducer;
    let loginDoc = lang==='cn'?getLang('cn'):getLang('en');

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 24 },
    };
    const tailLayout = {
      wrapperCol: { span: 24 },
    };

    const LoginForm = () => {
      const onFinish = values => {
        console.log('Success:', values);
        let {login} = this.props;
        login()
        this.props.history.push('/home');
      }

      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      return (
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label={loginDoc.username}
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={loginDoc.password}
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          {/* 
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              {loginDoc.buttonText}
            </Button>
          </Form.Item>
        </Form>
      );
    };
    return (
      <div className="login-wraper" >
        <div className="login-field">
          <LoginForm></LoginForm>
          <div className="contact">
            <p className="contact-tag">{loginDoc.contact}</p>
            <div className="contact-detail">
              <p>{loginDoc.phone}：123445</p>
              <p>{loginDoc.address}：123445</p>
              <p>{loginDoc.email}：123445</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch=>{
  return {
    login: ()=>{
      dispatch({type: 'login'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)