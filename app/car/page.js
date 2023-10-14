import React from 'react'
import Navbar from '../components/Navbar'
import { FaCopy } from 'react-icons/fa'
import CarItem from '../components/card/Car'
import CarModal from '../components/modals/CarModal'
const Car = () => {
  return (
    <div>
        <Navbar />
        <div>
            <CarModal />
            <CarItem />
        </div>
    </div>
  )
}

export default Car
