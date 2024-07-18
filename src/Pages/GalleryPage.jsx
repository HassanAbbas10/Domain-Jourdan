
import HeaderSec from "@/components/Header/HeaderSec";
import FifthPage from '../utils/Pictures/5th Page.jpg'
import icon1 from '../Logos/I1.svg'
import icon2 from '../Logos/I2.svg'
import icon3 from '../Logos/I3.svg'
import icon4 from '../Logos/I4.svg'
import icon5 from "../Logos/phone...svg";
import Reservation from "@/components/Reservation/Reservation"

import Gallery from "@/components/Gallery/Gallery";
const GalleryPage = () => {
  return (
    <>
   
   <div className="h-[60vh] overflow-hidden relative">
  <img
    className="w-screen h-[60vh] filter drop-shadow-2xl object-cover o"
    src={FifthPage}
    alt="FifthPage"
  />
  <div className="absolute top-0 left-0 w-full h-[60vh] bg-black opacity-40"></div>
  <HeaderSec />
  <div className="absolute top-32 xl:ml-24 lg:ml-18 md:ml-18 sm:ml-12 ml-5 flex flex-col gap-y-3">
    <img src={icon1} alt="social media icons" />
    <img src={icon2} alt="social media icons" />
    <img src={icon3} alt="social media icons" />
    <img src={icon4} alt="social media icons" />
    <img src={icon5} alt="social media icons" />
  </div>

  
</div>
<Reservation className="top-[25rem]"/>
<Gallery/>

    </>
  )
}

export default GalleryPage