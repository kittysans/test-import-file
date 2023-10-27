import React from 'react'
import './HeaderHomePage.css'
import headerBG from './imgs/headerBg.png'

function Header() {
  return (
    <>
      <div id='header-element' className='container-header'>
        <img src={ headerBG } />
        <div className='fliter'>
          <p className='welcome-text'>Welcome To L & K Shop</p>
          <p className='detail'>"Elevate your moments with the exquisite floral arrangements from our store."</p>
        </div>
      </div>
    </>
  )
}

export default Header