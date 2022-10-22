import React from 'react'

import heart from '../assets/icons/svg/heart-outline.svg';
import cart from '../assets/icons/svg/shopping-cart-white.svg';

const Form = () => {
  return (
    <div className='order-form'>
      <h2>Manchester United 21-22 Home Shirt</h2>
      <div className='pricing'>
        <div className='price'>
          <h3>€30.0</h3>
          <p className='discount'>€89.95</p>
          <div className='save-percentage'><h3>save 67%</h3></div>
        </div>
        <div className='favorite'>
          <img src={heart} />
          <p>Add to favorites</p>
        </div>
      </div>
      <div>
        <p className='text-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec ornare, dui vel facilisis luctus, metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit tellus... <span>Read More</span>
        </p>
        <form>
          <div className='size'>
            <p>Size <span>*</span></p>
            <select placeholder={'  Select a shirt size'}>
              <option value='default'>Select a shirt size</option>
              <option value="volvo">Extra Small - XS</option>
              <option value="saab">Small - S</option>
              <option value="fiat">Medium - M</option>
              <option value="audi">Large -  L</option>
              <option value="audi">Extra Large -  XL</option>
              <option value="audi">Extra x2 Large - XXL</option>
            </select>
            <input type={'button'} value={'View Size Chart'}/>
          </div>
          <div className='size'>
            <p>Name</p>
            <input type={'text'} placeholder={'What name would you want in the shirt?'}/>
          </div>
          <div className='size'>
            <p>Number on Shirt</p>
            <input type={'text'} placeholder={'Enter a number between 0 and 99'}/>
          </div>
          <div className='size'>
            <p>Patch</p>
            <select className='patch'>
              <option value={'default'}>Select a patch</option>
            </select>
          </div>
          <div className='size'>
            <p>Quantity</p>
            <input className='quantity' type={'number'} placeholder={'1'} />
          </div>

          <div className='size'>
            <div className='add-to-cart'>
              <p>Add to Cart</p>
              <div className='add-to-cart-icon'>
                <img src={cart} />
              </div>
            </div>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Form