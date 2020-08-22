import * as actionTypes from '../actionTypes';

const AuthReducer = (state,action)=>{
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
    localStorage.setItem('token',action.payload.token);
      return{
        ...state,
        ...action.payload,
        isAuthenticated:true,
        loading:false
      }
    case actionTypes.REGISTER_FAIL:
      localStorage.removeItem('token');
      return{
        ...state,
        token:null,
        isAuthenticated:false,
        loading:false,
        user:null,
        error:action.payload
      }
    case actionTypes.CLEAR_ERROR:
      return{
        ...state,
        error:null
      }
    default:return state;

  }
}

export default AuthReducer;
