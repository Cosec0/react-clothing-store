import { takeEvery, call, put, all } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure, getCollectionsToObj  } from './shop.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionsRef = firestore.collection('collections');
        let collectionsObj = {};
        const snapshot = yield collectionsRef.get();
        collectionsObj = yield call(getCollectionsToObj, snapshot);
        yield put(fetchCollectionsSuccess(collectionsObj));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}