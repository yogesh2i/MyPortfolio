import React from 'react';
import './navbar.scss';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <>
      <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Yogesh</div>
           <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                  <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                  </Link>
                  <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                  </Link>
                  <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Projects</li>
                  </Link>
                 
                 
                </ul>
            </div>
            <Link spy={true} to='contact' smooth={true}>
            <button className="button n-button">
                   Contact
            </button>
                  </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
