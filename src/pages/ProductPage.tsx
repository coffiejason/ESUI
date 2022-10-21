import React from 'react'
import { Header, Nav, History, PlaceOrder, ItemViewer } from '../components'
import Form from '../components/Form'

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
    </div>
    </>
  )
}

export default ProductPage