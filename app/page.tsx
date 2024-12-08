import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Airmax from './components/Airmax/Airmax'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Airmax/>
      <Footer/>
    </div>
  )
}

export default page

