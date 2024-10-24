import React from 'react'
import classes from './Post.module.css'

const names = ['Lakruwan','Nisitha']

const Post = ({author, body}) => {

    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
       
    </div>
  )
}

export default Post