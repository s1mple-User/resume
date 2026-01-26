"use client"
import { Button } from "@/components/ui/button"
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import { useRouter } from "next/navigation";
import useStoreRef from "@/store/store";


const Header = () => {
   const experienceRef = useStoreRef((state) => state.experienceRef);
  const projectsRef = useStoreRef((state) => state.projectsRef);
  const technologyRef = useStoreRef((state) => state.technologyRef);
  const {t} =useTranslation()

  const router = useRouter();
  const changeLanguageI18 = (lng: string) => {
      i18n.changeLanguage(lng).then(() => {
      router.refresh(); 
    })};

  const handleClick = (ref:any) => {

    
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='w-full bg-black  pt-6 pb-6 flex items-center  justify-between  sticky top-0 z-50'>
      <div className="flex items-center gap-5 text-[#FCA326]  ml-6 transition-colors">
        <Button onClick={() => handleClick(experienceRef)} className="text-xl hover:text-amber-600">{t("experience")}</Button>
        <Button onClick={() => handleClick(technologyRef)} className="text-xl hover:text-amber-600">{t("technology")}</Button>
        <Button onClick={() => handleClick(projectsRef)} className="text-xl hover:text-amber-600">{t("projects_head")}</Button>
        <Button onClick={() => handleClick(technologyRef)} className="text-xl hover:text-amber-600">{t("principles")}</Button>
      </div>

       <div className="flex items-center gap-2 mr-10">
        <Select onValueChange={changeLanguageI18} >
       <SelectTrigger
         className="
           w-[80px]
           h-3
           border-2 border-gray-400 text-amber-50
           outline-none
         "
       >
         <SelectValue className="text-amber-50"  placeholder={i18n.language.toUpperCase()} />
       </SelectTrigger>
     
       <SelectContent className="border-2 text-white">
        
         <SelectItem value="en" onClick={() => changeLanguageI18('en')} >En</SelectItem>
         <SelectItem value="ru" onClick={() => changeLanguageI18('ru')} >Ru</SelectItem>
       </SelectContent>

      </Select>
        <Link href={"https://t.me/notToday12020"}>
         <Button className="border-gray-400 h-10 w-10" variant={"outline"}><FaTelegramPlane style={{ width: 24, height: 24 }} className="text-blue-400 "/></Button>
        </Link>
         <Link href={"https://github.com/"}>
        <Button className="border-gray-400 h-10 w-10" variant={"outline"}><FaGithub style={{ width: 24, height: 24 }} className="text-amber-50"/></Button>
        </Link>
       </div> 
    </div>
  )
}

export default Header