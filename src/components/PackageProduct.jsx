import React, { useState } from 'react'
import AboutProduct from './AboutProduct'

import { BsFillHeartFill, BsHeart } from "react-icons/bs";

import './PackageProduct.css'

const PackageProduct = ({value, open, close}) => {
    const name = value.name
    const price = value.price
    const path = value.path
    const explain = value.explain
    const [favorite, setFavorite] = useState(false)

    const [openPopup, setOpenPopup] = useState(false)

    const hidden = () => {
        setOpenPopup(false)
        close()
    }

    const toggleFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <>
            <div className='package-product'>
                <div className="product" onClick={() => {
                    setOpenPopup(!openPopup)
                    open()}}>
                    <img className='poster' src={path}/>
                    <div className='text-box'>
                        <p>{name}</p>
                        <p>${price}</p>
                    </div>
                </div>
                <div className= {favorite ? 'heart-icon full-heart' : 'heart-icon'} onClick={() => {setFavorite(!favorite)}}>
                    {favorite ? <BsFillHeartFill /> : <BsHeart/>}
                </div>
            </div>

            {openPopup ? <AboutProduct value={{name: name, price, price, path: path, explain: explain, fav: favorite}} hidden={hidden} toggle={toggleFavorite}/> : null}
        </>
    )
}

export default PackageProduct