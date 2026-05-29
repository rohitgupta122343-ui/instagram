
import axios  from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:3000/api/auth',
    withCredentials : true
})

export async function login(username,password){

    const respones = await api.post("/login",{
        username,password
    });

    return respones

}


export const register = (username,email,password)=>{

    const res = api.post('/register',{
        username,email,password
    })

    return res
}

export const getMe = ()=>{
    
    const res = api.get('/get-me')

    return res
    
}