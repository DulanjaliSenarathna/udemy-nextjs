import React, { useState } from 'react'
import Post from './Post'
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

const PostsList = () => {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');


    const changeBodyHandler = (event) =>{
       setEnteredBody(event.target.value);
    } 
    
    const changeAuthorHandler = (event) =>{
      setEnteredAuthor(event.target.value);
   } 
  return (
    <>
    <Modal>
    <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
    </Modal>
    <ul className={classes.posts}>
         <Post author={enteredAuthor} body={enteredBody}/>
         <Post author='Dula' body='This is good'/>
    </ul>
   
    </>
    
  )
}

export default PostsList