import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../src/Components/ActiveLink.css"
const ActiveLink = ({to,children}) => {
  return (
    <div>
      <NavLink
      to={to}
      className={({isActive,IsPending})=>isActive 
      ?'Active' :''} 
      >
      </NavLink>

    </div>
  )
}

export default ActiveLink
