import React from 'react';
import { useSpring, animated } from 'react-spring'
import './aboutStyles.scss'


const About = ()=>{
    const props = useSpring({ opacity:0 ,from: { opacity:0, marginTop: -500 },to: { opacity: 1, marginTop: 150 }})
        
    return(
        <animated.div style={props}><div className="about">
            <h1 className="title">ABOUT ME</h1>
            <h3 className="body" >Lihin Ogana is passionate about programming and <br/>spends ample time gaining useful knowledge to stay abreast with the changes in the industry.<br/>
            An environmentalist by choice and a farmer when not coding. <br/>A lover of nature and a voice for the preservation of biodiversity.
            </h3>
            </div>
            <div>
                <h1>social media handles below</h1>

            </div>
        </animated.div>  
    )
}
export default About;