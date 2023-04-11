import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Post = () => {
  
    const Posts=useLoaderData();
    console.log(Posts)
  return (
    <div>
       <h1>All Post {Posts.length}</h1>
       {
        Posts.map((post)=>{
           return(
            <div style={{marginBottom:"10px",marginLeft:"10px"}}>
             Id:{post.id}
             <button style={{marginLeft:"10px"}}>
             <Link to={`/post/${post.id}`}>Details</Link>
             </button>
            </div>
            
           )
        })
       }
    </div>
  )
}

export default Post

