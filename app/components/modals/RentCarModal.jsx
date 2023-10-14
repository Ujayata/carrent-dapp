'use client'
import { IoCloseCircle } from 'react-icons/io5'
import React, { useState } from 'react'

const RentCarModal = ({ id }) => {
    const [toggle, setToggle] = useState(false)
    const [Name, setName] = useState("")
    const [destination, setDestination] = useState("")
    const [amount, setAmount] = useState("")


  return (
    <div className="flex mb-10">
      <button
        id="modalBioDate"
        type="button"
        data-bs-toggle="modalBioData"
        data-bs-target="#modalCenter"
        className=" text-white font-bold text-lg border-2 rounded-xl py-1 bg-[#06102b] px-3 flex items-center mr-10 flex-col text-center drop-shadow-xl"
        onClick={() => setToggle(true)}
      >
        Hire Car
      </button>
      {toggle && (
        // w-[600px] rounded-2xl bg-slate-100 p-5
        <div
          id="modalBioData"
          className="flex justify-center fixed left-0 top-0 items-center w-full h-full mt-6"
        >
          <div className="w-[600px] rounded-2xl bg-slate-100 p-5">
            <form >
              <div className="mb-8">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="border-4 w-full  border-[#EFAE07] px-4 py-2 rounded-xl"
                  name="name"
                  id="Name"
                  placeholder="Please Enter Your Name"
                />
              </div>
              <div className="mb-8">
                <input
                  type="text"
                  onChange={(e) => setDestination(e.target.value)}
                  className="border-4 w-full  border-[#EFAE07] px-4 py-2 rounded-xl"
                  name="Destination"
                  id="destination"
                  placeholder="Please Enter you destination"
                />
              </div>

              <div className="mb-8">
                <input
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  className=" border-4 w-full border-[#EFAE07] px-4 py-2 rounded-xl"
                  name="rideAmount"
                  id="rideAmount"
                  placeholder="Enter Ride fee"
                />
              </div>
              <div className=" flex justify-between">
                <button
                  type="submit"
                  className=" border-4 text-white border-[#EFAE07] bg-[#06102b] px-4 py-2 rounded-full"
                  // disabled={!!loading || !isFormFilled || !recordCar}
                >
                  {/* {loading ? loading : "Ordering car"} */} Hiring Car
                </button>
                <button type="button" onClick={() => setToggle(false)}>
                  <IoCloseCircle size={30} color="#2e37ba" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default RentCarModal
