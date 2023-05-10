import React from 'react';
import './experience.scss';

export default function Experience() {
 
  return (
    <>
      <div className="experience">
        <div className="achievement">
            <div className="circle" style={{color:'black'}}>8+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color:'black'}}>20+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color:'black'}}>5+</div>
            <span>companies</span>
            <span>work</span>
        </div>
      </div>
    </>
  )
}
