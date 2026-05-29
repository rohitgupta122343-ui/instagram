
import { useContext } from "react";
import { AuthContext } from "../authContext";
import { login,register,logout } from "../services/authApi";

export function useAuth (){   

   const context =  useContext(AuthContext)

   const {user,setuser,loading,setloading} = context;

   const handleLogin = async(username,password)=>{

    setloading(true)
        
    const res = await login(username,password)
    
    setuser(res.user)
    setloading(false)
   }

   const handleRegister = async(username,email,password)=>{

    setloading(true)
    const res = await register(username,email,password)

    setuser(res.user)
    setloading(false)
   }

   const handlelogout = async()=>{
   setloading(true)
     const res = await logout()
     setuser(null)
     setloading(false)
   }

   return {user,loading,handleLogin,handleRegister,handlelogout}
    
}