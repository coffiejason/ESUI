import React from 'react'

import truck from '../assets/icons/svg/truck.svg';

const Features = () => {
    return (
        <div className='features'>
            <div className='feature'>
                <div className='icon-front'>
                    <img src={truck} />
                </div>
                <h4>Secure Shipping</h4>
                <p>On all Orders</p>
            </div>
        </div>
    )
}

export default Features