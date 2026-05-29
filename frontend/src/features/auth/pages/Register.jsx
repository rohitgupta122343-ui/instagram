import React, { useState } from 'react'
import { useAuth } from '../hook/useAuth'
import { Link, useNavigate } from 'react-router-dom'


const register = () => {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const {loading,handleRegister} = useAuth()

  const navigate = useNavigate()
 
  const submiteHandler = async(e) =>{
    e.preventDefault();
  

    
    await handleRegister(username,email,password).then((res)=>{
      console.log(res);
      navigate('/login')
    })

  }

   if(loading){
      return <h1>Loading...</h1>
    }


  return (
     <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={submiteHandler} autoComplete='off'>
              <input onChange={(e)=>{setusername(e.target.value)}}  type="text" name='username' placeholder='username' />
                <input onChange={(e)=>{setemail(e.target.value)}}  type="text" name='username' placeholder='username' />
                <input onChange={(e)=>{setpassword(e.target.value)}} type="password" name='password' placeholder='password' />
                <button>Login</button> 
            </form>
           <p>You have Already Account <Link className='auth' to={'/login'}>Login</Link> </p>
        </div>
    </main>
  )
}

export default register
