import React from 'react'
import axios from "axios";
import { Carousel, Grid, Header, List, Nav, Personal } from '../components'
import Features from '../components/Features'

import reward from '../assets/icons/svg/rewards-badge.svg';
import Footer from '../components/Footer';

const LandingPage = () => {
  const getProducts = () => {
    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  }

  const leagues = [
    {
      name: "Champions League",
      imgurl: "../assets/images/country-leagues/champions-league.jpg"
    },
    {
      name: "Europe League",
      imgurl: "../assets/images/country-leagues/europa-league.jpg"
    },
    {
      name: "Copa America",
      imgurl: "../assets/images/country-leagues/copa-america.jpg"
    },
    {
      name: "Asia Cup",
      imgurl: "../assets/images/country-leagues/asian-cup.jpg"
    },
    {
      name: "African Nations Cup",
      imgurl: "../assets/images/country-leagues/caf.jpg"
    }
  ]
  return (
    <>

      <Header />
      <Nav />
      <div className='home'>
        <Carousel />
        <Features />
        <img className='reward' src={reward} />
        <List title={'MOST POPULAR'} type={'product'} />
        <List title={'COUNTRY LEAGUE'} type={'league'} data={leagues}/>
        <Grid />
        <Personal />
        <Footer />
      </div>
    </>

  )
}

export default LandingPage