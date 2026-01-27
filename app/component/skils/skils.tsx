'use client'

import { AppWindowIcon, CodeIcon } from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import useStoreRef from "@/store/store";

export default function Skils() {
    const {t} =useTranslation()
    const principlesRef = useRef(null)
    const setTechnologyRefFunc  = useStoreRef(state => state.setTechnologyRef)
    useEffect(() => {
      setTechnologyRefFunc(principlesRef)
    AOS.init({
      duration: 800,   
    });
  }, [principlesRef]);

  return (
    <div className="flex w-[400px] mt-64 p-4 ml-[160px]" data-aos="fade-up"   data-aos-anchor-placement="center-bottom">
      <Tabs defaultValue="code">
        <TabsList className="w-[1400px] border-r-0 relative top-2 ">
          <TabsTrigger
            value="code"
            className=" bg-[#455A64] w-[300px] text-black rounded-l-md rounded-r-none p-5
                       data-[state=active]:bg-[#000000] data-[state=active]:text-white"
          >
            <p ref={principlesRef}>{t("principles")}</p>
          </TabsTrigger>

          <TabsTrigger
            value="frontend"
            className=" w-[300px] bg-[#455A64] text-black rounded-none p-5
                       data-[state=active]:bg-[#000000] data-[state=active]:text-white"
          >
            Frontend
          </TabsTrigger>

          <TabsTrigger
            value="backend"
            className=" w-[300px] bg-[#455A64] text-black  rounded-r-md rounded-l-none  p-5
                       data-[state=active]:bg-[#000000] data-[state=active]:text-white"
          >
            Backend
          </TabsTrigger>
        </TabsList>

            <div className="w-full h-[200px] text-white bg-black">
        <TabsContent value="code">
          <div className="flex gap-20 ml-20 mt-5">
            <p >
            ● MVC <br /> 
            ● MVVM <br /> 
            ● KISS <br /> 
            ● DRY <br /> 
            ● YAGNI <br /> 
            ● SOLID
          </p>

            <p >
              ● TDD <br /> 
              ● REST API <br /> 
              ● OOP <br /> 
              ● Unit <br /> 
              ● Integration
            </p>

             <p>
               ● Модульная  архитектура <br />
               ● Atomic Design <br /> 
               ● Микрофронты  <br />
               ● Микросервисы <br />
              
             </p>
         </div>

        </TabsContent>

        <TabsContent value="frontend">
          
        <ul className="list-disc ml-10 mt-5 space-y-1">
    <li>HTML, CSS, JS, Bootstrap, Tailwind CSS</li>
    <li>JavaScript, TypeScript</li>
    <li>React/Vue, Next/Nuxt, Redux Toolkit, Vite Zustand,piana i18next </li>
    <li>Figma</li>
  </ul>

        </TabsContent>

        <TabsContent value="backend">
           <ul className="list-disc ml-5 space-y-1 mt-5">
    <li>Node.js, Express.js</li>
    <li>MongoDB, CI/CD, Docker</li>
  </ul>
        </TabsContent>
            </div>
      </Tabs>
    </div>
  )
}
