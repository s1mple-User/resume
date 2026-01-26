import { Button } from "@/components/ui/button"
import About from "./component/about/about"
import Skils from "./component/skils/skils"
import MyCarousel from "./component/corusel/corusel"
import MyCarouselFigma from "./component/corusel/coruselFigma"




export default function Page() {
  return <div className="container">
      <About/>
        <MyCarouselFigma/>
  <Skils/>
  <MyCarousel/>
  </div>
}
