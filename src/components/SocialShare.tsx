import React from 'react'
import personalization from '../assets/images/social-networks.jpg';

import facebook from '../assets/icons/svg/facebook-f.svg';
import instagram from '../assets/icons/svg/instagram.svg';
import twitter from '../assets/icons/svg/twitter.svg';

const SocialShare = () => {
  return (
    <div className='social-share'>
        <h2>Social Networks</h2>
        <p>
            Share your shirts with us with the #CamisetasFutbolSpainnn
        </p>
        {/* <div className='social-media'>
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
        </div> */}
    </div>
  )
}

export default SocialShare