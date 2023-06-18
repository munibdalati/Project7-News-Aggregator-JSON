import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Sports from './Sports'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'


const Layout = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/sports' Component={Sports}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Layout
