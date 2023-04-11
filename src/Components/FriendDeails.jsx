import React from 'react'
import { useLoaderData } from 'react-router-dom'

const FriendDeails = () => {
  const FriendDeails=useLoaderData();
  console.log('friendsDetails',FriendDeails)
  const {name,email,userName,id}=FriendDeails
  return (
    <div>
      <h1>FriendDeails</h1>
      <p></p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{userName}</p>
    </div>
  )
}

export default  FriendDeails

