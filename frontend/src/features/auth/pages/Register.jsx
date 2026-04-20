
import React, { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

const Register = () => {


  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const { handleRegister,loading } = useAuth()

  async function submitHandler(e){
      e.preventDefault();

          
    await handleRegister(username,email,password).then((res)=>{
      console.log(res);
      
    })
    
  }
   if(loading){
        return <h1>Loading...</h1>
    }


  return (
    <main>
      <div className="form-container">
        <h1>Register </h1>

        <form onSubmit={submitHandler}>
          <input onChange={(e)=>{setusername(e.target.value)}} type="text" name='username' placeholder='username' />
          <input onChange={(e)=>{setemail(e.target.value)}} type="text" name='email' placeholder='email' />
          <input onChange={(e)=>{setpassword(e.target.value)}} type="password" name='password' placeholder='password' />
          <button type='submit'>Register</button>
        </form>
         <p>You Have already account <Link className='auth' to="/login">login</Link> </p>
      </div>
    </main>
  )
}

export default Register
