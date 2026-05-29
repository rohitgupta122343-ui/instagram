
import React, { useEffect } from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'
import Nav from '../../shared/components/Nav'
import image from  '../../../assets/images.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/hook/useAuth'

const Feed = () => {
    const navigate = useNavigate()
    const {feed,handleGetFeed,loading,handleLike,handleUnLike} = usePost()

    
    
    useEffect(()=>{
        handleGetFeed()
    },[])

    if(loading || !feed){
        return <main><h1>Feed is Loding...</h1></main>
    }

   

    const {handlelogout} = useAuth()

    const submited = () =>{
        handlelogout()
        navigate('/login')
    }
    

  return (
    <div className='feed'>
        <Nav/>
        <div className="posts">
            {feed.map((post)=>{
                return <Post key={post._id} user={post.user} post = {post} loading={loading}
                handleLike={handleLike} handleUnLike={handleUnLike}
                />
            })}
        </div>

        <button onClick={()=>{submited()}} className='logout'>logout</button>

        <Link to={'/profile'}>
        <div className='get-me'>
            <img src={image} alt="" />
            <p className='username'>username</p>
        </div>
            
        </Link>
       
    </div>
  )
}

export default Feed
