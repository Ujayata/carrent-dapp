"use client";
import React, { useState } from "react";
import lambo from "../../public/images/lambo.png";

const Hero = () => {
  const [toggle, setToggle] = useState(false);

  const headerStyle = {
    backgroundImage: `url(${lambo.src})`,
    /* Additional styles can be added here */

    // Set background size to cover the container by default
    backgroundSize: "cover",

    // Center the background image by default
    backgroundPosition: "center",

    // Media query for mobile devices
    "@media (maxWidth: 768px)": {
      backgroundSize: "auto", // Adjust background size for smaller screens
      backgroundPosition: "center", // You can adjust this as needed
    },
  };
  return (
    <div style={headerStyle} className="h-[600px] max-sm:h-[200px]  pt-4 container mx-auto px-8  max-sm:w-[414px] ">
      <div className=" flex flex-col items-end mt-[420px] max-sm:mt-[90px] max-sm:relative max-sm:left-[85px] ">
        <div>
        <p className=" capitalize text-black text-xl max-sm:text-xs font-medium">safer ,faster and <br /> comfortable</p>
        <p className=" mt-[15px] text-black text-base font-normal max-sm:text-xs max-sm:mt-[3px]">Get in touch with <br /> our luxury cars</p>
        <button className=" bg-[#21408E] rounded-3xl py-[4px] text-white px-[15px] max-sm:py-[2px] max-sm:px-[5px]  mt-[15px] max-sm:mt-[3px] max-sm:rounded-md max-sm:text-[10px]">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
