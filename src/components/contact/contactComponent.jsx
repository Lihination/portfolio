import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import './contactStyles.scss'

const ContactMe= ()=>{
    const props = useSpring({ from:{ marginRight:-500}, to: {marginRight:50} })
    return(
        <animated.div style={props}>
            <div className='contact'>
                <h1>
                    Get in touch!
                </h1>
                <h3>Let's get the ball rolling!</h3>
                <div className="link">
                    <h4>Call me:</h4>
                    <h3>(+234)7056999957</h3>
                    <h4>Email me:</h4>
                    <h3>lihinogana@gmail.com</h3>
                </div>
        </div>
        </animated.div>
    )
}
export default ContactMe;