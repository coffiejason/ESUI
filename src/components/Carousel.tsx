import React from 'react'
import bag from '../assets/icons/svg/bag.svg';

const carousel = () => {
  return (
    <div className='carousel'>
      <h2>Your favourite customized <span>Club Jerseys</span></h2>
      <div className='hero-buttons'>
        <div className='nav-buttons'>
          <div className='active'></div>
          <div className='inactive'></div>
          <div className='inactive'></div>
          <div className='inactive'></div>
          <div className='inactive'></div>
        </div>
        <div className='shop-now-button'>
          <p>Shop Now</p>
          <div className='shop-now-icon'>
            <img src={bag} />
          </div>
        </div>
      </div>
      {/* <div className='nav-buttons'>
          <div className='active'></div>
          <div className='inactive'></div>
          <div className='inactive'></div>
          <div className='inactive'></div>
          <div className='inactive'></div>
        </div> */}
    </div>
  )
}

export default carousel