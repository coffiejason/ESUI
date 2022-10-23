import React from 'react'

import left from '../assets/icons/svg/left-black.svg';
import user from '../assets/icons/svg/user.svg';
import cart from '../assets/icons/svg/shopping-cart.svg';
import search from '../assets/icons/svg/search.svg';

const Nav = () => {
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
      <div className='navbar-mobile'>
        <div className='menu'>

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