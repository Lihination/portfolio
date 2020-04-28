import React from 'react';
import { useSpring, animated } from 'react-spring';
import './aboutStyles.scss'


const About = ()=>{
    const props = useSpring({ from: {marginTop: -500 },to: {marginTop: 10 }})
    
    return(
        <animated.div style={props}>
            <div className="about">
                <div>
                    <h2 className="title">About Me</h2>
                    <h4 className="body" > I am a Web developer from Cross Rivers, Nigeria. Completely <br/>driven and permanently curious, I have a growing passion for <br/>programming and tech. I spend ample time gaining useful<br/> skills to stay abreast with the changes in the industry. <br/>
                    An environmentalist by choice and a farmer when not coding. <br/>A lover of nature and a voice for the preservation of biodiversity.
                    </h4>
                </div>
                <div  className='img'>
                    <div>
                        <h1>Image</h1>
                    </div>
                </div>
            </div>
            <div>
                <h2>What I can do for you</h2>
                <div className='list'>
                    <h3  className='eachList'>Web Dev</h3>
                    <h3 className='eachList'>E-Commerce</h3>
                    <h3 className='eachList'>SEO</h3>
                </div>
            </div>
        </animated.div>  
    )
}

export default About;