// Library
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import ToDoContainer from './ToDoContainer';

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {todoList, todoCompleted, todoActive, match, createIndex} = this.props;
        if(match.location.pathname === '/') {
            if(todoList === null || todoList[0] === undefined) {
               createIndex(0);
            } else {
                createIndex(todoList.length);
            }
        } else if(match.location.pathname === '/active') {
            if(todoActive === null || todoActive[0] === undefined) {
                createIndex(0);
            } else {
                createIndex(todoActive.length);
            }
        } else if(match.location.pathname === '/completed') {
            if(todoCompleted === null || todoCompleted[0] === undefined) {
              createIndex(todoCompleted.length);
            } else {
                createIndex(todoCompleted.length);
            }
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {todoList, todoCompleted, todoActive, match, createIndex} = this.props;
        if(todoList !== prevProps.todoList || todoActive !== prevProps.todoActive || todoCompleted !== prevProps.todoActive) {
            if(match.location.pathname === '/') {
                if(todoList === null || todoList[0] === undefined) {
                    createIndex(0);
                } else {
                    createIndex(todoList.length);
                }
            } else if(match.location.pathname === '/active') {
                if(todoActive === null || todoActive[0] === undefined) {
                    createIndex(0);
                } else {
                    createIndex(todoActive.length);
                }
            } else if(match.location.pathname === '/completed') {
                if(todoCompleted === null || todoCompleted[0] === undefined) {
                    createIndex(0);
                } else {
                    createIndex(todoCompleted.length);
                }
            }
        }
    }

    render() {
        const {todoList, isActiveAll, deleteTodo, todoCompleted, todoActive, match} = this.props;
        if(match.location.pathname === '/') {
            if(todoList !== null) {
                return (
                    <div>
                        {todoList.map((todo, index) => <ToDoContainer todo={todo} index={index} isActiveAll={isActiveAll} deleteTodo={deleteTodo}/>)}
                    </div>
                );
            } return null;

        } else if(match.location.pathname === '/active') {
            if(todoActive !== null) {
                return (
                    <div>
                        {todoActive.map((todo, index) => <ToDoContainer todo={todo} index={index} isActiveAll={isActiveAll} deleteTodo={deleteTodo}/>)}
                    </div>
                );
            } return null;
        } else if(match.location.pathname === '/completed') {
            if(todoCompleted !== null) {
                return (
                    <div>
                        {todoCompleted.map((todo, index) => <ToDoContainer todo={todo} index={index} isActiveAll={isActiveAll} deleteTodo={deleteTodo}/>)}
                    </div>
                );
            }return null;
        }
    }
}

ToDoList.propTypes = {
    // Object
    match: PropTypes.object,
    // Array
    todoList: PropTypes.array,
    todoCompleted: PropTypes.array,
    todoActive: PropTypes.array,
    // Boolean
    isActiveAll: PropTypes.bool,
    // Actions
    deleteTodo: PropTypes.func,
    createIndex: PropTypes.func,
};

ToDoList.defaultProps = {
    todoCompleted: [],
    todoActive: [],
    todoList: [],
    createIndex: () => {},
    deleteTodo: () => {},
};

export default ToDoList;
