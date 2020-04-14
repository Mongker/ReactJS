import {connect} from 'react-redux';

// Components
import Main from './Main';

// Actions
import {todoListReducer} from '../process/actions/todoListActions';
import {todoUiActions} from '../process/actions/todoUiActions';

function mapStateToProps(state, ownProps) {
    const todoList = state.todoList;
    return {
        todoList,
    };
}

function mapDispatchToProps(dispatch) {
    return{
        getActive: () => dispatch(todoListReducer.getActive()),
        getCompleted: () => dispatch(todoListReducer.getCompleted()),
        getAll: () => dispatch(todoListReducer.getList()),
        update: () => dispatch(todoUiActions.update()),
        completedAllTodo: (todoList) => dispatch(todoUiActions.completedAll(todoList)),
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
