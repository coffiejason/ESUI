import React from 'react'

import parnters from '../assets/images/payment-partners.png';
import paperplane from '../assets/icons/svg/paper-plane.svg';
import Socials from './Socials';

const Footer = () => {
  return (
    <>
      <div className='pre-footer'>
        <div className='pre-footer-div'>
          <h2>Main Menu</h2>
          <p>Home</p>
          <p>NBA</p>
          <p>Tracksuits</p>
          <p>Products Delivery · 1 - 2 Days</p>
          <p>Contact</p>
          <p>Reviews</p>
        </div>
        <div className='pre-footer-div'>
          <h2>Secondary Menu</h2>
          <p>Search</p>
          <p>Privacy</p>
          <p>Shipping policy</p>
          <p>Returns Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className='pre-footer-div'>
          <h2>Subscribe</h2>
          <p>Subscribe to our mailing list <br></br> to receive the latest news.</p>
          <div className='subscribe'>
            <input type={'email'} placeholder={'Email Address'}/>
            <div className='subscribe-button'>
              <img src={paperplane} />
            </div>
          </div>
          
 
        </div>
        <div className='pre-footer-div'>
          <h2>Follow us</h2>
          <Socials theme={'dark'} />
        </div>
      </div>
      <div className='footer'>
        <p>{'© 2021 Jambulani  •  All rights reserved'}</p>
        <img src={parnters} />

      </div>
    </>

  )
}

export default Footer