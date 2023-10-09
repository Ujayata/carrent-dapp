'use client'
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
// import NavBarLogo from '../assets/wasteisureLogo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="pt-4 container mx-auto px-8">
      <nav className=" flex justify-between ">
        <div className="hidden sm:flex cursor-pointer gap-3 mt-[30px]">
          <h3 className="text-[#2e37ba] text-4xl max-sm:text-2xl font-bold leading-none">
            Car Tour
          </h3>
        </div>
        <div className="hidden  sm:flex mt-[20px] ">
          <ConnectButton  />
        </div>

        <div className="md:hidden  mt-3">
          <button className="text-dark" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed z-20 top-0 bg-[#282e82] 
         right-0 bottom-0 left-0 flex flex-col 
         items-center gap-6 justify-center">
          <button
            className="text-white absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <FaTimes className="text-2xl" />
          </button>


          <div className="flex">
          <ConnectWallet />
        </div>
        </div>
      )}
    </header>
  );
}
