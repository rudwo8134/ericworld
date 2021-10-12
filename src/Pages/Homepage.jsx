import React from 'react'
import About from '../Components/about/About'
import Hero from '../Components/Hero/Hero'
import Intro from '../Components/Intro/Intro'
import Projectheader from '../Components/Projectheader/Projectheader'
import Service from '../Components/Service/Service'

const Homepage = () => {
  return (
    <>
    <Hero/>
    <Intro/>
    <About/>
    <Service/>
    <Projectheader/>
    </>
  )
}

export default Homepage
