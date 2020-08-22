import React,{useReducer} from 'react';
import * as actionTypes from '../actionTypes';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';

const AuthState = props =>{
  const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated: null,
    loading:true,
    error:null,
    user:null
  }

  const [state,dispatch] = useReducer(AuthReducer,initialState);

  // Load user

  //Register user
  const register = async(formData)=>{
    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    }

    try {
      const result = await axios.post('/api/users',formData,config);
      dispatch({type:actionTypes.REGISTER_SUCCESS,payload:result.data});
    } catch (err) {
      dispatch({type:actionTypes.REGISTER_FAIL,payload:err.response.data.msg});
    }
  }

  //Login User

  // Logout

  // Clear Error
  const clearError = ()=>{
    dispatch({type:actionTypes.CLEAR_ERROR});
  }


  return (<AuthContext.Provider value={
    {
      token:state.token,
      isAuthenticated:state.isAuthenticated,
      loading:state.loading,
      error:state.error,
      user:state.user,
      register,
      clearError
    }
  }>
      {props.children}
  </AuthContext.Provider>)
}

export default AuthState;
