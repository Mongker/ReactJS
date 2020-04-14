import {createSelector} from 'reselect';

const getAll = (state) => {
    return state.todoList
};

const getActive = createSelector(
    [getAll],
    (todos) => {
        if (todos === null || todos[0] === undefined) {
            return [];
        } else {
            let todoActive = [];
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].isActive.isActive) {
                    todoActive.push(todos[i]);
                }
            }
            return todoActive;
        }
    });

const getCompleted = createSelector(
    [getAll],
    (todos) => {
        if(todos === null || todos[0] === undefined) {
            return [];
        } else {
            let todoCompleted = [];
            for (let i = 0; i < todos.length; i++) {
                if (!todos[i].isActive.isActive) {
                    todoCompleted.push(todos[i]);
                }
            }
            return todoCompleted;
        }
    });

export const todoListSelector = {
    getActive,
    getCompleted
};
