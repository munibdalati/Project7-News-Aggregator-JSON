import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Sports from './Sports'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Detailes from './Detailes'


const Layout = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/sports' Component={Sports}/>
        <Route path='/detailes' Component={Detailes}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Layout
