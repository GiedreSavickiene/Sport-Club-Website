import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Galery from './pages/galery/Galery'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Home/>
      <About/>
      <Contact/>
      <Galery/>
      <Plans/>
      <Trainers/>
      <NotFound/>
  </BrowserRouter>

    
  )
}

export default App
