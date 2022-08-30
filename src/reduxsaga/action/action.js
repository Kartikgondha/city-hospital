import * as ActionTypes from '../Actiontype'

export const singupAction = (values)=>(dispatch)=>{
    dispatch({type: ActionTypes.SIGN_UP, payload: values})
}

export const singinAction = (values)=>(dispatch)=>{
    dispatch({type:ActionTypes.SIGN_IN, payload: values})
}

export const signedinAction = (values)=> (dispatch)=>{
    dispatch({type:ActionTypes.SIGNED_IN, payload: values})
}