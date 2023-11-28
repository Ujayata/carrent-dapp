'use client'
import React from "react";
import merce from "../../../public/images/mercedes.png";
import Navbar from "@/app/components/Navbar";
import CarDetails from "@/app/components/carDetails";
import RentCarModal from "@/app/components/modals/RentCarModal";
import RentsDetails from "@/app/components/RentsDetails";
import RentHistory from "@/app/components/card/RentHistory";
import HireTrnsactions from "@/app/components/listcard/HireTrnsactions";

const CarBook = ({ params }) => {

  console.log(params)
  return (
    <div>
      <Navbar />
      <div className="pt-4 container mx-auto px-8 ">
        <div>
          <div>
            <h1 className=" font-bold text-2xl text-center">Rent Car</h1>
          </div>
          {/* <CarDetails /> */}
          <RentsDetails params={params.id} />
          <div>
            {/* <RentHistory id={params.id} /> */}
          </div>
      <div>
        <HireTrnsactions />
      </div>
        </div>
      </div>
    </div>
  );
};

export default CarBook;
