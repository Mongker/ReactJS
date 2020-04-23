import React, { Component, PropTypes } from "react";
import { Radio } from "antd";
import dataMultipleChoice from "./DataMultipleChoice";
class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataMultipleChoice,
      answersTrue: 0,
      value: '',
      userAnswers: {},
    };
  }

  onChange = (value, numberQuestion) => {
    const {userAnswers} = this.state;
    debugger;
    userAnswers[numberQuestion] = value;
    this.setState({
      userAnswers,
    });
  };

  renderAnswers = (value, numberQuestion) => {
    return (
        <Radio
          value={value.type}
          onChange={() => this.onChange(value.type, numberQuestion)}
        >
          {value.type} :{" "}
          {value.content}
        </Radio>
    );
  };
  renderQuestion = (item, numberQuestion) => {
    return (
      <React.Fragment>
        <h2>{item.question}</h2>
        <Radio.Group>
          {item.answers.map((value) => 
            this.renderAnswers(value, numberQuestion)
          )}
        </Radio.Group>
      </React.Fragment>
    );
  };

  render() {
    const { data, userAnswers } = this.state;
    debugger;
    return (
      <React.Fragment>
        <h1>Bài kiểm tra trắc nhiệm</h1>
        {data.map((item, index) => this.renderQuestion(item, index))}
      </React.Fragment>
    );
  }
}

export default MultipleChoice;
