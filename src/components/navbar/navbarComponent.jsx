import React from 'react'
import { Link } from 'react-router-dom'

import './navbarStyles.scss'

const Navbar = ()=>(
    <div className='nav'>
        <div className='logo'>
            <Link to='/'>Lihin Ogana</Link>
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
)

export default Navbar;