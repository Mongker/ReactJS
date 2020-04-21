import React, { Component, PropTypes } from "react";
import { Radio } from "antd";
import dataMultipleChoice from "./DataMultipleChoice";
class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataMultipleChoice,
      answersTrue: 0,
    };
    debugger;
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
      value1: e.target.value,
      value2: e.target.value,
      value3: e.target.value,
      value4: e.target.value,
      value5: e.target.value,
      value6: e.target.value,
      value7: e.target.value,
      value8: e.target.value,
      value9: e.target.value,
    });
    debugger;
    // if (e.target.value === answers[index])
  };

  renderAnswers = (data, index, indexLv2) => {
    return (
      <React.Fragment>
        <Radio.Group>
          <Radio
            onChange={this.onChange}
            value={data[index].answers[indexLv2].type}
          >
            {data[index].answers[indexLv2].type} :{" "}
            {data[index].answers[indexLv2].content}
          </Radio>
        </Radio.Group>
      </React.Fragment>
    );
  };
  renderQuestion = (data, index) => {
    debugger;
    return (
      <React.Fragment>
        <h2>{data[index].question}</h2>
        {data[index].answers.map((value, indexLv2) =>
          this.renderAnswers(data, index, indexLv2)
        )}
      </React.Fragment>
    );
  };

  render() {
    const { data } = this.state;
    debugger;
    return (
      <React.Fragment>
        <h1>Bài kiểm tra trắc nhiệm</h1>
        {data.map((value, index) => this.renderQuestion(data, index))}
      </React.Fragment>
    );
  }
}

export default MultipleChoice;
