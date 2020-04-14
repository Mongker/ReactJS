import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Popconfirm} from 'antd';

// Components
import TickSuccess from '../base/TickSuccess'

// Styles
import './css/index.css';

// Base
import {completedAll} from '../base/CompletedAll';

// Bases
import {convertObject} from '../base/covertToObject';
class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveText: false,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isActiveAll} = this.props;
        if (isActiveAll !== prevProps.isActiveAll) {
            this.onState(isActiveAll);
        }
    }

    onClick = () => {
        const {single, todo} = this.props;
        this.setState((prevState) => ({
            isActiveText: !prevState.isActiveText,
        }))

        const id = todo.id.id;
        const value = todo.data.value;
        const isActive = todo.isActive.isActive;
        const object = convertObject(id, value, !isActive);
        single(id, object);
    };

    onState = (isActive) => {
        this.setState((prevState) => ({
            isActiveText: isActive,
        }))
    };

    delete = (event) => {
        event.preventDefault();
        const {todo, deleteTodo} = this.props;
        const id = todo.id;
        deleteTodo(id);
    };

    onConfirm = (event) => {
        this.delete(event);
    };

    onCancel = () => {
    };

    render() {
        const {isActiveText} = this.state;
        const {todo, isActiveAll} = this.props;
        return (
            <div className={'wrapper-single'}>
                <div className={'todo-single'}>
                    <TickSuccess onClick={this.onClick} isActiveAll={isActiveAll} todo={todo}/>
                    <label style={!todo.isActive.isActive ? {textDecoration: 'line-through', opacity: '.2'} : null}
                           className={'text-todo'}>{todo.data.value}</label>
                </div>
                <div style={{alignItems: 'center'}}>
                    <Popconfirm
                        title="Are you sure delete this task?"
                        onConfirm={this.onConfirm}
                        onCancel={this.onCancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button className={'delete'}>
                            <a href="#">X</a>
                        </button>
                    </Popconfirm>
                </div>
            </div>
        );
    }
}

ToDo.propTypes = {
    // number
    index: PropTypes.number,
    todo: PropTypes.object,
    // boolean
    isActiveAll: PropTypes.bool,
    // actions
    deleteTodo: PropTypes.func,
    single: PropTypes.func,
};

ToDo.defaultProps = {
    deleteTodo: () => {},
    single: () => {},
};

export default ToDo;
