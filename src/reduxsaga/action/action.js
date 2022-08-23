import * as ActionTypes from '../Actiontype'

export const singupAction = (values)=>(dispatch)=>{
    dispatch({type: ActionTypes.SIGN_UP, payload: values})
}