import { all, call, put, takeEvery, } from 'redux-saga/effects'
import { signupApi } from '../../common/api/auth.api';
import * as ActionTypes from '../actiontype'


function* signup(action) {
   try {
      const user = yield call(signupApi, action.payload);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchSignup() {
  yield takeEvery({type: ActionTypes.SIGN_UP, signup });
}

export function* authsaga(){
    yield all({
        watchSignup
    })
}