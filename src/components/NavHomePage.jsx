import React, { useEffect, useState } from 'react'
import './NavHomePage.css'

function Nav() {
  const [homeBtn, setHomeBtn] = useState('active')
  const [viewBtn, setViewBtn] = useState(null)
  const [contactBtn, setContactBtn] = useState(null)

  const toggleHome = () => {
    setHomeBtn('active')
    setViewBtn(null)
    setContactBtn(null)
  }
  const toggleView = () => {
    setHomeBtn(null)
    setViewBtn('active')
    setContactBtn(null)
  }
  const toggleContact = () => {
    setHomeBtn(null)
    setViewBtn(null)
    setContactBtn('active')
  }

  useEffect(() => {
    const shelf = document.querySelector('.container-shelf')
    window.addEventListener('scroll', () => {
    const pos = shelf.getBoundingClientRect()
      pos.top >= 450 ? toggleHome() : pos.bottom <= 400 ? toggleContact() : toggleView()
    })
  }, [])
  
  return (
    <>
      <div className='passage'>
        <p>Order <span className='highlight'>Now</span>,  We're ready to <span className='highlight'>Serve</span>.</p>
      </div>
      <div className="bar-btn-homepage">
        <a id={ homeBtn } onClick={ toggleHome } href="#">Home</a>
        <a id={ viewBtn } onClick={ toggleView } href="#container-shelf">Views</a>
        <a id={ contactBtn } onClick={ toggleContact } href="#footer-container">Contact Us</a>
      </div>
    </>
  )
}

export default Nav