import React, { useState } from 'react'
import '../style/style.scss'
import { useAuth } from '../hook/useAuth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const {loading, handleLogin} = useAuth()

  const navigate = useNavigate()

  
    if(loading){
      return <h1>Loading...</h1>
    }
  
 async function submiteHandler(e){
   
    e.preventDefault()


 await handleLogin(username,password).then((res)=>{
      console.log(res)
      navigate('/')
    })
    
  }

  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={submiteHandler} autoComplete='off'>
                <input onChange={(e)=>{setusername(e.target.value)}}  type="text" name='username' placeholder='username' />
                <input onChange={(e)=>{setpassword(e.target.value)}} type="password" name='password' placeholder='password' />
                <button>Login</button> 
            </form>
              <p>You have Don't Account <Link className='auth' to={'/register'}>Register</Link> </p>
        </div>
    </main>
  )
}

export default Login
