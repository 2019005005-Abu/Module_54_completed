import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'

const PostDetails = () => {
    const postDetails=useLoaderData();
    const navigate=useNavigate();
    function Goback(){
       navigate(-1)
    }
  return (
    <div>
      <h1>{postDetails.id}</h1>
      <p>{postDetails.title}</p>
      <p>{postDetails.body}</p>
      <Link to='/post'>Post</Link>
      <button onClick={Goback} style={{marginLeft:"20px"}}>Previous Page</button>
    </div>
  )
}

export default PostDetails
