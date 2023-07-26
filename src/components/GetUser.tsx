import { useEffect, useState } from 'react';
import { refReqResp } from "../api/refReqResp";
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import {NavLink } from 'react-router-dom';


const GetUser = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]) // State to handle the Users Array

    //here the API should be called
    useEffect(() => {
        refReqResp.get<ReqResListado>("/users?per_page=10")
        .then(resp=>{
            setUsuarios(resp.data.data); // Assign to the useState array<Usuario> the data to be displayed
        })
        .catch(console.log)
    }, [])

    //function to Render an Usuario.
    const renderItem = (usuario:Usuario) =>{
        return(
            <tr key={usuario.id.toString()}>
                <td>{usuario.id.toString()}</td>

                <td>
                    <img className='img'
                        src={usuario.avatar} 
                        alt="" 
                    />
                </td>
                <td>{usuario.first_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }


    return (
        <>
        <div className="container mt-4">
        <div className="d-flex">
            <h1 >Lista de 10 Usuarios</h1>
            <button className="ms-auto btn btn-primary mb-2">
                <NavLink 
                    className="nav-item nav-link" 
                    to="/create"
                >
                    Go to create user
                </NavLink>
            </button>
                    
        </div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario=> renderItem(usuario))
                    }
                </tbody>
            </table>
        </div>
        </>
        )
}

export default GetUser;