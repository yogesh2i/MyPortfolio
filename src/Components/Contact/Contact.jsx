import React, { useContext, useRef, useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser'
import { themeContext } from '../../Context';

function Contact() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [msg,setMsg] = useState('');
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done,setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
     
      emailjs.sendForm('service_d6g36rf', 'template_hexr65s', form.current, '4c5f-p9t6n_V_MngG')
        .then((result) => {
            setDone(true);
            setEmail('');
            setName('');
            setMsg('');
            setTimeout(()=>{
              setDone(false);
            },3000);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <>
      <div className="contact-form" id='contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
            </div>
        </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name' required minLength={3} value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" name='user_email' className='user' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <textarea name="message" className='user' placeholder='Message' required value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
            <input type="submit" value="Send" className='button' style={{cursor:'pointer'}}/>
            <span style={{color:'var(--orange)'}}>{done && "*Thanks for contacting*"}</span>
            <div className='blur c-blur1' style={{background: 'var(--purple)'}}></div>
        </form>
      </div>
      </div>
    </>
  )
}

export default Contact
