import React from 'react'
import Image from '../assets/pp.jpeg'

const Sidebar = ({ name }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top' id='sideNav'>
      <a className='navbar-brand js-scroll-trigger' href='#about'>
        <span className='d-block d-lg-none'>{name}</span>
        <span className='d-none d-lg-block'>
          <img className='img-fluid img-profile rounded-circle mx-auto mb-2' src={Image} alt='profile picture'/>
        </span>
      </a>
      <button className='navbar-toggle'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-expanded='false'
        aria-label='toggle navigation'
      >
        <span className='navbar-toggle-icon'/>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#about'>About</a> 
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#experience'>Work Experience</a> 
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#education'>Education</a> 
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#portfolio'>Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar