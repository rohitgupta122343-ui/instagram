
import axios from "axios";

const api = axios.create({
    baseURL : "https://instagram-y4ln.onrender.com",
    withCredentials : true
})

export async function follow(userId) {
    
    const res = await api.post(`/api/users/follow/${userId}`)

    return res.data
}


export async function unfollow(userId) {
    
    const res = await api.post(`/api/users/unfollow/${userId}`)

    return res.data
}