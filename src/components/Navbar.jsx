import React from 'react'
import { Link } from "gatsby"

function Navbar() {
  return (<div className='navbar-item'>
    <Link className='button' to='/home'>Home</Link>
    <Link className='button'  to='/about'>About</Link>
    <Link className='button'  to='/blog/1'>blog</Link>
  </div>)
}

export default Navbar