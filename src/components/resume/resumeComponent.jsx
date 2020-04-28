import React from 'react';
import { useSpring, animated } from 'react-spring'
// import skillStructure from './skillStructure.json'
import './resumeStyles.scss'

const Skills =()=>{
    const props = useSpring({ from: { marginLeft:-500}, to: { marginLeft: 70, marginTop:30 } }) 
    return(
        <animated.div style={props}>
            <div className='resume'>
                
            </div>
        </animated.div>
    )
}


export default Skills