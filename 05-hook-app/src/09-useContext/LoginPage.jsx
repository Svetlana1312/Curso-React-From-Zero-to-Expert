import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
 const { user, setUser }= useContext(UserContext);
  return (
   <>
    <h2>Login Page</h2>
    <hr />
    <pre>{ JSON.stringify(user, null, 3) }</pre>

    <button className='btn btn-primary' onClick={()=>setUser({id:1234, email:'svetlana@gmail.com',name:'Svetlana'})}>Cargar usuario</button>
   </> 

  )
}
