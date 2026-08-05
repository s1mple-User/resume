'use client'

import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import AOS from 'aos'
import 'aos/dist/aos.css';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import useStoreRef from "@/store/store"

export default function Skills() {
  const { t } = useTranslation()
  const principlesRef = useRef<HTMLParagraphElement>(null)
  const setTechnologyRefFunc = useStoreRef((state) => state.setTechnologyRef)

  useEffect(() => {
    setTechnologyRefFunc(principlesRef)
    AOS.init({
      duration: 800,
    })
  }, [setTechnologyRefFunc])

  return (
    <section 
      className="max-w-6xl mx-auto my-20 px-6" 
      data-aos="fade-up" 
      data-aos-anchor-placement="center-bottom"
    >
      <Tabs   data-aos="fade-up"  defaultValue="code" className="w-full">
        
        <TabsList className="grid w-full grid-cols-3 bg-zinc-800 p-1.5 h-auto gap-2 rounded-t-2xl border border-zinc-700/50">
          <TabsTrigger
            value="code"
            className="text-gray-300 py-4 text-lg md:text-xl font-bold rounded-xl
                       data-[state=active]:bg-black data-[state=active]:text-white 
                       data-[state=active]:shadow-lg transition-all duration-300"
          >
            <span ref={principlesRef}>{t("principles")}</span>
          </TabsTrigger>

          <TabsTrigger
            value="frontend"
            className="text-gray-300 py-4 text-lg md:text-xl font-bold rounded-xl
                       data-[state=active]:bg-black data-[state=active]:text-white 
                       data-[state=active]:shadow-lg transition-all duration-300"
          >
            Frontend
          </TabsTrigger>

          <TabsTrigger
            value="backend"
            className="text-gray-300 py-4 text-lg md:text-xl font-bold rounded-xl
                       data-[state=active]:bg-black data-[state=active]:text-white 
                       data-[state=active]:shadow-lg transition-all duration-300"
          >
            Backend
          </TabsTrigger>
        </TabsList>

        <div className="w-full min-h-[340px] text-white bg-black p-8 md:p-12 rounded-b-2xl border-x border-b border-zinc-800 shadow-2xl mt-0">
          
          <TabsContent value="code" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">

                <ul className="space-y-3 text-lg md:text-xl text-zinc-200 font-medium">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>MVC / MVVM</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>KISS / DRY / YAGNI</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>SOLID Principles</li>
                </ul>
              </div>

              <div className="space-y-3">
                
                <ul className="space-y-3 text-lg md:text-xl text-zinc-200 font-medium">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-sky-500"></span>TDD</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-sky-500"></span>REST API</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-sky-500"></span>OOP</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-sky-500"></span>Unit & Integration Testing</li>
                </ul>
              </div>

              <div className="space-y-3">
      
                <ul className="space-y-3 text-lg md:text-xl text-zinc-200 font-medium">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-sky-500"></span>Модульная архитектура</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-sky-500"></span>Atomic Design</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="frontend" className="mt-0">
            <div className="flex flex-wrap gap-32 text-base md:text-lg">
                    <div className="space-y-3">
              {[
                "HTML5", "CSS3", "JavaScript", "TypeScript", 
                "React", "Next.js", 
              ].map((skill) => (
  
             <ul  key={skill} className="space-y-3 text-lg md:text-xl text-zinc-200 font-medium">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-sky-500"></span>   {skill}</li>
                </ul>

              ))}
            </div>

                  <div className="space-y-3">
              {[
                "Redux Toolkit", "Zustand", 
                "Tailwind CSS", "Bootstrap", "Vite", "i18next", 
                "Figma "
              ].map((skill) => (
  
             <ul key={skill}  className="space-y-3 text-lg md:text-xl text-zinc-200 font-medium">
                  <li  className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-sky-500"></span>   {skill}</li>
                </ul>

              ))}
            </div>
                 </div>
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <div className="flex flex-wrap">

                  <div className="space-y-3">
              {[
                "Node.js", "Express.js", "MongoDB", "Mongoose"
              ].map((skill) => (
                <ul key={skill}  className="space-y-3 text-lg md:text-xl text-zinc-200 font-medium">
                  <li   className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-sky-500"></span>   {skill}</li>
                </ul>
              ))}
            </div>
            </div>
          </TabsContent>

        </div>
      </Tabs>
    </section>
  )
}