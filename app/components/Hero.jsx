import React from 'react'
import ImageSlider from './ImageSlider'

const Hero = () => {
  return (
    <div className=' flex flex-col mt-14 justify-center text-center'>
        <h3 className=' text-3xl mb-3 font-bold text-[#EFAE07] max-sm:font-medium'>Welcome to Car Tour</h3>
        <p className=' text-xl font-medium text-[#2e37ba]'>Book your Avoidable Car for your travels and Tour</p>
        <ImageSlider />
    </div>
  )
}

export default Hero