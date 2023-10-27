import React from 'react'
import './FooterHomePage.css'
import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import { BsLine } from "react-icons/bs";
// BsXLg

function Footer() {
  return (
    <>
      <div id='footer-container' className="footer-container">
        <div className="display">
          <p className='phone'><BsFillTelephoneFill className='icon' />999-999-9999</p>
          <p className='line'><BsLine className='icon' />test@123</p>
          <p className='email'><BsEnvelopeFill className='icon' />test#gmail.com</p>
        </div>
      </div>
    </>
  )
}

export default Footer