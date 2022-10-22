import React from 'react'

const Feature = (props: any) => {
  return (
    <div className='feature'>
      <div className='top' />
      <div className='frontnside'>
        <div className='side' />
        <div className='icon-front'>
          <img src={props.icon} />
        </div>
      </div>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  )
}

export default Feature