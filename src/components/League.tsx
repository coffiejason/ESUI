import React from 'react'

import league from '../assets/images/country-leagues/champions-league.jpg';
import { useState } from 'react';

const League = (props:any) => {
  

  console.log(props.leagues)
  return (
    <div className='league'>
      {
        props.leagues.map((item:any) =>{
          <>
            <img src={item.imgurl} />
           <p>{item.imgurl}</p>
          </>

        })
      }
    <img src={league} />
    <p>League Name</p>

    </div>
  )
}

export default League