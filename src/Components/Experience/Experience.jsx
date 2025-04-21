import React from 'react';
import './experience.scss';

export default function Experience() {
 
  return (
    <>
      <div className="experience">
        <div className="achievement">
            <div className="circle" style={{color:'black'}}>2+</div>
            <span>years</span>
            <span>Working Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color:'black'}}>20+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color:'black'}}>2+</div>
            <span>companies</span>
            <span>work</span>
        </div>
      </div>
    </>
  )
}
