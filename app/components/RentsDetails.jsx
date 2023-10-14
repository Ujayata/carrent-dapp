import React from 'react'
import Navbar from './Navbar'
import { FaCopy } from 'react-icons/fa'

const RentDetails = () => {
  return (
    <div className='pt-4 container mx-auto px-8'>
        <div className=" w-96 bg-[#EFAE07] text-base font-semibold rounded-xl">
      {/* <img src={hospital.imagehos} alt="" className="" /> */}
      <div className=" flex flex-col items-center justify-center pt-3">
        <div className=" flex flex-row gap-8 text-center">
          <span>
            <p className=" rounded-md border-1 border cursor-pointer bg-white">
              Booking Account
            </p>
            <p className="pt-2">Car Name</p>
          </span>
          <span>
            <p className="rounded-md border-1 border cursor-pointer bg-white">
              Name
            </p>
            <p  className="pt-2">Car</p>
          </span>
        </div>
        <div className=" text-center mt-4 flex flex-row gap-9 pb-5">
          <div>
            <p className="rounded-md border-1 border cursor-pointer bg-white">
              Destination
            </p>
            <p  className="pt-2">Car model</p>
          </div>
          <div>
            <p className="rounded-md border-1 border cursor-pointer bg-white">
              Amount
            </p>
            <span  className=" cursor-pointer flex flex-row justify-center items-center pt-2">
            <FaCopy width={24} height={24} />
            <p>paid</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RentDetails;