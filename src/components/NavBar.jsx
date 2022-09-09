import React from 'react'
import { useState } from 'react'
import './navbar.css'
import logo from '../images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'


const NavBar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
        <div className="container nav_container">
            <Link to='/' className='logo'><img src={logo} alt="Nav Logo" /></Link>
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_Nav'}`}>
              {
                links.map(({name, path}, index) => {
                  return(
                    <li key={index}>
                      <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <button className='nav_toggle-btn' onClick={()=> setIsNavShowing(!isNavShowing) }>
              {
                  isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
              }
              </button>
        </div>
    </nav>
  )
}

export default NavBar
