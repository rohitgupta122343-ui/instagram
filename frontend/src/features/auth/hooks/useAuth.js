
import { useContext } from 'react'
import  { authContext } from '../authContext.jsx'
import { login,register } from "../services/authApi.js";


export function useAuth(){
    const context = useContext(authContext)

    const {user,setuser,loading,setloading} = context

    const handleLogin = async(username,password)=>{

        setloading(true)
       const respones = await login(username,password)

       setuser(respones.user)
       setloading(false)
    }

    const handleRegister = async(username,email,password)=>{
       
        setloading(true)
        const respones = await register(username,email,password)
        setuser(respones.user)

        setloading(false)
    }

    return {
        user,handleLogin,handleRegister,loading
    }
}