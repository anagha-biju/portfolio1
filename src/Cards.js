import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
function Cards() {
  return (
    <div id='a' className='cards'>
      <h1>Check out my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='TravelPal'
              details='An interactive UI/UX design of a travel app called TravelPal created using Figma.'
            />
            <CardItem
              src='images/twitter.jpg'
              text='Twitter App'
              details='A twitter social media website created using languages such as HTML, CSS and Javascript.'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/VITrack.png'
              text='VITrack'
              details='A student-friendly shuttle tracking website created using HTML, CSS and JavaScript.'
            />
            <CardItem
              src='images/calc.png'
              text='Calculator '
              details='A calculator created using ReactJS                                                                                                                                                                                                                                                                                                                                               '
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;