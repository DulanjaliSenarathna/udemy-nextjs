import React from 'react'
import Post from './Post'
import classes from './PostsList.module.css'

const PostsList = () => {
  return (
    <ul className={classes.posts}>
         <Post author="Dulani" body="This is a body"/>
         <Post author="Mesi" body="This is a body2"/>
    </ul>
  )
}

export default PostsList