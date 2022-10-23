import React from 'react'

import league from '../assets/images/country-leagues/champions-league.jpg';
import { useState } from 'react';

const League = (props:any) => {
  
  return (
    <div className='league'>
      {/* {
        props.leagues.map((item:any) =>{
          <>
            <img src={item.imgurl} />
           <p>{item.imgurl}</p>
          </>

        })
      } */}
    <img src={props.url} />
    <p>{props.name}</p>

    </div>
  )
}

export default League