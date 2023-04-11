import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Friends = () => {
    const users=useLoaderData();
    console.log(users)
  return (
    <div>
      <h1>Friends</h1>
      <div >
      {
        users.map((user)=>{
           const {name,username,email,id}=user
           return(
               <div key={user.id} style={{border:"1px solid red",
               margin:"10px",padding:"10px"}}>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
                <p><Link to={`/friend/${id}`}>Show Details</Link></p>
               </div>
           )
        })
         }
      </div>
     
    </div>
  )
}

export default Friends
