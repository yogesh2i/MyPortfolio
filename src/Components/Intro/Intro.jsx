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
                <span>A dedicated and innovative software developer with a strong background in Next.js, React, and TypeScript. Currently working as a contract developer at Empyreal LLC, Gujarat, where I handle a wide range of responsibilities from backend management of user data to creating APIs and integrating them at the frontend. I have a knack for transforming Figma designs into functional UI pages, ensuring a seamless user experience. My ability to understand and translate business requirements into software solutions and my commitment to on-time delivery make me a valuable asset to any team. Always eager to embrace new challenges and technologies in the ever-evolving world of web development.</span>
            </div>
            <a href='https://www.linkedin.com/in/yogesh-kumar-9b587b252' ><button className="i-button button">Hire Me</button></a>
            <div className="i-icons">
                <a href="https://www.github.com/yogesh2i" target='_blank' rel='noreferrer'>
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/yogesh-kumar-9b587b252" rel='noreferrer' target='_blank'>
                <img src={LinkedIn} alt="" />
                </a>
                <a href="https://instagram.com/kaptaan_00026?igshid=NTc4MTIwNjQ2YQ==" rel='noreferrer' target='_blank'>
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
