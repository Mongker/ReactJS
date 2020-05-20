import React, { Component } from "react";

// css
import "./css/index.css";
import { Row, Col, Button, Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
// img
import logo from "./css/image/loginAdmin.jpg";
class LoginAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div className={'background'}>
                <div className={"container"}>
                    <div>
                        <br />
                        <img
                            className={"img-logo"}
                            src={logo}
                            alt={"Logo Login"}
                            width={"150"}
                            height={"150"}
                        />
                        <h1 className={"text-login"}>Đăng Nhập</h1>
                    </div>
                    <div>
                        <Input
                            className={"input"}
                            size="large"
                            placeholder="Tài Khoản"
                            prefix={<UserOutlined />}
                        />
                        <br />
                        <br />
                        <Input.Password
                            className={"input"}
                            size="large"
                            placeholder="Mật Khẩu"
                            prefix={<KeyOutlined />}
                        />
                        <br />
                        <br />
                        <Button type={"primary"}>Login</Button>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default LoginAdmin;
