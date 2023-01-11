import React, { useReducer } from 'react'
import { types } from '../types/types';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    logged:false
};
const init = ()=>{
   const user = localStorage.getItem('user');
   return {
      logged: !!user,
      user: JSON.parse(localStorage.getItem('user'))
   };
}

export const AuthProvider = ({ children }) => {
    
const [state, dispatch] = useReducer(authReducer, {}, init);
const login =( name = '')=>{
    const user ={
        id:123,
        name:name
    };
    const action = {
        type: types.login,
        payload: user
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
};
const logout= ()=>{
    const action={
        type:types.logout,

    };
    localStorage.removeItem('user');
    dispatch(action);

};
  return (
   <AuthContext.Provider value={{...state, login, logout}}>
        { children }
   </AuthContext.Provider>
  )
}
