import React from 'react'
import './navbar.css'
import logo from '../images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'


const NavBar = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to='/' className='logo'><img src={logo} alt="Nav Logo" /></Link>
            <ul className='nav_links'>
              {
                links.map(({name, path}, index) => {
                  return(
                    <li>
                      <NavLink to={path}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <button nav_toggle_btn><GoThreeBars/></button>
        </div>
    </nav>
  )
}

export default NavBar
