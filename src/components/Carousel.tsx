import React, { useRef, useEffect, useState } from 'react'

import axios from 'axios'

import bag from '../assets/icons/svg/bag.svg';

let activeId = ['1'];

// const useRef1 = useRef(null);
// const useRef2 = useRef(null);
// const useRef3 = useRef(null);
// const useRef4 = useRef(null);
// const useRef5 = useRef(null);

// let refArr = [useRef1,useRef2,useRef3,useRef4,useRef5]

// const lightsOut = () =>{
//   refArr.map((item)=>{
//     item.current.className = 'inactive';
//   })
// }



const api = axios.create({
  baseURL: `https://camiestas-futbol.effectstudios.co/api/v1/banner`
})

const handleClick = (e: any) => {


  e.target.className === 'inactive' ? e.target.className = 'active' : e.target.className = 'inactive'

  activeId[0] = e.target.id

  console.log(activeId)

}

let i = 0

const carousel = () => {
  const [bannersState, setBannersState] = useState(() => {
    return [{ id: '00000', content: 'Your favourite customize Club Jerseys.', image: '', btn_text: 'Shop now', link: '' }]
  });

  const [active, setActive] = useState(() => { return { id: '00000', content: 'Your favourite customize', image: '', btn_text: 'Shop now', link: '' } })

  const changeActive = (banners: any[]) => {

    let len = bannersState.length -1

    
    setActive(bannersState[i])
    len > i ? i++ : i = 0
    console.log(i)
  }


  useEffect(() => {
    api.get('/').then(res => {
      setBannersState(res.data.banners.data);
      console.log(bannersState);
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      changeActive(bannersState)
    }, 5 * 1000);

    return () => clearInterval(interval);

  }, [bannersState])


  return (
    <div className='carousel'>
      <h2>{String(active.content).replace('<p>','').replace('</p>','').replace('null','')} {/*<span>Club Jerseys.</span>*/}</h2>
      {/* {active.content} */}
      <div className='hero-buttons'>
        <div className='nav-buttons'>
          <div className={'inactive'} /*ref={useRef1}*/ id={'1'} onClick={(e) => handleClick(e)}></div>
          <div className={'inactive'} /*ref={useRef2}*/ id={'2'} onClick={(e) => handleClick(e)}></div>
          <div className={'inactive'} /*ref={useRef3}*/ id={'3'} onClick={(e) => handleClick(e)}></div>
          <div className={'inactive'} /*ref={useRef4}*/ id={'4'} onClick={(e) => handleClick(e)}></div>
          <div className={'inactive'} /*ref={useRef5}*/ id={'5'} onClick={(e) => handleClick(e)}></div>
        </div>
        <div className='shop-now-button'>
          <p>{active.btn_text}</p>
          <div className='shop-now-icon'>
            <img src={bag} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default carousel