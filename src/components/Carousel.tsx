import React from 'react'
import bag from '../assets/icons/svg/bag.svg';

let activeId = ['1'];

const carousel = () => {
  const handleClick = (e:any) =>{
    //e.target.className === 'inactive' ? 

  }
  return (
    <div className='carousel'>
      <h2>Your favourite customized <span>Club Jerseys</span></h2>
      <div className='hero-buttons'>
        <div className='nav-buttons'>
          <div className='active' id={'1'} onClick={(e)=>handleClick(e)}></div>
          <div className='inactive' id={'2'} onClick={(e)=>handleClick(e)}></div>
          <div className='inactive' id={'3'} onClick={(e)=>handleClick(e)}></div>
          <div className='inactive' id={'4'} onClick={(e)=>handleClick(e)}></div>
          <div className='inactive' id={'5'} onClick={(e)=>handleClick(e)}></div>
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