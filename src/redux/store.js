import  { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './root-reducer';
// import { fetchCollectionsStart } from './shop/shop.sagas';
import { rootSagas } from './root-sagas';

const sagasMiddleware = createSagaMiddleware();

const middleWares = [sagasMiddleware];

if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagasMiddleware.run(rootSagas);

export const persistor = persistStore(store);