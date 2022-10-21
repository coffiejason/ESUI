import React from 'react'
import Form from './Form'
import ItemViewer from './ItemViewer'

const PlaceOrder = () => {
  return (
    <div className='place-order'>
        <ItemViewer />
        <Form />
    </div>
  )
}

export default PlaceOrder