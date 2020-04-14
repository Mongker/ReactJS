import createActionNoAppID from '../../components/base/createActionNoId';

export const ACTION_TODOLIST = {
    CREAT_TODOLIST: 'CREAT_TODOLIST',
    DELETE_TODOLIST: 'DELETE_TODOLIST',
    GET_TODOLIST: 'GET_TODOLIST',
    GET_LIST_TODOLIST: 'GET_LIST_TODOLIST',
    EDIT_TODOLIST: 'EDIT_TODOLIST',
    UPDATE_TODOLIST: 'UPDATE_TODOLIST',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
};

export const todoListReducer = {
    create: (value) => createActionNoAppID(ACTION_TODOLIST.CREAT_TODOLIST, {value}),
    get: (id) => createActionNoAppID(ACTION_TODOLIST.GET_TODOLIST, {id}),
    delete: (id) => createActionNoAppID(ACTION_TODOLIST.DELETE_TODOLIST, {id}),
    edit: (id, value) => createActionNoAppID(ACTION_TODOLIST.EDIT_TODOLIST, {id, value}),
    update: (todo) => createActionNoAppID(ACTION_TODOLIST.UPDATE_TODOLIST, {todo}),
    getList: () => {
        let list = [];
        if(localStorage) {
            list = JSON.parse(localStorage.getItem('todoList'));
        }
        return list;
    },
    getActive: () => createActionNoAppID(ACTION_TODOLIST.ACTIVE),
    getCompleted: () => createActionNoAppID(ACTION_TODOLIST.COMPLETED),
};

