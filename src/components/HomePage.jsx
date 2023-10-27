import React, { useState } from 'react'

import Nav from './NavHomePage'
import Header from './HeaderHomePage'
import Shelf from './ShelfHomePage'
import Footer from './FooterHomePage'

import './HomePage.css'

function HomePage() {
  return (
    <>
        <Nav />
        <div className="content">
            <Header />
            <Shelf />
        </div>
        <Footer />
    </>
  )
}

export default HomePage