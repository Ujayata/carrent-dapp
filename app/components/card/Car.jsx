'use client'
import React, { useCallback, useState, useEffect } from "react";
import Navbar from "../Navbar";
import { FaCopy, FaStar } from "react-icons/fa";
import { useAccount } from "wagmi";
import { useContractCall } from "@/hooks/useContractRead";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import Link from "next/link";
import Image from "next/image";

const CarItem = ({ id, setError, setLoading, clear }) => {
  // to read from the contract of the details of item to be display
  const { data: getCars } = useContractCall("getCars", [id], true);


  // to get items in the getCars return data
  const [carData, setCarData] = useState(null);
  const getRegsteredCar = useCallback(() => {
    if (!getCars) return null;
    setCarData({
      owner: getCars[0],
      model: getCars[1],
      image: getCars[2],
      plateNumber: getCars[3],
      bookingPrice: Number(getCars[4]),
      rentCar: Number(getCars[5]),
    });
  }, [getCars]);

  useEffect(() => {
    getRegsteredCar();
  },[getRegsteredCar]);

  if(!carData) return null;

  const convertCarHirePrice = ethers.formatEther(
    carData?.bookingPrice.toString()
  )
  console.log(carData.image)
  return (
    <div className="pt-4 container flex justify-center items-center flex-col">
      <div className=" w-[23rem] bg-[#EFAE07] text-base font-semibold rounded-xl">
        <div>
        <Image src={carData.image} className=' w-[100%] h-[100%]' decoding='async' alt='CarImage' width={200} height={200} />
        {/* <Image src={`https://bafybeidpovsjaqre7dc7jpgaz2xldr7vqmguyzqx75mnebymrhsgi4eaeq.ipfs.w3s.link/?filename=car.jpg`} width={368} height={200} alt="carImg" className="" /> */}
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
      <Link href={`/car/${id}`} className=" text-[#2e37ba] p-2 bg-slate-200 rounded-b-lg text-lg m-3">Hire Me</Link>
    </div>
  );
};

export default CarItem;
