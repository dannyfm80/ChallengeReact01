import { useEffect, useState } from "react"
import { ReqResListado} from "../interfaces/reqRes"
import { refReqResp } from "../api/refReqResp"
import {NavLink } from 'react-router-dom';


const CreateUser = () => {


    const [nombre, setNombre] = useState<string>("");
    const [job, setJob] = useState<string>("")

    const [executeEffect, setExecuteEffect] = useState<Boolean>(false);// State to know when to execute the API call
    const [requestError, setRequestError] = useState<Boolean>(false); // state to know if the call had an error


    //Execute useEffect for send request
    useEffect(() => {
        refReqResp.post<ReqResListado>('/users',
        {
            "name": {nombre},
            "job": {job}
        })
        .then(resp => {
                console.log(resp.data)
                setExecuteEffect(false);
                setRequestError(false);
                setNombre("")
                setJob('')
        })
        .catch (err => {
            console.log(err)
            setRequestError(true)
        })
        
        return;
    }, [executeEffect])

    

    //This handler allows you to avoid the default action on input
    const handlerSubmit = (event:any) =>{
        event.preventDefault()
        setExecuteEffect(true);
    }


  return (
    <>
        <div className=" container d-flex mt-2 ">
            <h1 className="">POST de la API</h1>
            
            <button className="ms-auto btn btn-primary mb-2">
                <NavLink 
                    className="nav-item nav-link" 
                    to="/login"
                >
                    Go to login
                </NavLink>
            </button>
        </div>
        <hr/>
        <form
            className="form-control container"

        >
            <label>Ingrese su nombre</label>
            <input 
                type="text"
                placeholder="ingrese su nombre"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
            <label>Ingrese su trabajo</label>
            <input 
                type="text"
                placeholder="ingrese su JOB"
                value={job}
                onChange={e => setJob(e.target.value)}
                />
            <button
                className="btn btn-success"
                onClick={handlerSubmit}
            >Enviar</button>
        </form>
        <div className="container">
            {
                !requestError
                ?
                <>
                    <div className="alert alert-success" role="alert">No tuvo error - revisar consola para ver el Response</div>
                    
                </>
                
                :<div className="alert alert-danger" role="alert">Tuvo Error</div>
            }
        </div>
    </>
  )
}


export default CreateUser;
