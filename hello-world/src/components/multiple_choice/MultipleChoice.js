import React, { Component, PropTypes } from "react";
import { Radio } from "antd";
import { dataMultipleChoice, exactly } from './DataMultipleChoice';
class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataMultipleChoice,
      exactly: exactly,
      checkExactly: [],
      answersTrue: 0,
      value: '',
      userAnswers: [],
    };
    debugger;
  }

  onChange = (_value, numberQuestion) => {
    const { userAnswers, exactly, checkExactly } = this.state;
    const newOjb = { questionNumber: numberQuestion, answer: _value };
    const check = exactly.map((valueExactly, indexExactly) => userAnswers.map((value, index) => {
      if(valueExactly.numberQuestion === value && valueExactly.answer === value.answer)
      {
        return {[numberQuestion]: true}
      }
      return {[numberQuestion]: false}
    }))
    this.setState({
      userAnswers: [...userAnswers, newOjb],
      checkExactly: check
    });
    debugger;
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
    const { data } = this.state;
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
