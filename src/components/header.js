import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <span className='logo'>VM</span>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <header className='header'>
        <div className='header-wrap'>
          <nav className='main-nav'>
            <ul>
              <li><Link className='about' to='/about'>About</Link></li>
              <li><Link className='projects' to='/projects'>Projects</Link></li>
              <li><Link className='blog' to='/blog'>Blog</Link></li>
              <li><Link className='contact' to='/contact'>Contact</Link></li>
            </ul>
          </nav>
        </div>

      </header>
    </div>
  </div>
)

export default Header
