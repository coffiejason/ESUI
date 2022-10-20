import React from 'react'
import globe from '../assets/icons/svg/globe.svg';
import whatsapp from '../assets/icons/svg/whatsapp.svg';
import left from '../assets/icons/svg/left.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='language_select'>
        <div className='inner'>
          <img className='globe' src={globe} />
          <p>EN</p>
          <img className='dropdown' src={left} />
        </div>
      </div>
      <p>SALES BEGIN · FREE SHIPPING ON ALL ORDERS</p>
      <div className='chat_with_us'>
        <img src={whatsapp} />
        <p>CHAT WITH US</p>
      </div>
    </div>
  )
}

export default Header