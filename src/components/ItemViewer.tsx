import React from 'react'
import image from '../assets/images/product-large.jpg';
import List from './List';

const ItemViewer = () => {
  return (
    <div className='item-viewer'>
        <img src={image} />
        <div className='image-select'>

        </div>
    </div>
  )
}

export default ItemViewer