import React, { useState } from 'react'

// import {allDataProduct} from './allDataProduct'
import {BsFillHeartFill, BsHeart} from "react-icons/bs";
import {BsXLg} from "react-icons/bs";

import './AboutProduct.css'

function AboutProduct({value, hidden, toggle}) {
  const [favroite, setFavroite] = useState(value.fav)

  const Togglehidden = () => {
    hidden()
  }

  const toggelHeartIcon = () => {
    toggle()
    setFavroite(!favroite)
  }
  return (
    <>
      <div className='pop-up-screen'>
        
      <div className="pop-up">
               <img className='img-pop-up' src={value.path}/>
               <div className="about-pop-up">
                   <h1>{value.name}</h1>
                   <div className="price-box">
                       <p>Price</p>
                       <p>{value.price}</p>
                   </div>
                   <div className="describe-box">
                       <p>About</p>
                       <p>{value.explain}</p>
                   </div>
                   <div className='x-icon-pop' onClick={Togglehidden}>
                    <BsXLg className='x-icon'/>
                   </div>
                   <div className='display-heart-icon' onClick={toggelHeartIcon}>
                    {favroite ? 
                    <BsFillHeartFill className='heart-icon-pop heart-active' onClick={toggelHeartIcon}/> :
                    <BsHeart className='heart-icon-pop' onClick={toggelHeartIcon}/>}
                   </div>
                   {/* <BsFillHeartFill className={favroite ? 'heart-icon-popup heart-active' : 'heart-icon-popup'} onClick={toggelHeartIcon}/> */}
               </div>
               </div>
      </div>

      {/* <div className= {favorite ? 'heart-icon full-heart' : 'heart-icon'} onClick={() => {setFavorite(!favorite)}}>
                    {favorite ? <BsFillHeartFill /> : <BsHeart/>}
                </div> */}
    </>
  )
}

export default AboutProduct