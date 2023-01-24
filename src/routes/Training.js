import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingCards from '../components/TrainingCards'

function Training() {
  return (
    <div>
      <Navbar />
      <HeroImage heading='TRAINIG.' text='Pre-Flight & In-Flight Training.' />
      <TrainingCards />
      <Footer />
    </div>
  )
}

export default Training
