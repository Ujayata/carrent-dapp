import React from "react";
import merce from "../../../public/images/mercedes.png";
import Navbar from "@/app/components/Navbar";
import CarDetails from "@/app/components/carDetails";
import RentCarModal from "@/app/components/modals/RentCarModal";
import RentsDetails from "@/app/components/RentsDetails";

const CarBook = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-4 container mx-auto px-8 ">
        <div>
          <div>
            <h1 className=" font-bold text-2xl text-center">Rent Car</h1>
            <RentCarModal />
          </div>
          <CarDetails />
          <RentsDetails />
        </div>
      </div>
    </div>
  );
};

export default CarBook;
