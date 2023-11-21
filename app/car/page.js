'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import { FaCopy } from 'react-icons/fa'
import CarItem from '../components/card/Car'
import CarModal from '../components/modals/CarModal'
import CarList from '../components/listcard/CarList'
const Car = () => {
  return (
    <div>
        <Navbar />
        <div>
            <CarModal />
            {/* <CarItem /> */}
            <CarList />
        </div>
    </div>
  )
}

export default Car
