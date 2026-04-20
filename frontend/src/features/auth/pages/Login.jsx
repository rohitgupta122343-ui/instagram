
import React, { useState } from 'react'
import '../style/form.scss'
import {Link, useNavigate} from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'


const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')


    const { loading , handleLogin } = useAuth()
    
    const navigate = useNavigate()

    if(loading){
        return <h1>Loading...</h1>
    }

    async function submitHandler(e){
        e.preventDefault()

     await handleLogin(username,password).then((res)=>{
        console.log(res);
        navigate('/')
       })

       
    }

  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={submitHandler} autoComplete='off'>
                <input onChange={(e)=>{setusername(e.target.value)}} type="text" name='username' placeholder='Enter username' />
                <input onChange={(e)=>{setpassword(e.target.value)}} type="password" name='password' placeholder='Enter password' />
                <button>Login</button>
            </form>
            <p>You Don't Have an account? <Link className='auth' to="/register">Register</Link> </p>
        </div>
    </main>
  )
}

export default Login
