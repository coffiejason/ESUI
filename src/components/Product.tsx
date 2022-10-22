import React from 'react'

import { useNavigate  } from "react-router-dom";

import product from '../assets/images/product-medium.jpg';

const Product = () => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/product")
  }

  return (
    <div className='product' onClick={handleClick}>
        <div className='img-div'>
          <img src={product} />
          <div className='save-percentage'>
            <p>Save 67%</p>
          </div> 
        </div>
        
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