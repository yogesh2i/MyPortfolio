import React, { useContext } from 'react';
import './intro.scss';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesemoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';


function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 2, type: 'spring'};
  return (
    <>
      <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hy! I Am</span>
                <span>Yogesh Kumar</span>
                <span>My objective is to obtain a challenging IT internship where I can use my strong educational background and specialize training to add value to the firm. Proficiency in languages and associated tools and a good team player.</span>
            </div>
            <a href='https://www.linkedin.com/in/yogesh-kumar-9b587b252' ><button className="i-button button">Hire Me</button></a>
            <div className="i-icons">
                <a href="https://www.github.com/yogesh2i" target='_blank' rel='noreferrer'>
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/yogesh-kumar-9b587b252" rel='noreferrer' target='_blank'>
                <img src={LinkedIn} alt="" />
                </a>
                <a href="#/">
                <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Boy} alt="" />
            <motion.img 
             initial={{left:'-36%'}}
             whileInView={{left:'-24%'}}
             transition={transition}
            src={Glassesemoji} alt="" />
            <motion.div
             initial={{top:'-4%',left:'74%'}}
             whileInView={{left:'68%'}}
             transition={transition}
            style={{top: '-4%',left: '65%'}}
            className='ftdiv'>
                <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
            </motion.div>
            <motion.div
             initial={{top:'18rem',left:'9rem'}}
             whileInView={{left:'2rem'}}
             transition={transition}
            style={{top: '18rem',left: '2rem'}}>
                <FloatingDiv image={Thumbup} text1={'Quick'} text2={'Learner'}/>
            </motion.div>
            {/* blur div  */}
            <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
            <div className='blur' style={{background: '#C1F5FF',top :'17rem',width:'21rem',height:'11rem',left: '-9rem'}}></div>
        </div>
      </div>
    </>
  )
}

export default Intro
