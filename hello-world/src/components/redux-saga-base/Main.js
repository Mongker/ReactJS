import React, { Component } from "react";
import "../../styles.css";
// style
import { Button } from "antd";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {  } = this.state;
    const { onUp, onDown, times } = this.props;
    return (
      <div className="App">
        <h1>Giá trị: {times}</h1>
        <Button type="primary" onClick={() => onUp(1)}>
          Tăng (+)
        </Button>
        <Button type="primary" danger onClick={() => onDown(1)}>
          Giảm (-)
        </Button>
      </div>
    );
  }
}

export default Main;
