import React, { Component } from "react";
// firebase
import database from "../../firebase/firebase";

// css
import "./styles/index.css";
import { Row, Col, Button, Modal, Input, DatePicker, Select } from "antd";

// const

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

class todoList extends Component {
  constructor(props) {
    super(props);
    console.log("Run constructor");
    this.state = {
      visible: false,
      listTodo: [],
      id: 0,
      cap_do: "",
      ngay_bat_dau: "",
      ngay_ket_thuc: "",
      ten_cong_viec: "",
      noi_dung: "",
      trang_thai: "Open",
    };
  }

  componentDidMount() {
    console.log("Run componentDidMount todoList");
    let username = localStorage.getItem("Name_Chat");
    this.setState({ username });
    database
      .database()
      .ref("/todoList")
      .on("value", (snapshot) => {
        if (snapshot.val() !== undefined && snapshot.val() !== null) {
          this.setState({
            listTodo: Object.values(snapshot.val()),
          });
        }
      });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    const {
      id,
      cap_do,
      ngay_bat_dau,
      ngay_ket_thuc,
      ten_cong_viec,
      noi_dung,
      trang_thai,
    } = this.state;
    debugger;
    database
      .database()
      .ref("/todoList")
      .push({
        capdo: cap_do,
        id: id + Math.floor(Math.random() * 10000),
        ngaybatdau: ngay_bat_dau,
        ngayketthuc: ngay_ket_thuc,
        tencongviec: ten_cong_viec,
        noidung: noi_dung,
        trangthai: trang_thai,
      });
    this.setState({
      visible: false,
      id: 0,
      cap_do: "",
      ngay_bat_dau: "",
      ngay_ket_thuc: "",
      ten_cong_viec: "",
      noi_dung: "",
      trang_thai: "Open",
    });
    console.log("Run _sendMessage");
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
      id: 0,
      cap_do: "",
      ngay_bat_dau: "",
      ngay_ket_thuc: "",
      ten_cong_viec: "",
      noi_dung: "",
      trang_thai: "Open",
    });
  };

  handleDate = (date, dateString) => {
    this.setState({
      ngay_bat_dau: dateString ? dateString[0] : "",
      ngay_ket_thuc: dateString ? dateString[1] : "",
    });
  };

  handleSelect = (value) => {
    this.setState({
      cap_do: value,
    });
  };

  onChangeTitle = (e) => {
    const text = e.target.value;
    this.setState({
      ten_cong_viec: text,
    });
  };
  onChangeNoiDung = (e) => {
    const text = e.target.value;
    this.setState({
      noi_dung: text,
    });
  };

  render() {
    const { visible, listTodo } = this.state;
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
                <Row>
                  <div
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                      overflowY: "auto",
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    {listTodo.map((item) => (
                      <div>
                        <h1 style={{ color: "blue" }}>{item.tencongviec}</h1>
                      </div>
                    ))}
                  </div>
                </Row>
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
              <Row style={{ paddingBottom: "2%" }}>
                <Col span={5}>
                  <b>Tên nhiệm vụ:</b>{" "}
                </Col>
                <Col span={19}>
                  <Input onChange={this.onChangeTitle} />
                </Col>
              </Row>
              <Row style={{ paddingBottom: "2%" }}>
                <Col span={5}>
                  <b>Nội dung:</b>{" "}
                </Col>
                <Col span={19}>
                  <TextArea onChange={this.onChangeNoiDung} />
                </Col>
              </Row>
              <Row style={{ paddingBottom: "2%" }}>
                <Col span={5}>
                  <b>Thời gian:</b>{" "}
                </Col>
                <Col span={19}>
                  <RangePicker onChange={this.handleDate} />
                </Col>
              </Row>
              <Row style={{ paddingBottom: "2%" }}>
                <Col span={5}>
                  <b>Cấp độ:</b>{" "}
                </Col>
                <Col span={19}>
                  <Select
                    defaultValue="Chọn Cấp Độ Công Việc"
                    style={{ width: 200 }}
                    onChange={this.handleSelect}
                  >
                    <Option value="1">Bình Thường</Option>
                    <Option value="2">Khẩn Cấp</Option>
                  </Select>
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
