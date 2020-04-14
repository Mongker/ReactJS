import {connect} from 'react-redux';

// Components
import InputValue from './InputValue';

// Actions
import {todoUiActions} from '../../process/actions/todoUiActions';

// Base
import {completedAll} from '../base/CompletedAll';

function mapStateToProps(state, ownProps) {
    const todoList = state.todoList;
    const isCompletedAll = completedAll(todoList);
    return {
        todoList,
        isCompletedAll
    };
}

function mapDispatchToProps(dispatch) {
    return{
        create: (value) => dispatch(todoUiActions.create(value)),
        completedAll: (todoList) => dispatch(todoUiActions.completedAll(todoList)),
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(InputValue);
