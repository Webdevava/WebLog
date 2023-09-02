import React from 'react'
import './App.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
    <div className="logo">WebLog</div>
      <div className='link-list'>
      <Link className='link' to="/">Home</Link> 
      <Link className='link' to="/about">About</Link> 
      <Link className='link' to="/articles">Articles</Link> 
      </div>
      <button className="login">Login</button>
    </nav>
  )
}

export default NavBar
