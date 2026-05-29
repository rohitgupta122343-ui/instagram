
import axios from 'axios'

const api = axios.create({
    baseURL : "https://instagram-y4ln.onrender.com",
    withCredentials : true
})

export async function getFeed(){

    const res = await api.get('/api/post/feed')

    return res.data 

    
}

export async function CreatePost(imageFile,caption){
    
    const formData = new FormData()

    formData.append("image",imageFile)
    formData.append("caption",caption)

    const respones = await api.post('/api/post',formData)

    return respones.data
}

export async function likePost(postId){

    const res = await api.post(`/api/post/like/${postId}`)
    
    return res.data;
}

export async function unlikePost(postId){

    const res = await api.post(`/api/post/unlike/${postId}`)

    return res.data;
}