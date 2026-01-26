'use client'
import Image from 'next/image'
import * as Linux from "../../../public/flat-color-icons_linux.png"
import { Animate } from "react-simple-animate";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import useStoreRef from '@/store/store';
import { Button } from '@/components/ui/button';

const About = () => {
    const experienceRef = useRef<HTMLDivElement>(null);
    const setExperienceRef = useStoreRef((state) => state.setExperienceRef);
    const title = "Full-stack-junior-JS" 
    const {t} = useTranslation()
    
  useEffect(() => {
    setExperienceRef(experienceRef);
  }, [setExperienceRef]);

  return (
    <Animate
      play
          duration={1.2}
          start={{ opacity: 0, transform: "translateY(-90px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
    
    >
    <div className='flex w-[1400px] items-center gap-2 mt-36 p-4 rounded-2xl  ml-52 mb-52 bg-[#455A64]' data-aos="fade-up">
    <div className="flex items-center ml-52 ">
       <div>
            <h1 ref={experienceRef} className='text-[#FCA326] text-5xl flex flex-wrap'>
          {title.split("").map((char, index) => (
            <Animate
              key={index}
              play
              duration={0.3}
              delay={index * 0.1} 
              start={{ opacity: 0, transform: "translateY(-20px)" }}
              end={{ opacity: 1, transform: "translateY(0px)" }}
            >
              <span>{char}</span>
            </Animate>
          ))}
        </h1>

        <p className='text-amber-50 w-[500px] mt-3'>
          {t("about")}
        </p>

        <div className="flex items-center gap-2 mt-4">
          
          <a href="https://icorp.uz/">
        <Button variant={"outline"} className='border-white text-white pt-5 pb-5 w-40 hover:bg-white hover:text-black '>
         {t("about_company")}
        </Button>
          </a>

          <a href="/files/Resume.pdf" download>
        <Button variant={"outline"} className='border-white text-white pt-5 pb-5 w-40 hover:bg-white hover:text-black '>
         {t("resume_download")}
        </Button>
        </a>
        </div>
      </div>

      <div>
        <Image src={Linux} alt="Linux" width={500} height={500} />
      </div>
    </div>
     
    </div>
    </Animate>
  )
}

export default About
