import React, { Component } from "react";

// css
import "./styles/index.css";
import { Row, Col, Button, Modal, Input } from "antd";

// const 
const { TextArea } = Input;
class todoList extends Component {
  constructor(props) {
    super(props);
    console.log("Run constructor");
    this.state = { visible: false };
  }

  showModal = () => {
    debugger;
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log("Run Render");
    const { visible } = this.state;
    debugger;
    return (
      <React.Fragment>
        <div className="container">
          <Row
            style={{ paddingTop: "5%" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col span="6"></Col>
            <Col span="12">
              <div className={"centerList"}>
                <h1 className={"title"}>Danh Sách Công Việc</h1>
                <Row className={"row-scroll"}></Row>
              </div>
              <Row style={{ paddingTop: "10px" }}>
                <Button type={"primary"} onClick={this.showModal}>
                  Thêm công việc
                </Button>
              </Row>
            </Col>
            <Modal
              title="Nhập thông tin công việc mới"
              visible={visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Row style={{paddingBottom: '2%'}}>
                <Col span={5}>
                  <b>Tên nhiệm vụ:</b>{" "}
                </Col>
                <Col span={19}>
                  <Input />
                </Col>
              </Row>
              <Row style={{paddingBottom: '2%'}}>
                <Col span={5}>
                  <b>Nội dung:</b>{" "}
                </Col>
                <Col span={19}>
                  <TextArea />
                </Col>
              </Row>
              <Row style={{paddingBottom: '2%'}}>
                <Col span={5}>
                  <b>Tên nhiệm vụ:</b>{" "}
                </Col>
                <Col span={19}>
                  <Input />
                </Col>
              </Row>
            </Modal>
            {/* hết col centerList */}
            <Col span="6"></Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default todoList;
