import React from 'react'
import image from '../assets/images/product-large.jpg';
import smaller from '../assets/images/product-small.jpg';
import left from '../assets/icons/svg/left-black.svg';
import List from './List';

const ItemViewer = () => {
  return (
    <div className='item-viewer'>
        <img src={image} />
        <div className='image-list'>
          <div className='image-select-active'>
            <div className='pointer'>
              <img src={left} />
            </div>
            <img src={smaller} />
          </div>
          <div className='image-select'>
            <img src={smaller} />
          </div>
          <div className='image-select'>
            <img src={smaller} />
          </div>
          <div className='image-select'>
            <img src={smaller} />
          </div>
          <div className='image-select'>
            <img src={smaller} />
          </div>
          <div className='image-select'>
            <img src={smaller} />
          </div>
        </div>
    </div>
  )
}

export default ItemViewer