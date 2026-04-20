
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import Register from '../features/auth/pages/Register'
import Home from '../features/auth/pages/Home'

const AuthRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AuthRouter
