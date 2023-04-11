import React from 'react'
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
const Header = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/friend'>Friends</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/post'>Post</Link>
    </nav>
  )
}

export default Header
