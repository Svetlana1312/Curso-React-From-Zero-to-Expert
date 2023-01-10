import { useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const FormWithCustomHook = () => {

const {username, email, password, onInputChange, onResetForm }= useForm({
                                                            username:'',
                                                            email:'',
                                                            password: ''});
  return (
    <>
    <h1>
        Formulario simple
    </h1>
    <hr/>

    <input type="text"
     className="form-control mt-2"
     placeholder="Username"
     name="username" 
     value={ username }
     onChange={ onInputChange }/>
    
   
     <input type="text"
     className="form-control mt-2"
     placeholder="Email"
     name="email" 
     value={ email }
     onChange={ onInputChange }/>

    <input type="password"
     className="form-control mt-2"
     placeholder="Password"
     name="password" 
     value={ password }
     onChange={ onInputChange }/>
    <button onClick={ onResetForm }> Reset </button>

     { username === 'Strider2' && <Message/>}
    
    </>
  )
}
