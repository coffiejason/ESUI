import React from 'react'

import left from '../assets/icons/svg/left.svg';
import right from '../assets/icons/svg/right.svg';
import Product from './Product';

const List = (props:any) => {
  return (
    <div className='list'>
        <div className='heading'>
            <h2>{props.title}</h2>
            <div className='navitagor'>
                <div className='button'><img src={left}/></div>
                <div className='button'><img src={right} /></div>
            </div>
        </div>
        <div className='content'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        
    </div>
  )
}

export default List