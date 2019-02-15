import {call, put, takeEvery} from 'redux-saga/effects';
import {getUsers, getUserById} from '../../api/user/user.api';
import { UserAction } from '../../constants/actionTyps';
import { getUsersSuccess, getUserByIdSuccess } from '../../actions/user/user.action';

function* handelGetUsers(action) {
  const users = yield call(getUsers);
  yield put(getUsersSuccess(users));
}

function* handelGetUserById(action) {
  const user = yield call(getUserById, action.payload.id);
  yield put(getUserByIdSuccess(user));
}

function* userSaga() {
  yield takeEvery(UserAction.GET_USERS, handelGetUsers);
  yield takeEvery(UserAction.GET_USER_BY_ID, handelGetUserById);
}

export default userSaga;