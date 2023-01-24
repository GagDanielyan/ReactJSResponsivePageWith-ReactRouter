import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PricingCards from '../components/PricingCards'
import Navbar from '../components/Navbar'

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='PRICING.' text='Choose your trip.' />
      <PricingCards />
      <Footer />
    </div>
  )
}

export default Pricing;
