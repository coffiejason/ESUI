import React, { useRef, useEffect, useState } from 'react'

import axios from 'axios'

import bag from '../assets/icons/svg/bag.svg';
import hero from '../assets/images/hero.jpg'



const api = axios.create({
  baseURL: `https://camiestas-futbol.effectstudios.co/api/v1/banner`
})

let i = 0

const carousel = () => {

  const [bannersState, setBannersState] = useState(() => {
    return [{ id: '00000', content: 'Your favourite customize Club Jerseys.', image: '', btn_text: 'Shop now', link: '', bar_num: 0 }]
  });

  const [active, setActive] = useState(bannersState[0])


  const handleClick = (e: any,index:any) => {
    setActive(bannersState[index])
  }

  const changeActive = () => {

    let len = bannersState.length - 1

    bannersState[i].bar_num = i

    setActive(bannersState[i])
    len > i ? i++ : i = 0
  }


  useEffect(() => {
    api.get('/').then(res => {
      setBannersState(res.data.banners.data);
    })
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      changeActive()
    }, 5 * 1000);

    return () => clearInterval(interval);

  }, [bannersState])


  return (
    <>
      <div className='carousel2'>
        <img className='hero-img' src={active.image} />
        <h2>{String(active.content).replace('<p>', '').replace('</p>', '').replace('null', '')} {/*<span>Club Jerseys.</span>*/}</h2>
        {/* {active.content} */}
        <div className='hero-buttons'>
          <div className='nav-buttons'>
            
            {
              bannersState.map((item,index)=>(
                <>
                  <div className={index == active.bar_num ? 'active' : 'inactive'} id={String(index)} onClick={(e) => handleClick(e,index)}></div>
                </>
              ))
            }
          </div>
          <div className='shop-now-button'>
            <p>{active.btn_text}</p>
            <div className='shop-now-icon'>
              <img src={bag} />
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default carousel