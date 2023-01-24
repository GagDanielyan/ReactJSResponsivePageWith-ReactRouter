import React from 'react'
import './TrainingCardsStyle.css'

import { Link } from 'react-router-dom'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

function TrainingCards() {
  return (
    <div className='training'>
      <div className="left">
        <h1>Training</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, optio cumque non facere saepe consequatur. Tempora itaque modi veniam quam distinctio neque error similique placeat incidunt, fugit ipsum veritatis voluptate?</p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className='image-stack top'>
            <img src={Moon} className='img' alt="" />
          </div>
          <div className='image-stack bottom'>
            <img src={Pod} className='img' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingCards
