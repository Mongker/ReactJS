import createActionNoAppID from '../../components/base/createActionNoId';

export const INDEX_UI = {
    CREATE: 'CREATE_INDEX',
};

export const indexUiActions = {
    create: (index) => createActionNoAppID(INDEX_UI.CREATE, {index}),
};

