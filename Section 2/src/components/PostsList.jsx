import React, { useState } from 'react'
import Post from './Post'
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

const PostsList = ({isPosting, onStopPosting}) => {

const [posts, setPosts] = useState([]);

const addPostHandler = (postData) =>{
  setPosts((existingPosts)=> [postData, ...existingPosts]);
}
  
  return (
    <>
    {isPosting && (<Modal onClose={onStopPosting}>
    <NewPost 
    onCancel={onStopPosting} onAddPost={addPostHandler}/>
    </Modal>)}
    {posts.length >0 && <ul className={classes.posts}>
         {posts.map((post)=> <Post key={post.body} author={post.author} body={post.body}/>)}
    </ul>}
    {posts.length == 0 && <div style={{textAlign:'center', color:'white'}}>
      <h2>No posts</h2>
      </div>}
   
    </>
    
  )
}

export default PostsList