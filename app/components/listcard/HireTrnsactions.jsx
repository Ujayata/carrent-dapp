import React, { useState } from "react";
import { useContractCall } from "@/hooks/useContractRead";
import RentHistory from "../card/RentHistory";

const HireTrnsactions = () => {
  const { data } = useContractCall("getRentLength", [], true);

  const hireTxLenght = data ? Number(data.toString()) : 0;
  console.log(hireTxLenght);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const clearMessage = () => {
    setError("");
    setSuccess("");
    setLoading("");
  };

  const getHireTxLength = () => {
    if (!hireTxLenght) return null;
    const carHireTx = [];
    for (let i = 0; i < hireTxLenght; i++) {
      carHireTx.push(<RentHistory key={i} id={i} />);
    }
    return carHireTx;
  };

  return (
    <div className="">
      <div className=" mx-auto max-w-4xl py-2 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-3">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {getHireTxLength()}
        </div>
      </div>
    </div>
  );
};

export default HireTrnsactions;
