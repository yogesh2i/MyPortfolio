import React, { useContext, useEffect, useRef, useState } from 'react';
import './services.scss';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Yogesh_resume.pdf';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';

export default function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 2,type: 'spring'};
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
      <div className="services" id='Services'>
        {/* left side  */}
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>My Awesome</span>
            <span>services</span>
            {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor sit amet consectetur.
            </span> */}
            <a href={Resume} download>

            <button className="button s-button">Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* right side  */}
        <div className="cards">
            <motion.div 
            initial={{left:'25rem'}}
            whileInView={{left:'14rem'}}
            transition={transition}
            style={{left:'14rem'}}
            ref = {elementRef}
            className={` animation ${isVisible ? 'slide-in' : ''}`}>
                <Card emoji={HeartEmoji} heading={'Tech Stack'} detail={"HTML, CSS, Javascript, Git, TypeScript, gRPC"}/>
            </motion.div>
            {/* second card  */}
            <motion.div 
            initial={{left:'-20rem'}}
            whileInView={{left:'-2rem'}}
            transition={transition}
            className={` animation ${isVisible ? 'slide-in' : ''}`}
            style={{top:"11rem",left:"-2rem"}}>
                <Card emoji={Glasses} heading={'Extra Stuff'} detail={"React Js,Next Js, Redux/toolkit, Bootstrap, SASS"}/>
            </motion.div>
            {/* third card  */}
            <motion.div 
            initial={{left:'25rem'}}
            whileInView={{left:'14rem'}}
            transition={transition}
            className={` animation ${isVisible ? 'slide-in' : ''}`}
            style={{top:"19rem",left:"12rem"}}>
                <Card emoji={Humble} heading={'Learning'} detail={"Java, Tailwind CSS, Node Js"}/>
            </motion.div>
            <div className='blur s-blur2' style={{background: 'var(--purple'}}></div>
        </div>
      </div>
    
  )
}
