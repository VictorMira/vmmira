import React from 'react'
import { Link } from 'gatsby'

import './header.scss'

const Header = ({ siteTitle }) => (
    <header className='header'>
      <span className='logo'>VM</span>
      <h1 className='siteTitle'>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <nav className='main-nav'>
        <ul>
          <li className='active'><Link className='about' to='/about'>About</Link></li>
          <li><Link className='projects' to='/projects'>Projects</Link></li>
          <li><Link className='blog' to='/blog'>Blog</Link></li>
          <li><Link className='contact' to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
)

export default Header
