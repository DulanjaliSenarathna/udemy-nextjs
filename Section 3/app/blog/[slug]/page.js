import React from 'react'

const BlogPostPage = ({params}) => {
  return (
    <main>
        <div>Blog</div>
        <p>{params.slug}</p>
    </main>
    
  )
}

export default BlogPostPage