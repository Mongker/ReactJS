import {ACTION_TODOLIST} from '../actions/todoListActions';

const todoList = (state = [], action) => {
    const {payload} = action;
    switch (action.type) {
        case ACTION_TODOLIST.CREAT_TODOLIST:
            let arrayTodo = [];
            let listLocal = JSON.parse(localStorage.getItem('todoList'));
            if (localStorage.length === 0) {
                arrayTodo.push(payload.value);
                localStorage.setItem('todoList', JSON.stringify(arrayTodo));
            } else if (listLocal.length === 1) {
                arrayTodo.push(listLocal[0]);
                arrayTodo.push(payload.value);
                localStorage.setItem('todoList', JSON.stringify(arrayTodo));
                return arrayTodo;
            } else if (listLocal.length >= 2) {
                for (let i = 0; i < listLocal.length; i++) {
                    arrayTodo.push(listLocal[i]);
                }
                arrayTodo.push(payload.value);
                localStorage.setItem('todoList', JSON.stringify(arrayTodo));
                return arrayTodo;
            }
            return arrayTodo;
        case ACTION_TODOLIST.DELETE_TODOLIST:
            return [...state.filter((e) => e.id !== payload.id)];
        case ACTION_TODOLIST.GET_LIST_TODOLIST:
            return state;
        case ACTION_TODOLIST.GET_TODOLIST:
            return [...state.filter((e) => e.id === payload.id)];
        case ACTION_TODOLIST.EDIT_TODOLIST:
            let index = -1;
            const todoList = [...state];
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].id.id === payload.id) {
                    index = i;
                    break;
                }
            }
            todoList[index] = payload.value;
            return todoList;
        case ACTION_TODOLIST.UPDATE_TODOLIST:
            return payload.todo;
        case ACTION_TODOLIST.ACTIVE:
            let todoActive = [];
            const todoListActive = [...state];
            for (let i = 0; i < todoListActive.length; i++) {
                if (todoListActive[i].isActive.isActive) {
                    todoActive.push(todoListActive[i]);
                }
            }
            return todoActive;
        case ACTION_TODOLIST.COMPLETED:
            let todoCompleted = [];
            const todoListCompleted = [...state];
            for (let i = 0; i < todoListCompleted.length; i++) {
                if (!todoListCompleted[i].isActive.isActive) {
                    todoCompleted.push(todoListCompleted[i]);
                }
            }
            return todoCompleted;
        default:
            return state;
    }
};
export default todoList;
