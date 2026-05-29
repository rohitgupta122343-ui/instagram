
import React, { useEffect } from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'
import Nav from '../../shared/components/Nav'
import image from  '../../../assets/images.png'
import { Link } from 'react-router-dom'

const Feed = () => {

    const {feed,handleGetFeed,loading,handleLike,handleUnLike} = usePost()

    useEffect(()=>{
        handleGetFeed()
    },[])

     

    if(loading || !feed){
        return <main><h1>Feed is Loding...</h1></main>
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
