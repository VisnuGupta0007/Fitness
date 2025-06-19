import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'

import About from './Comp/About'
import Class from './Comp/Class'
import Schedule from './Comp/Schedule'
import Contact from './Comp/Contact'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Nav */}
          <Route path="/Nav/About" element={<About />} />
          <Route path="/Nav/Classes" element={<Class />} />
          <Route path="/Nav/Schedule" element={<Schedule />} />
          <Route path="/Nav/Contact" element={<Contact />} />


        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App