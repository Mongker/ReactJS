import React, { Component } from "react";
import { Input } from "antd";
import database from "../../firebase/firebase";
class LoginChat extends Component {
  constructor(props) {
    super(props);
    console.log("Run constructor");
    this.state = {
      name: "",
    };
  }
  componentWillMount() {
    console.log("Run componentWillMount");
  }
  componentDidMount() {
    console.log("Run componentDidMount");
  }
  componentWillReceiveProps(nextProps) {
    console.log("Run componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Run shouldComponentUpdate");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Run componentWillUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Run componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Run componentWillUnmount");
  }
  _onChangeName = (e) => {
    const text = e.target.value;
    this.setState({
      name: text,
    });
    console.log('_onChangeName Giá trị name : '+ this.state.name)
  };
  _toChatRoom = () => {
    const { history } = this.props;
    database
      .auth()
      .signInAnonymously()
      .then((user) => {
        localStorage.setItem("Name_Chat", this.state.name);
        history.push("/chatRoom");
      })
      .catch((err) => alert(err));
      console.log("Run _toChatRoom");
  };
  render() {
    console.log("Run Render");
    return (
      <div>
        <h1>Bạn Tên Gì:</h1>
        <Input onChange={this._onChangeName} onPressEnter={this._toChatRoom}/>
      </div>
    );
  }
}
export default LoginChat;
