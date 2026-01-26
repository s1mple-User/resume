"use client";

import React, { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imgArr, responsive } from "./data";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import useStoreRef from "@/store/store";

export default function MyCarousel() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsGetStateRef=useStoreRef(state => state.setProjectsRef)
  const {t} =useTranslation()

    useEffect(() => {
      
      projectsGetStateRef(projectsRef);
    }, [projectsGetStateRef]);

  return (
    <div className="w-[1400px] p-4 ml-[160px] mt-52 mb-36" data-aos="fade-right" >
      <h1 ref={projectsRef} className="text-white text-4xl mb-8">{t("projects")}</h1>

      <Carousel
        responsive={responsive}
        infinite={true}         
        autoPlay={true}         
        autoPlaySpeed={1000}   
        arrows={true}          
      >
 {imgArr.map((i, index) => (
  <a 
    key={index} 
    href={i.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block overflow-hidden rounded-xl" 
  >
    <Image 
      alt="Project Thumbnail" 
      src={i.img} 
      className="h-[300px] w-full object-cover transition-transform duration-500 hover:scale-110" 
    />
  </a>
))}
      </Carousel>
    </div>
  );
}
