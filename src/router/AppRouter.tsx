import Login from '../components/Login'
import GetUser from '../components/GetUser'
import CreateUser from '../components/CreateUser'
import {Routes, Route, Navigate} from 'react-router-dom';


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/get' element={<GetUser/>}/>
            <Route path='/create' element={<CreateUser/>}/>

            <Route path='/*' element={<Navigate to="/login"/>}/>
        </Routes>
    </>
  )
}
