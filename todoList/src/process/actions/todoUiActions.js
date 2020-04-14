import createActionNoAppID from '../../components/base/createActionNoId';

export const ACTION_UI = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    GET: 'GET',
    GET_LIST: 'GET_LIST',
    EDIT: 'EDIT',
    UPDATE: 'UPDATE',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
    COMPLETED_ALL: 'COMPLETED_ALL',
    SINGLE: 'SINGLE',
};

export const todoUiActions = {
    create: (value) => createActionNoAppID(ACTION_UI.CREATE, {value}),
    get: (id) => createActionNoAppID(ACTION_UI.GET, {id}),
    delete: (id) => createActionNoAppID(ACTION_UI.DELETE, {id}),
    edit: (id, value) => createActionNoAppID(ACTION_UI.EDIT, {id, value}),
    update: () => createActionNoAppID(ACTION_UI.UPDATE),
    getList: () => createActionNoAppID(ACTION_UI.GET_LIST),
    getActive: () => createActionNoAppID(ACTION_UI.ACTIVE),
    getCompleted: () => createActionNoAppID(ACTION_UI.COMPLETED),
    completedAll: (todoList) => createActionNoAppID(ACTION_UI.COMPLETED_ALL, {todoList}),
    single: (id, object) => createActionNoAppID(ACTION_UI.SINGLE, {id, object}),
};

