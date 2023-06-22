import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Sports from './Sports'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import SignIn from './SignIn'
import SignUp from './SignUp'


const Layout = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/sports' Component={Sports}/>
        <Route path='/details' Component={Details}/>
        <Route path='/signin' Component={SignIn}/>
        <Route path='/signup' Component={SignUp}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Layout
