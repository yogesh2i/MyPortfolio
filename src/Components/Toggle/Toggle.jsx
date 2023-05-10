import React, { useContext } from 'react';
import './toggle.scss';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context';

function Toggle() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleMode=()=>{
        theme.dispatch({type:"toggle"});
    }
  return (
    <>
      <div className="toggle" onClick={handleMode}>
        <Moon/>
        <Sun/>
        <div className="t-button"
        style={darkMode?{left:'2px'}:{right:'2px'}}
        
        >
            
        </div>

      </div>
    </>
  )
}

export default Toggle
