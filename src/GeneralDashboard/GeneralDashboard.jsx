import React from 'react'
import { HeroSection, Navbar,Companies,CTA,Footer } from './components/index.js'
import InfluencerSlider from "./components/InfluencerSlider.jsx";

function LandingPage() {

  return (
    <div className="app">
        <Navbar/>
        <HeroSection/>
        <Companies/>
        <Achievement/>
        <InfluencerSlider/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default LandingPage
