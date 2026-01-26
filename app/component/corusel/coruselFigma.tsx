"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imgArrFigma, responsive } from "./data";
import Image from "next/image";
import { useTranslation } from "react-i18next";



export default function MyCarouselFigma() {
    const {t} =useTranslation()
  
  return (
    <div className="w-[1400px] p-4 ml-[160px]" data-aos="fade-up-left" >
      <h1 className="text-white text-4xl mb-8">{t("layouts_figma")}</h1>

      <Carousel
        responsive={responsive}
        infinite={true}         
        autoPlay={true}         
        autoPlaySpeed={1000}   
        arrows={true}          
      >
   {imgArrFigma.map((i, index) => (
  <a 
    key={index} 
    href={i.link} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Image 
      alt="Image" 
      src={i.img} 
   className="h-[300px] w-full object-cover overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    />
  </a>
))}
      </Carousel>
    </div>
  );
}
