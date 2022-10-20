import React from 'react'

import product from '../assets/images/product-medium.jpg';

const Product = () => {
  return (
    <div className='product'>
        <img src={product} />
        <div className='product-details'>
            <p>Manchester United 21-22</p>
            <div className='price'>
                <h3>€30.0</h3>
                <p>€89.95</p>
            </div>
        </div>

    </div>
  )
}

export default Product