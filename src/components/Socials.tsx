import React from 'react'

import facebook from '../assets/icons/svg/facebook-f.svg';
import instagram from '../assets/icons/svg/instagram.svg';
import twitter from '../assets/icons/svg/twitter.svg';

import facebook_dark from '../assets/icons/svg/facebook-f-black.svg';
import instagram_dark from '../assets/icons/svg/instagram-black.svg';
import twitter_dark from '../assets/icons/svg/twitter-black.svg';



const getTheme = (themevalue:string) =>{
    return themevalue === 'dark' ? 'icon-bg-dark' : 'icon-bg-white'
}

const getIcon = (themevalue:string) =>{
    return themevalue === 'white' ? [facebook_dark,twitter_dark,instagram_dark] : [facebook,twitter,instagram]
}

const handleFBclick = () =>{window.open("http://google.com/", "_blank")}
const handleIGclick = () =>{window.open("http://google.com/", "_blank")}
const handleTwitterclick = () =>{window.open("http://google.com/", "_blank")}

const Socials = (props:any) => {

  return (
    <div className='socials'>
        <div className={getTheme(props.theme)} onClick={handleFBclick}>
            <img src={getIcon(props.theme)[0]} />
        </div>
        <div className={getTheme(props.theme)} onClick={handleTwitterclick}>
            <img src={getIcon(props.theme)[1]} />
        </div>
        <div className={getTheme(props.theme)} onClick={handleIGclick}>
            <img src={getIcon(props.theme)[2]} />
        </div>

    </div>
  )
}

export default Socials