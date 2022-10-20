import React from 'react'
import { Carousel, Header, List, Nav } from '../components'
import Features from '../components/Features'

import reward from '../assets/icons/svg/rewards-badge.svg';

const LandingPage = () => {
  return (
    <>
    
    <Header />
    <Nav />
    <div className='home'>
      <Carousel />
      <Features />
      <img className='reward' src={reward} />
      <List title={'MOST POPULAR'} />
      <List title={'COUNTRY LEAGUE'} />
    </div>
    </>
    
  )
}

export default LandingPage