'use client'
import React, { useCallback, useState, useEffect} from 'react'
import { truncateAddress } from '@/app/utils/truuncateAddress'
import { identiconTemplate } from '../../utils/identiconTemplate'
import { useAccount } from "wagmi"
import { useContractCall } from '@/hooks/useContractRead'
import { ethers } from "ethers";
import { getStatus } from "@/app/helper/getRentStatus"
import { useContractTrans } from '@/hooks/useContractTrans'
import { useContractSend } from '@/hooks/useContractWrite'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { toast } from "react-toastify"

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
            name: getRent[2],
            destination: getRent[3],
            amount: Number(getRent[4]),
            paid: Boolean(getRent[5])
        })
    }, [getRent])
    
    const { writeAsync: approve } = useContractTrans(
        rentDetails?.bookingAccount.toString()
    )

    const {writeAsync: hirePayment} = useContractSend('carRentPayment', [Number(id)]);

    
        
        useEffect(() => {
        getHiredDetails()
    }, [getHiredDetails])

    const handlePayment = async () => {
        if (!approve || !hirePayment) {
          throw ("Failed to make waste Payment")
        }
        //  approve wastepayment for the ERC20 cUSD token
        const approveTx = await approve();
        // await the transaction
        await approveTx
        setLoading("Approving...")
    
        // once we approve, we handle payment 
        const res = await hirePayment();
        // wait for the transaction to make by the user
        await res
      }
      
      const { openConnectModal } = useConnectModal();
    
      // send hirepayment when the transfer bottun is clicked
      const payment = async () => {
        // setLoading("Approving...");
        // clear();
    
        try {
          if(!address && openConnectModal) {
            openConnectModal();
            return
          }
          // messages to display during the process of the payments
          await toast.promise(handlePayment(), {
            pending: "Awaiting Payment",
            success: "Payment success, Thank You",
            error: "unexpected error"
          })
        } catch (e) {
          console.log({ e });
        //   setError(e?.reason || e?.message || "Something happen. Try again later")
        }
      };



    if(!rentDetails) return null;

    const consvertHireAmount = ethers.formatEther(
        rentDetails?.amount.toString()
      )
   
  return (
    <div className=' flex items-center justify-center mt-5'>
        
        <div className=' w-[402px] h-[270px] bg-[#2e37ba] text-white rounded-lg flex flex-col justify-center  max-sm:w-[350px]'>
            <div className=' flex justify-between px-4 items-center mt-[20px]'>
            {identiconTemplate(rentDetails.bookingAccount, 12)}
            <button className=' rounded-lg w-[100px] h-[44px] border-black border bg-white text-[#2e37ba] font-medium' onClick={payment}>Payment</button>
            </div>
            <span className=' mb-[12px] mt-[22px] ml-[25px] text-lg font-semibold'>
                <p>{truncateAddress(rentDetails.bookingAccount)}</p>
            </span>
            <div className=' flex ml-[28px] gap-4'>
                <p>Name: {rentDetails.name} </p>
                <span className=' flex flex-row gap-2 mr-5 justify-center items-start'>
                    <p>NIG</p>
                </span>
            </div>
            <div className=' ml-[28px] text-base font-medium  mt-2'>
                <p>Destination: {rentDetails.destination} </p>
                <p>Trip Fee: {consvertHireAmount}</p>
            </div>
        </div>
    </div>
  )
}

export default RentHistory
