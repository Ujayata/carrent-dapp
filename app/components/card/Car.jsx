'use client'
import React, { useCallback, useState, useEffect } from "react";
import Navbar from "../Navbar";
import { FaCopy, FaStar } from "react-icons/fa";
import { useAccount } from "wagmi";
import { useContractCall } from "@/hooks/useContractRead";
import { useContractSend } from "@/hooks/useContractWrite";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import Link from "next/link";
import Image from "next/image";


const CarItem = ({ id, setError, setLoading, clear }) => {
  // to read from the contract of the details of item to be display
  const { data: getCars } = useContractCall("getCars", [id], true);
  const { writeAsync: approve} = useContractSend("carApprove", [id])
  const { address } = useAccount()

  // to get items in the getCars return data
  const [carData, setCarData] = useState(null);
  const getRegsteredCar = useCallback(() => {
    if (!getCars) return null;
    setCarData({
      owner: getCars[0],
      admin: getCars[1],
      model: getCars[2],
      image: getCars[3],
      plateNumber: getCars[4],
      bookingPrice: Number(getCars[5]),
      rentCar: Number(getCars[6]),
      carStatus: Number(getCars[7])
    });
  }, [getCars]);

  useEffect(() => {
    getRegsteredCar();
  },[getRegsteredCar]);

  if(!carData) return null;

  console.log(carData?.bookingPrice)

  const convertCarHirePrice = ethers.utils.formatEther(
    carData?.bookingPrice.toString()
  )


  const approveCar = async () => {
    if (!approve) throw new Error("Failed to approve car")
    try {
      await toast.promise(approve(), {
        pending: "Approving Car",
        success: "Successfully approved",
        error: "Unexpected Error"
      })
    } catch (error) {
    }
  }
  // top-14 left-28
  return (
    <>
    <div className="pt-4 container flex justify-center items-center flex-col">
          <span className="  ">
          {carData.carStatus == 0 ? (<button className="text-[#2e37ba] p-2 bg-slate-200 rounded-t-lg text-lg " onClick={approveCar}>Approve</button>) :(
            <button className="text-[#2e37ba] p-2 bg-slate-200 rounded-t-lg text-lg " >Approved</button>
            )
      }
          </span>
      <div className=" w-[23rem] bg-[#EFAE07] text-base font-semibold rounded-xl">
        <div>
        <Image src={carData.image} className=' w-[100%] h-[100%]' decoding='async' alt='CarImage' width={200} height={200} />
        
        </div>
        <div className=" flex flex-col items-center justify-center pt-3">
          <div className=" flex flex-row gap-8 text-center">
            <span>
              <p className=" px-1 rounded-md border-1 border cursor-pointer bg-white">
               Car Name
              </p>
              <p className="pt-2 text-xl">{carData.model}</p>
            </span>
            <span>
              <p className="rounded-md px-1 border-1 border cursor-pointer bg-white">
              Plate Number
              </p>
              <p className="pt-2">{carData.plateNumber}</p>
            </span>
          </div>
          <div className=" text-center mt-4 flex flex-row gap-9 ">
            <div>
              <p className="rounded-md border-1 border cursor-pointer bg-white px-1">
              Booking Price
              </p>
              <p className="pt-2">Hire @ $ {convertCarHirePrice}</p>
            </div>
            <div>
              <p className="rounded-md border-1 border cursor-pointer bg-white px-2 pt-[-3px]">
                Hire Rate
              </p>
              <span className=" cursor-pointer flex flex-row justify-center items-center pt-2">
                <p>{carData.rentCar}</p>
                <FaStar width={24} height={24} />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* {carData.carStatus == 0 ? <p className=" text-[#2e37ba] p-2 bg-slate-200 rounded-b-lg text-lg">Can't Hire</p> : <Link href={`/car/${id}`} className=" text-[#2e37ba] p-2 bg-slate-200 rounded-b-lg text-lg">Hire Me</Link> } */}
      <Link href={`/car/${id}`} className=" text-[#2e37ba] p-2 bg-slate-200 rounded-b-lg text-lg">Hire Me</Link>
    </div>
    </>
  );
};

export default CarItem;
