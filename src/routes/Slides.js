import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import SlideShow from '../components/SlideShow'

const Slides = ({ slides }) => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='SLIDESHOW.' text="Look at the images that we've chosen for you." />
      <SlideShow slides={slides} />
      <Footer />
    </div>
  )
}

export default Slides
