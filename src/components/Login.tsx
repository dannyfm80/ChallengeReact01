
import { useState } from 'react';
import data from "../Data/data.json";
import {NavLink } from 'react-router-dom';


function Login() {


  const [usuario, setUsuario] = useState<string>(""); // STATE by input USER
  const [password, setPassword] = useState<string>("");// STATE by input PASSWORD
  const [statusLogin, setStatusLogin] = useState<string>("Initial"); //STATE to know the status of the login

  //This handler allows you to avoid the default action on input
  const handlerSubmit = (event:any) => {
    event.preventDefault();
}

//Excute the onClick button to validate the credentials
const OnClick_login = () => {
    if(usuario === data[0].user && password ===data[0].password|| usuario === data[1].user && password ===data[1].password){
        setStatusLogin("ok");
    }else{
        setStatusLogin("error");
    }
}

  return (
    <>
        <h1>Login</h1>
        <hr/>
        <form
            className="form-control container"  
            onSubmit={handlerSubmit}
            >
            <label className="form-label">Email address</label>
            <input 
                type="text"
                placeholder="Ingrese su usuario"
                value={usuario}
                onChange={(e)=>setUsuario(e.target.value)}
                className="input"
            />

            <label>Ingrese su password</label>
            <input 
                type="password"
                placeholder="Ingrese su password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button
                className="btn btn-primary"
                onClick={OnClick_login}
            >Login</button>
        </form>

        {
            (statusLogin==="ok")
            ?<>
                <div className="alert alert-success" role="alert">Datos correctos Presione el boton para ir a la siguiente pantalla</div>
                <button className="ms-auto btn btn-success"> 
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/get"
                    >
                        Go to List of Users
                    </NavLink>
                </button>
            </>
            
            :   (statusLogin==="error")
                ?<div className="alert alert-danger" role="alert">Datos incorrectos</div> 
                :(statusLogin==="initial")?<div></div>:<div></div>

        }
    </>
  )
}

export default Login;
