import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import {completedAll} from '../base/CompletedAll';
import {convertObject} from '../base/covertToObject';
// Styles
import './css/index.css';

class InputValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isActiveAll: false,
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('linhnvg:', this.state.value);

    };

    onKeyPress = (event) => {
        const {value} = this.state;
        const {create, todoList} = this.props;
        if(event.key === 'Enter') {
            let size = 0;
            if(todoList === null) {
                size = 1;
            } else {
                size = this.getMaxId(todoList);
            }
            const objectToDo = convertObject(size, value);
            debugger;
            create(objectToDo);
            this.setState({
                value: '',
            })
        }
    };

    getMaxId = (todoList) => {
        if(todoList === null || todoList[0] === undefined){
            return 1;
        } else {
            const lengthTodo = todoList.length - 1;
            const idMax = todoList[lengthTodo].id.id + 1;
            return idMax;
        }
    };

    onClick = () => {
        const {onChangeAll, todoList} = this.props;
        this.setState((prevState) => ({
            isActiveAll: !prevState.isActiveAll,
        }))
        onChangeAll(todoList);
    };

    render() {
        const {value, isActiveAll} = this.state;
        const {isCompletedAll} = this.props;
        return (
            <div className={'wrapper-input'}>
                <label style={isCompletedAll ? {padding: '8px 20px 0 20px'} : {padding: '8px 20px 0 20px', opacity: '0.2'}} onClick={this.onClick}>
                    <img src={'./all.png'} />
                </label>
                <div style={{width: '100%'}}>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            // maxLength={'35'}
                            className={'news-todo'}
                            type={'text'}
                            value={value}
                            onChange={this.handleChange}
                            placeholder={'What needs to be done?'}
                            onKeyPress={this.onKeyPress} />
                    </form>
                </div>
            </div>
        );
    }
}

InputValue.propTypes = {
    // Boolean
    isCompletedAll: PropTypes.bool,
    // array
    todoList: PropTypes.array,
    // func
    onChangeAll: PropTypes.func,
    update: PropTypes.func,
    completedAll: PropTypes.func,
};

export default InputValue;
