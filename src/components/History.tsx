import React from 'react'

import { useNavigate  } from "react-router-dom";

const History = () => {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className='history'>
      {/* <p>{"Home \> England - Premiere Leaue > Manchester United 21-22 Home Shirt"}</p> */}
      <p onClick={handleClick}>Home</p>
      <p>{">"}</p>
      <p onClick={handleClick}>England - Premiere League</p>
      <p>{">"}</p>
      <p className='current-page'>Manchester United 21-22 Home Shirt</p>
    </div>
  )
}

export default History