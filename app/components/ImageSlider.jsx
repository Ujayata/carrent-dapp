"use client"
import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import imagss from "../../public/images/car1.jpg"
export default function ImageSlider() {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
      },
      {
         url: "https://images.unsplash.com/photo-1572013343866-dfdb9b416810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGF4aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
         url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
      },
      {
         url: "https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg",
      },
      {
         url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTof2fniv0mZzN8DByLmb6ILU4MvV_SGr_wptMeAut_dPaYMBkeHnHhD5egzU7MB0GSqE&usqp=CAU",
      },
   ];
   return (
      <div className=" flex justify-center items-center mt-5">
         <SimpleImageSlider
            width={900}
            height={450}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {2}
               style={{ backgroundSize: "contain",  }}
         />
         
      </div>
   );
}