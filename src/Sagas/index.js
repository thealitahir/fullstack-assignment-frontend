import { takeEvery, all, put, call } from "redux-saga/effects";
import * as types from "../utils/constants";
import Services from "../Services";

export function* loginSaga(payload) {
  try {
    const { data } = yield call(Services.login, payload.payload);
    yield put({ type: types.LOGIN_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.LOGIN_REQUEST_FAILURE, payload: error });
  }
}

export function* rootSaga() {
  yield all([
    yield takeEvery(types.LOGIN_REQUEST, loginSaga)
  ]);
}
