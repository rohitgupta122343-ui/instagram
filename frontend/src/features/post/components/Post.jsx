import React from 'react'
import { useFollow } from '../../users/hook/useFollow'

const Post = ({user,post,loading,handleLike, handleUnLike}) => {

    const { isfollow, handleFollow } = useFollow(post.isFollowing);
    
    console.log("USER:", user);
console.log("USER ID:", user?._id);
console.log("POST:", post);

  return (

    
    <div className="post">
        
               <div className='nav'>
                 <div className="user">
                    <div className='img-wrap'>
                        <img src= {user?.profileImage} alt="" />
                    </div>
                    <p>{user?.username}</p>

                        

                </div>

                <div role='button' className='follow' onClick={()=>{handleFollow(user.username)}}>
                         <p>{loading ? "..." : isfollow ? "Following" : "Follow"}</p>
                        </div>
               </div>
 
                <img src={post.imgUrl} alt="" />

                <div className="icons">
                    <div className="left">
                      
                        <buton><svg className={post?.isLiked ? "like" : ""} 
                        onClick={()=>{post.isLiked?handleUnLike(post._id):handleLike(post._id)}}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3">
  <path d="M34.6 6c-4 0-7.2 2-10.6 6.2C20.6 8 17.4 6 13.4 6 7.8 6 4 10.2 4 15.6c0 8.4 9.2 14.8 20 26.4 10.8-11.6 20-18 20-26.4C44 10.2 40.2 6 34.6 6z"/>
</svg></buton>
                        <buton><i class="ri-chat-4-line"></i></buton>
                        <buton><i class="ri-share-forward-line"></i></buton>
                    </div>

                    <div className="right">
                        <p><i class="ri-bookmark-line"></i></p>
                    </div>
                </div>

                <div className="bottom">
                    <p>{post.caption}</p>
                    
                </div>


            </div>
  )
 
}

  

export default Post
