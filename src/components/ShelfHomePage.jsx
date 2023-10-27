//set up
import React, { useState, useEffect } from 'react'
import PackageProduct from './PackageProduct'

import {allDataProduct} from './allDataProduct'
import {GoChevronRight} from "react-icons/go"

import './ShelfHomePage.css'

function Shelf() {
  const [body, setBody] = useState()
  useEffect(() => {
    setBody(document.querySelector('body'))
  })
  
  const open = () => {
    body.style.overflow = 'hidden'
  }

  const close = () => {
    body.style.overflow = 'auto'
  }

  return (
    <>
      <div id='container-shelf' className="container-shelf">
        <h1 className='advise-bouquet'>ADVISE BOUQUETS</h1>
        <div className='shelf'>
          {allDataProduct.map((data, index) => {
            return (
              <PackageProduct value={data} open={open} close={close} key={index} />
            )
          })}
        </div>
        <div className="button-container">
          {/* <a className='view-more' href='#'>View More<GoChevronRight className='icon-right'/></a> */}
        </div>
      </div>
    </>
  )
}

export default Shelf