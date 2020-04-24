import React from 'react';
import { useSpring, animated } from 'react-spring'
import skillStructure from './skillStructure.json'
import './skillStyles.scss'

const Skills =()=>{
    const props = useSpring({ marginLeft: -500, from: { marginLeft: -500}, to: { marginLeft: 0 }, })
    return(
        <animated.div style={props}>
            <div className='skills'>
            <ul>
                {skillStructure.map(eachList => (
                    <li list={eachList.list} key={eachList.id} > </li>
                ))}
                </ul>
            </div>
        </animated.div>
    )
}


export default Skills