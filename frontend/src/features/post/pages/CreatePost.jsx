
import React, { useState,useRef } from 'react'
import '../style/post.scss'
import { usePost } from '../hooks/usePost'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {


    const [caption, setCaption] = useState("")
    const postImageInput = useRef(null)

    const {loading,handleCreatePost} = usePost();

    const navigate = useNavigate()
 
    async function submitHandler(e){
        e.preventDefault()

        const file = postImageInput.current.files[0]
        
        
       await handleCreatePost(file,caption)

       navigate('/')
       
    }

    if(loading){
        return <main> <h1>Creating Post</h1></main>
     
        
    }
    

  return (
    <main className='create-post'>
        <div className="form-container">
            <h1>Create Post</h1>

        <form onSubmit={submitHandler}>
            <label className='postImage' htmlFor='postImage'>Select Image</label>
            <input ref={postImageInput} hidden type="file" name='postImage' id='postImage' />
            <input value={caption} onChange={(e)=>{setCaption(e.target.value)}} type="text" name='caption' id='caption' placeholder='Enter a caption' />
            <button className='button primary-button'>Create Post</button>
        </form>
        </div>
    </main>
  )
}

export default CreatePost
