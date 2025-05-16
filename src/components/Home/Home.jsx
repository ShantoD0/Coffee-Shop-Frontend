import React from 'react'
import Hero from './Hero'
import Title from './Title'
import PopularProduct from './PopularProduct'
import Gallery from './Gallery'

function Home() {
  return (
    <div>
        <Hero/>
        <Title/>
        <PopularProduct/>
        <Gallery/>
    </div>
  )
}

export default Home