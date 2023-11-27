'use client'
import React, { useCallback, useState, useEffect} from 'react'
import { truncateAddress } from '@/app/utils/truuncateAddress'
import { identiconTemplate } from '../../utils/identiconTemplate'
import { useAccount } from "wagmi"
import { useContractCall } from '@/hooks/useContractRead'
import { ethers } from "ethers";
import { getStatus } from "@/app/helper/getRentStatus"


const RentHistory = ({ id }) => {

    const { address } = useAccount();

    const { data: getRent, isLoading, error } = useContractCall("getRent", [id], true)
    // console.log(getRent)
    
    const [rentDetails, setRentDetails] = useState(null)
    const getHiredDetails = useCallback(() => {
        if(!getRent) return null;
        setRentDetails({
            carID: Number(getRent[0]),
            bookingAccount: getRent[1],
            username: getRent[2],
            destination: getRent[3],
            amount: Number(getRent[4]),
            paid: Boolean(getRent[5])
        })
    }, [getRent])


    
        
        useEffect(() => {
        getHiredDetails()
    }, [getHiredDetails])



    if(!rentDetails) return null;

    const consvertHireAmount = ethers.formatEther(
        rentDetails?.amount.toString()
      )
   
  return (
    <div className=''>
        
        <div className=' w-[402px] h-[270px] bg-[#D9D9D9] rounded-lg flex flex-col justify-center  max-sm:w-[350px]'>
            <div className=' flex justify-between px-4 items-center mt-[20px]'>
            {/* <Image src={ladyjpng} width={24} height={24} className=' rounded-full w-[60px] h-[60px]' /> */}
            {identiconTemplate(address, 12)}
            <button className=' rounded-lg w-[100px] h-[44px] border-black border'>Payment</button>
            </div>
            <span className=' mb-[12px] mt-[22px] ml-[25px] text-lg font-semibold'>
                <p>{truncateAddress(address)}</p>
            </span>
            <div className=' flex ml-[28px] gap-4'>
                <p>Name </p>
                <span className=' flex flex-row gap-2 mr-5 justify-center items-start'>
                    <p>NIG</p>
                </span>
            </div>
            <div className=' ml-[28px] text-base font-medium  mt-2'>
                <p>Destination </p>
                <p>Trip Fee</p>
            </div>
        </div>
    </div>
  )
}

export default RentHistory
