import React from 'react'

import OtherImage from './OtherImage';

import kids from '../assets/images/other-collections/kids.jpg'
import large from '../assets/images/other-collections/large-sizes.jpg'
import goalkeeper from '../assets/images/other-collections/goalkeeper.jpg'
import pro from '../assets/images/other-collections/pro-player.jpg'
import shorts from '../assets/images/other-collections/shorts.jpg'
import socks from '../assets/images/other-collections/socks.jpg'

const upper = [
  {
    name: "Kids",
    image: kids
  },
  {
    name: "Large sizes",
    image: large
  },
  {
    name: "Goalkeeper",
    image: goalkeeper
  }
]

const lower = [
  {
    name: "Authentic / Pro Player",
    image: pro
  },
  {
    name: "Shorts",
    image: shorts
  },
  {
    name: "Socks",
    image: socks
  }
]

const OtherCollections = (props: any) => {
  return (
    <div className='collection'>
      <div className='heading'>
        <h2>{props.title}</h2>
        {/* <div className='navitagor'>
            <div className='left-button'><img src={left} /></div>
            <div className='right-button'><img src={right} /></div>
        </div> */}
      </div>
      <div className='grid'>
        <div className='content'>
          {
            upper.map((item)=>(
              <div className='image'>
                <OtherImage label={item.name} image={item.image} />
              </div>

            ))
          }
        </div>
        <div className='content'>
          {
              lower.map((item)=>(
                <div className='image'>
                  <OtherImage label={item.name} image={item.image} />
                </div>

              ))
            }
        </div>
      </div>


    </div>
  )
}

export default OtherCollections