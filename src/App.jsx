import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import AboutProduct from './components/AboutProduct'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </>
  )
}

export default App
