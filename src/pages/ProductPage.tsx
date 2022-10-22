import React from 'react'
import { Header, Nav, History, PlaceOrder, ItemViewer } from '../components'
import Footer from '../components/Footer'
import Form from '../components/Form'

import reward from '../assets/icons/svg/rewards-badge.svg';

const ProductPage = () => {
  return (
    <>
    <Header />
    <Nav />
    <div className='product-page'>
      <History />
      <div className='place-order'>
        <ItemViewer />
        <Form />
      </div>
      <img className='reward' src={reward} />
    </div>
    <Footer />
    </>
  )
}

export default ProductPage