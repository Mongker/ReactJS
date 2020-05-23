import React, { Component } from "react";
import { Row, Input, Col } from "antd";
import database from "../../firebase/firebase";
class chatRoom extends Component {
  constructor(props) {
    super(props);
    console.log("Run constructor");
    this.state = {
      chatData: [],
      chatInputContent: "",
      username: "",
    };
  }
  componentWillMount() {
    console.log("Run componentWillMount");
  }
  componentDidMount() {
    console.log("Run componentDidMount ChatRoom");
    let username = localStorage.getItem("Name_Chat");
    this.setState({ username });
    database
      .database()
      .ref("/chatRoom")
      .on("value", (snapshot) => {
        if (snapshot.val() !== undefined && snapshot.val() !== null) {
          this.setState({
            chatData: Object.values(snapshot.val()),
          });
        }
      });
  }
  _renderChatLine = (item) => {
    if (item.userName === this.state.username) {
      return (
          <Row>
          <Col span={3}>
            <h3 style={{ color: "blue" }}>
              <p>Tôi: </p>
            </h3>
          </Col>
          <Col span={18}>
            <h3>{item.chatContent}</h3>
          </Col>
        </Row>
      );
    }
    return (
        <Row>
          <Col span={6}>
            <h3 style={{ color: "red" }}>
              <p>{item.userName}: </p>
            </h3>
          </Col>
          <Col span={18}>
            <h5>{item.chatContent}</h5>
          </Col>
        </Row>
    );
  };
  _sendMessage = () => {
    database.database().ref("/chatRoom").push({
      chatContent: this.state.chatInputContent,
      userName: this.state.username,
    });
    this.setState({
      chatInputContent: "",
    });
    console.log("Run _sendMessage");
  };
  _onChangeChatInput = (e) => {
    const text = e.target.value;
    this.setState({
      chatInputContent: text,
    });
    console.log(
      "_onChangeChatInput ChatRoom Giá trị chatInputContent : " +
        this.state.chatInputContent
    );
  };
  render() {
    const { chatData } = this.state;
    console.log("Run Render ChatRoom");
    debugger;
    return (
      <div style={{alignItems: "center", textAlign: "center"}}>
        <h1>Hộp thứ đến:</h1>
        {chatData.map((item) => this._renderChatLine(item))}
        <h1>Tạo tin mới</h1>
        <Row>
          <h4>Name: {localStorage.getItem("Name_Chat")}</h4>
          <Input
            onChange={this._onChangeChatInput}
            onPressEnter={this._sendMessage}
          />
        </Row>
      </div>
    );
  }
}
export default chatRoom;
