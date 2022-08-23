import { all,call, takeEvery, } from 'redux-saga/effects'
import { signupApi } from '../../common/api/auth.api';
import * as ActionTypes from '../Actiontype'


function* signup(action) {
   try {
      const user = yield call(signupApi, action.payload);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchSignup() {
  yield takeEvery(ActionTypes.SIGN_UP, signup );
}

export function* authsaga(){
    yield all([
        watchSignup()
    ])
}