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
export const LogoutAction = ()=>(dispatch)=>{
    dispatch({type:ActionTypes.LOG_OUT})
}
export const LoggedoutAction = ()=>(dispatch)=>{  
    dispatch({type:ActionTypes.LOGGED_OUT})

}