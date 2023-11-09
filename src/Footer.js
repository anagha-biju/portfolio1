import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <h1 className='mainhead'>Contact Me!</h1>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/sign-up'>9778097652</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Email ID</h2>
            <Link to='/'>emailid</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>LinkedIn</h2>
            <Link to='/'>Link</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;