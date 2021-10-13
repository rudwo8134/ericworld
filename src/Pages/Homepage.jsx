import React from 'react'
import About from '../Components/about/About'
import Contact from '../Components/Contact/Contact'
import Hero from '../Components/Hero/Hero'
import Intro from '../Components/Intro/Intro'
import Projectheader from '../Components/Projectheader/Projectheader'
import Projects from '../Components/Projects/Projects'
import Service from '../Components/Service/Service'
import Testmonial from '../Components/Testmonial/Testmonial'

const Homepage = () => {
  return (
    <>
    <Hero/>
    <Intro/>
    <About />
    <Service/>
    <Projectheader/>
    <Projects/>
    <Testmonial/>
    <Contact/>
    </>
  )
}

export default Homepage
