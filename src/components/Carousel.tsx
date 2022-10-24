import React, {useRef,useEffect,useState} from 'react'

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

const handleClick = (e:any) =>{

    
  e.target.className === 'inactive' ?  e.target.className = 'active' : e.target.className = 'inactive'

  activeId[0] = e.target.id

  console.log(activeId)

}

let banners: any[] = [{
  id: '00000',
  content: 'Your favourite customized',
  image: '',
  btn_text: 'Shop now',
  link: ''
}]

const carousel = () => {

  useEffect(()=>{
    api.get('/').then(res =>{
      res.data.banners.data.map((item:any)=>{
        banners.push(
          {
            id: item.id,
            content: item.content,
            image: item.image,
            btn_text: item.btn_text,
            link: item.link
          }
        )
      })
    })
  },[])
  

  return (
    <div className='carousel'>
      <h2>{banners[0].content} <span>Club Jerseys.</span></h2>
      <div className='hero-buttons'>
        <div className='nav-buttons'>
          <div className={'inactive'} /*ref={useRef1}*/ id={'1'} onClick={(e)=>handleClick(e)}></div>
          <div className={'inactive'} /*ref={useRef2}*/ id={'2'} onClick={(e)=>handleClick(e)}></div>
          <div className={'inactive'} /*ref={useRef3}*/ id={'3'} onClick={(e)=>handleClick(e)}></div>
          <div className={'inactive'} /*ref={useRef4}*/ id={'4'} onClick={(e)=>handleClick(e)}></div>
          <div className={'inactive'} /*ref={useRef5}*/ id={'5'} onClick={(e)=>handleClick(e)}></div>
        </div>
        <div className='shop-now-button'>
          <p>{banners[0].btn_text}</p>
          <div className='shop-now-icon'>
            <img src={bag} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default carousel