import {connect} from 'react-redux';

import ToDoList from './ToDoList';

// Actions
import {todoUiActions} from '../../process/actions/todoUiActions';
import {indexUiActions} from '../../process/actions/indexUiActions';

// Selector
import {todoListSelector} from '../../process/Selector/todoListSelector';

function mapStateToProps(state, ownProps) {
    const todoList = state.todoList;
    const todoActive = todoListSelector.getActive(state);
    const todoCompleted = todoListSelector.getCompleted(state);
    return {
        todoList,
        todoActive,
        todoCompleted,
    };
}

function mapDispatchToProps(dispatch) {
    return{
        deleteTodo: (id) => dispatch(todoUiActions.delete(id)),
        createIndex: (index) => dispatch(indexUiActions.create(index)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
