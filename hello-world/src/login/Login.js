/**
 * Copyright 2020-present, Mong Lê Văn , Cop.
 * All rights reserved.
 *
 * @author Mong Lê Văn  on 4/10/2020.
 */
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

// firebasefirebase
import database from '../firebase/firebase';

// const
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pass: '',
        };
    }

    onChangeUser = (event) => {
        const textUser = event.target.value;
        this.setState({ user: textUser});
    };

    onChangePass = (event) => {
        const textPass = event.target.value;
        this.setState({ pass: textPass});
    };
    
    onLogin = () => {
        const {user, pass} = this.state;
        debugger;
        database.auth()
        .createUserWithEmailAndPassword(user, pass)
        .then( alert('Thanh cong'))
        .catch(error => alert(error))
          debugger;
    };

    render(){
        const onFinish = values => {
            console.log('Success:', values);
          };
        
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
          };
          const {user, pass} = this.state;
          debugger;
        return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="User Name" defaultValue={user} onChange={this.onChangeUser}/>
            </Form.Item>
      
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="Pass Word" defaultValue={pass}  onChange={this.onChangePass}/>
            </Form.Item>
      
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
      
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={this.onLogin}>
                Login
              </Button>
            </Form.Item>
          </Form>);
    }
}
export default Login;