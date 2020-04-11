/**
 * Copyright 2020-present, Mong Lê Văn , Cop.
 * All rights reserved.
 *
 * @author Mong Lê Văn  on 4/10/2020.
 */
import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import {NavLink } from 'react-router-dom';

// firebasefirebase
import database from '../firebase/firebase';

const locationLogInHome = {
  pathname: '/',
}

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

class SignUp extends React.Component {
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
    
    onSignUp = () => {
        const {user, pass} = this.state;
        // let history = useHistory().useContext(Context);
        debugger;
        database.auth()
        .createUserWithEmailAndPassword(user, pass)
        .then(this.onLogInHome)
        .catch((error) => message.info('Thất bại lỗi :'+error))
        this.setState({
          user: '',
          pass: '',
        });
        debugger;
    };

    onLogInHome = () => {
      const { history} = this.props;
      debugger;
      history.push(locationLogInHome);
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
              <Button type="primary" htmlType="submit" onClick={this.onSignUp}>
                Sign Up
              </Button>
              <NavLink to="/" activeStyle={{fontWeight: "bold",color: "red"}}>Quay Lại Trang Chủ</NavLink>
            </Form.Item>
          </Form>);
    }
}
export default SignUp;