import React, { useState, useCallback, useEffect} from 'react'
import Navbar from './Navbar'
import { FaCopy } from 'react-icons/fa'
import { useContractCall } from '@/hooks/useContractRead'
import { ethers } from 'ethers'
import { truncateAddress } from '../utils'
import Image from 'next/image'


const RentDetails = ({ params }) => {
  const { data: getCars } = useContractCall("getCars", [params.id], true);

  const [carDetails, setCarDetails] = useState(null);
  const getCarDetails = useCallback(() => {
    if (!getCars) return null;
    setCarDetails({
      owner: getCars[0],
      model: getCars[1],
      image: getCars[2],
      plateNumber: getCars[3],
      bookingPrice: Number(getCars[4]),
      rentCar: Number(getCars[5]),
    });
  }, [getCars]);

  useEffect(() => {
    getCarDetails();
  },[getCarDetails]);

  if(!carDetails) return null;

  const convertCarHirePrice = ethers.formatEther(
    carDetails?.bookingPrice.toString()
  )

  return (
    <div className='pt-4 container  px-8 flex lg:flex-row justify-center items-center  lg:gap-[16rem] md:gap-[5rem] sm:gap-[5rem] max-sm:gap-[3rem] md:flex-col max-sm:flex-col'>
      <div className=' lg:w-96 md:w-96 sm:w-72'>
      <Image src={carDetails.image} className=' w-[100%] h-[100%]' decoding='async' alt='CarImage' width={200} height={200} />
      </div>
        <div className=" lg:w-96 md:w-96 sm:w-72 bg-[#EFAE07] text-base font-semibold rounded-br-xl flex justify-center items-center p-3">
      <div className=" flex justify-center items-center flex-col">
        <div className=" flex flex-row gap-8 text-center justify-center items-center">
          <span>
            <p className=" rounded-md border-1 border cursor-pointer bg-white p-2">
              Booking Account
            </p>
            <p className="pt-2">{truncateAddress(carDetails.owner)}</p>
          </span>
          <span>
            <p className="rounded-md border-1 border cursor-pointer bg-white p-2">
              Name
            </p>
            <p  className="pt-2">{carDetails.model}</p>
          </span>
        </div>
        <div className=" text-center mt-4 flex flex-row gap-9">
          <div>
            <p className="rounded-md border-1 border cursor-pointer bg-white p-2">
              Plate Number
            </p>
            <p  className="pt-2">{carDetails.plateNumber}</p>
          </div>
          <div>
            <p className="rounded-md border-1 border cursor-pointer bg-white p-2">
              Hire Rate
            </p>
            <span  className=" cursor-pointer flex flex-row justify-center items-center pt-2">
            <p>${convertCarHirePrice}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RentDetails;