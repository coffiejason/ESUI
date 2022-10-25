import React, { useRef, useEffect, useState } from 'react'

import axios from 'axios'

import bag from '../assets/icons/svg/bag.svg';
import hero from '../assets/images/hero.jpg'

let activeId = ['1'];




const api = axios.create({
  baseURL: `https://camiestas-futbol.effectstudios.co/api/v1/banner`
})



let i = 0
let refArr: any[] = []

const carousel = () => {

  const [bannersState, setBannersState] = useState(() => {
    return [{ id: '00000', content: 'Your favourite customize Club Jerseys.', image: '', btn_text: 'Shop now', link: '' }]
  });

  const [active, setActive] = useState({ id: '00000', content: 'Your favourite customize', image: '', btn_text: 'Shop now', link: '' })


  useEffect(()=>{
    refArr = []
    bannersState.map(()=>{
      //refArr.push(useRef(null))
    })

  },[bannersState])



  const lightsOut = () =>{

    console.log('here')
    refArr.map((item)=>{
      console.log(item.current.className )
      item.current.className = 'inactive';
      console.log(item.current.className )
    })
    
  }

  const handleClick = (e: any) => {

    lightsOut
    e.target.className === 'inactive' ? e.target.className = 'active' : e.target.className = 'inactive'

    activeId[0] = e.target.id

    console.log(activeId)

  }

  const changeActive = (banners: any[]) => {

    let len = bannersState.length - 1


    setActive(bannersState[i])
    len > i ? i++ : i = 0
    console.log(i)
  }


  useEffect(() => {
    api.get('/').then(res => {
      setBannersState(res.data.banners.data);
      console.log(bannersState);
    })
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      changeActive(bannersState)
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
                  <div className={'inactive'} id={String(index)} onClick={(e) => handleClick(e)}></div>
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