import React, { useState } from 'react'

import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

import left from '../assets/icons/svg/left-black.svg';
import user from '../assets/icons/svg/user.svg';
import cart from '../assets/icons/svg/shopping-cart.svg';
import search from '../assets/icons/svg/search.svg';
import search_dark from '../assets/icons/svg/search-dark.svg';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#tshirts'>T shirts</a></p>
    <p><a href='#nba'>NBA</a></p>
    <p><a href='#review'>Reviews</a></p>
  </>
)

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='upper-navbar'>
          <div className='cat-select'>
            <p>All Categories</p>
            <div className='pointer'>
              <img src={left} />
            </div>
            <div className="cat-select-dropdown-content">
              <a href="/">Europe League</a>
              <a href="/">Champions League</a>
              <a href="/">Copa America</a>
              <a href="/">Asia Cup</a>
              <a href="/">African Nations Cup</a>
            </div>
          </div>

          <div className='search-bar-container'>
            <input type={'text'} placeholder='What are you looking for ?' />
            <div className='search-button'>
              <p>Search</p>
              <div className='search-button-icon-div'>
                <img src={search} alt={'search-icon'} />
              </div>
            </div>
          </div>
          <div className='cart'>
            <img src={cart} />
          </div>
          <div className='profile'>
            <img src={user} />
          </div>
        </div>
        <div className='lower-navbar'>
          <div className='submenu'>
            <div className='page-section'>
              <p>Home</p>
              <div className='page-underline'></div>
            </div>

            <div className='page-section-inactive'>
              <div className='drop-down'>
                <p>T-Shirts</p>
                <div className='pointer'>
                  <img src={left} />
                </div>
              </div>
              <div className='page-underline'></div>
            </div>

            <div className='page-section-inactive'>
              <div className='drop-down'>
                <p>NBA</p>
                <div className='pointer'>
                  <img src={left} />
                </div>
              </div>
              <div className='page-underline'></div>
            </div>

            <div className='page-section-inactive'>

              <div className='drop-down'>
                <p>Tracksuits</p>
                <div className='pointer'>
                  <img src={left} />
                </div>
              </div>
              <div className='page-underline'></div>
            </div>

            <div className='page-section-inactive'>
              <p>Products Delivery · 1 - 2 Days</p>
              <div className='page-underline'></div>
            </div>

            <div className='page-section-inactive'>
              <p>Contact</p>
              <div className='page-underline'></div>
            </div>

            <div className='page-section-inactive'>
              <p>Reviews</p>
              <div className='page-underline'></div>
            </div>
          </div>
        </div>

      </div>
      <div className='navbar-mobile scale-up-center'>
        <div className='menu'>
          {toggleMenu ? <RiCloseLine color='#111112' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenuLine color='#111112' size={27} onClick={() => setToggleMenu(true)} />
          }

          {toggleMenu && (
            <div className='menu-container'>
              <Menu />
            </div>

          )}
          <img className='search-icon' src={search_dark} alt={'search-icon'} />
          <img className='cart-icon' src={cart} alt={'cart-icon'} />
          <img className='profile-icon' src={user} alt={'profile-icon'} />
          <img className='dropdown-icon' src={left} alt={'dropdown-icon'} />
        </div>
        <div>

        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Nav