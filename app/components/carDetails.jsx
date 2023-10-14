import React from "react";
import mercedes from "../../public/images/mercedes.png";
import Image from "next/image";
const CarDetails = () => {
  return (
    <div className=" flex flex-row max-sm:flex-col">
      {/* image */}
      <Image src={mercedes} alt="car image" />
      <div className=" gap-4 flex flex-col">
        <span className="">
          <p className=" border-solid border-2 rounded-md py-2 px-5 text-white bg-[#2e37ba]">Owner</p>
        </span>
        <span>
          <p className="border-solid border-2 rounded-md py-2 px-5 bg-[#2e37ba] text-white">model</p>
        </span>
        <span>
          <p className="border-solid border-2 rounded-md py-2 px-5 bg-[#2e37ba] text-white">Plate Number</p>
        </span>
      </div>
    </div>
  );
};

export default CarDetails;
