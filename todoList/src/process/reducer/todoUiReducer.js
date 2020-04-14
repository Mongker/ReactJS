import {INDEX_UI} from '../actions/indexUiActions';

const todoUiReducer = (state = [], action) => {
    const {payload} = action;
    switch (action.type) {
        case INDEX_UI.CREATE:
            return payload.index;
        default:
            return state;
    }
};
export default todoUiReducer;
