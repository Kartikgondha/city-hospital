import { all,call, put, takeEvery, } from 'redux-saga/effects'
import { signinApi, signupApi } from '../../common/api/auth.api';
import { history } from '../../history';
import { signedinAction } from '../action/action';
import { setAlert } from '../action/alert.action';
import * as ActionTypes from '../Actiontype'


function* signup(action) {
   try {
      const user = yield call(signupApi, action.payload);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
      console.log(user);
      yield put (setAlert({text : user.payload , color : 'success'}))
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log(e);
       yield put(setAlert({text : e.payload , color : 'error'}))
   }
}

function* signin(action){
   try{
      const user = yield call(signinApi, action.payload)
      console.log(user.payload);
      yield put (signedinAction(user.payload))
      history.push("/")
      yield put (setAlert({text : "Login Successfull", color : 'success'}))
   }catch(e){
      console.log(e);
     yield put(setAlert({text : e.payload , color : 'error'}))
   }
}

function* watchSignup() {
  yield takeEvery(ActionTypes.SIGN_UP, signup );
}

function* watchSignin(){
   yield takeEvery(ActionTypes.SIGN_IN, signin)
}

export function* authsaga(){
    yield all([
        watchSignup(),
        watchSignin()
    ])
}