import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
       <div className='container footer_container'>
        <article>
            <Link to='/' className='logo'>
                <img src={Logo} alt="Footer Logo" />
            </Link>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nulla odio tempora dolore cupiditate est quisquam consectetur illum aliquid earum!
            </p>
            <div className="footer_socials">
                <a href="http://linkedin.com" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                <a href="http://facebook.com" target="_blank" rel='noreferrer noopener'><FaFacebook/></a>
                <a href="http://twitter.com" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                <a href="http://instagram.com" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
            </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainer">Trainer</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/about">Blog</Link>
            <Link to="/plans">Case Studies</Link>
            <Link to="/trainer">Events</Link>
            <Link to="/gallery">Communities</Link>
            <Link to="/contact">FAQs</Link>
        </article>
        <article>
            <h4>Get In Tought</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/support">Support</Link>
        </article>
        <div className='footer_copyrihgt'></div>
        </div> 
    </footer>
  )
}

export default Footer
