import React, { useState } from "react";
import { useContractCall } from "@/hooks/useContractRead";
import RentHistory from "../card/RentHistory";

const HireTrnsactions = ({ carId }) => {
  const { data } = useContractCall("getRentLength", [], true);

  const hireTxLenght = data ? Number(data.toString()) : 0;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  /**
   * Clears error, success, and loading messages.
   */
  const clearMessage = () => {
    setError("");
    setSuccess("");
    setLoading("");
  };

  /**
   * Gettin an Array An array of RentHistory components.
   */
  const getHireTxLength = () => {
    if (!hireTxLenght) return null;
    const carHireTx = [];
    for (let i = 0; i < hireTxLenght; i++) {
      carHireTx.push(<RentHistory key={i} carId={carId} id={i} />);
    }
    return carHireTx;
  };

  return (
    <div className="">
      <div className=" mx-auto max-w-4xl py-2 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-3">
        <div className="flex gap-1 flex-wrap w-full">
          {getHireTxLength()}
        </div>
      </div>
    </div>
  );
};

export default HireTrnsactions;
