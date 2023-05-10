import React, { useContext } from 'react';
import './card.scss';
import { themeContext } from '../../Context';

export default function Card({emoji,heading,detail}) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
      <div className="card">
        <img src={emoji} alt="" />
        <span style={{color:darkMode?'white':''}}>{heading}</span>
        <span>{detail}</span>
      </div>
    
  )
}
