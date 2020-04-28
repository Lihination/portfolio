import React from 'react'
import './homeStyles.scss'
// import ContactMe from '../contact/contactComponent'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'

const Home= ()=> {
    const props = useSpring({ from:{ marginLeft:-500}, to:{ marginLeft: 0 } })
    return(
        <animated.div style={props}>
            <div className='home'>
            <h1>Lihin Ogana</h1>
            <div className='stack'>
                <h2>Fullstack Web Developer</h2>
                <hr/>
                {/* <Link to='/contact'><button type='submit'>My Resume</button></Link> */}
                <div className='skillset'>
                    <p className='skill'>HTML/CSS</p>
                    <p className='skill'>Bootstrap</p>
                    <p className='skill'>Javascript</p>
                    <p className='skill'>React</p>
                    <p className='skill'>NodeJS</p>
                    <p className='skill'>Express</p>
                    <p className='skill'>MongoDB</p>
                    </div>
            </div>
            </div>
        </animated.div>
    )
}
export default Home;