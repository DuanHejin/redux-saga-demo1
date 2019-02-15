import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/index';

import userSaga from '../saga/user/user.saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export default store;