import React from 'react'
import axios from "axios";
import { Carousel, Grid, Header, Leagues, List, Nav, Personal } from '../components'
import Features from '../components/Features'

import reward from '../assets/icons/svg/rewards-badge.svg';
import Footer from '../components/Footer';

import cl from "../assets/images/country-leagues/champions-league.jpg"
import europa from "../assets/images/country-leagues/europa-league.jpg"
import copa from "../assets/images/country-leagues/copa-america.jpg"
import asiancup from "../assets/images/country-leagues/asian-cup.jpg"
import caf from "../assets/images/country-leagues/caf.jpg"
import OtherCollections from '../components/OtherCollections';

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
      imgurl: cl
    },
    {
      name: "Europe League",
      imgurl: europa
    },
    {
      name: "Copa America",
      imgurl: copa
    },
    {
      name: "Asia Cup",
      imgurl: asiancup
    },
    {
      name: "African Nations Cup",
      imgurl: caf
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
        <Leagues title={'COUNTRY LEAGUE'} type={'league'} data={leagues}/>
        <OtherCollections title={'OTHER COLLECTIONS'} />
        <Personal />
        <Footer />
      </div>
    </>

  )
}

export default LandingPage