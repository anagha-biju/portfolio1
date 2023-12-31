import React from 'react';
import './App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div id='c' className='hero-container'>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Resume
        </Button>
      </div>  
    </div>
  );
}

export default HeroSection;