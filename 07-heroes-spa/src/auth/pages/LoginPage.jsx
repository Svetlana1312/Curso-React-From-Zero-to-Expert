import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {
 const navigate =  useNavigate();
 const { login } = useContext(AuthContext);
  const onLogin = () => {

      login('Svetlana Stefanova');
      const lastLocation = localStorage.getItem('lastLocation');
      const navigateTo = !!lastLocation ? lastLocation : '/';
      navigate(navigateTo, { replace : true });

  }
  return (
    <div className="containger mt-2">
        <h1>Login Page</h1>
        <hr />
        <button className="btn btn-primary" onClick={ onLogin }>Login</button>


    </div>
  )
}
