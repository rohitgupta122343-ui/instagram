
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from '../features/auth/pages/login'
import Register from '../features/auth/pages/register'
import Feed from '../features/post/pages/Feed'
import CreatePost from '../features/post/pages/CreatePost'
import Profile from '../features/users/pages/profile'

const AuthRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Feed/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/create-post' element={<CreatePost/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AuthRouter
