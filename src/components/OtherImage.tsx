import React from 'react'

import right from '../assets/icons/svg/right-dark.svg';

const OtherImage = (props:any) => {
  return (
    <div className='other-image'>
        <img src={props.image} />
        <div className='under-blur'>
          <p>{props.label}</p>
          <div className='icon-box'>
            <img src={right} />
          </div>
        </div>
    </div>
  )
}

export default OtherImage