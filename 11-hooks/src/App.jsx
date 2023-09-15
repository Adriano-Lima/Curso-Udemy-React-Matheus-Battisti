import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import { HookUseContext } from './components/HookUseContext'


function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <HookUseContext>
        <BrowserRouter>
          <ul>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'>Sobre</Link> </li>
          </ul>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </>
  )
}

export default App
