import { all } from 'redux-saga/effects';
import {deleteWatcher, createWatcher, getListWatcher, updateWatcher, getCompletedWatcher, singleActiveOrCompletedWatcher} from './todoListSaga';

export default function* rootSaga() {
    yield all([
        deleteWatcher(),
        createWatcher(),
        getListWatcher(),
        updateWatcher(),
        getCompletedWatcher(),
        singleActiveOrCompletedWatcher(),
    ]);
}
