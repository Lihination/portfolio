import React from 'react'
import { Link } from 'react-router-dom'

import './navbarStyles.scss'

const Navbar = ()=>(
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link>

    </div>
)

export default Navbar;