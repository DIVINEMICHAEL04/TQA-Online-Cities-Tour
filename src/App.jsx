import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import CTA from './components/CTA/CTA.jsx'
import About from './components/About/About.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Cities from './components/Cities/Cities.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <CTA />
      <About />
      <Testimonial />
      <Cities />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
