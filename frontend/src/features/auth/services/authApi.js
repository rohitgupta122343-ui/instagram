
import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true,
})

export async function login(username,password){

    const respones = await api.post("/login",{
        username,password
    });

    return respones

}

export async function register(username,email,password){

    const respones = await api.post('/register',{
        username,email,password
    })

    return respones
}

export async function getme() {
    
    const respones = await axios.get('http://localhost:3000/api/auth/get-me')

    return respones
}