import { useContext, useEffect } from "react";
import { PostContext } from "../PostContext";
import { CreatePost, getFeed,likePost,unlikePost } from "../services/postApi";

export  function usePost(){

    const context = useContext(PostContext)

    const {loading,setloading,post,setpost,feed,setfeed} = context

    const handleGetFeed = async()=>{

        setloading(true)
        const data = await getFeed()
        setfeed(data.posts.reverse())
        setloading(false)
    }

    const handleCreatePost = async(imageFile,caption)=>{
        
        setloading(true)
       const data = await CreatePost(imageFile,caption)
        setfeed([data.post, ...feed])
        setloading(false)

    }

    const handleLike = async(post)=>{

       
        const data = await likePost(post)
        await handleGetFeed()
       
    }

    const handleUnLike = async(post)=>{

       
        const data = await unlikePost(post)
    await handleGetFeed()
       
    }

    useEffect(()=>{
        handleGetFeed()
    },[])

    return {
        loading,
        feed,
        post,
        handleGetFeed,
        handleCreatePost,
        handleLike,
        handleUnLike
    }


}

