import {combineReducers} from 'redux';
import todoList from './todoListReducer';
import todoUiReducer from './todoUiReducer';

const Reducer = combineReducers({
    todoList,
    todoUiReducer
});
export default Reducer;
