import HomeVideo from "../utils/video/Home.mp4";
import Header from "@/components/Header/Header";
import icon1 from "../Logos/I1.svg";
import icon2 from "../Logos/I2.svg";
import icon3 from "../Logos/I3.svg";
import icon4 from "../Logos/I4.svg";
import icon5 from "../Logos/phone...svg";
import HomeLogo from "../Logos/DJ.svg";
import leftLogo from "../Logos/signe-left.svg";
import rightLogo from "../Logos/signe-right.svg";
import arrowDown from  '../Logos/Arrow-down.svg'
import Reservation from "@/components/Reservation/Reservation";
import ReservationTwo from "@/components/ReservationTwo/ReservationTwo";
import SenUnique from "@/components/SenUnique/SenUnique";
import Section from "@/components/Section/Section";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import Events from "@/components/Events/Events";
import Clients from "@/components/Clients/Clients";

const Home = () => {
  return (
    <>
    <div className="h-screen overflow-hidden">
      <video
        className="w-screen h-screen filter drop-shadow-2xl object-cover "
        src={HomeVideo}
        autoPlay
       
        loop
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <Header />
      <div className="absolute top-32 xl:ml-24 lg:ml-18 md:ml-18 sm:ml-12 ml-12 flex flex-col gap-y-3">
        <img src={icon1} alt="social media icons" />
        <img src={icon2} alt="social media icons" />
        <img src={icon3} alt="social media icons" />
        <img src={icon4} alt="social media icons" />
        <img src={icon5} alt="social media icons" />
        
      </div>

      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <img src={HomeLogo} className="absolute top-8" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center text-center md:text-left">
        <img
          src={leftLogo}
          alt="Left Logo"
          className="w-12 h-12 md:w-18 md:h-16 lg:w-20 lg:h-20"
        />
        <p className="text-white text-xl md:text-2xl lg:text-3xl px-4 font-quicksand font-extralight">
          BIENVENUE AU <span className="font-semibold">DOMAINE JOURDAN</span>
        </p>
        <img
          src={rightLogo}
          alt="Right Logo"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
      </div>

      
      <button className="absolute top-[26rem] p-1.5 mt-8 lg:p-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white bg-custom-brown font-light px-4">
    <span className="text font-quicksand">VOIR LE DEMANE</span>
  </button>


  <img src={arrowDown} 
  className="absolute top-[35rem] mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center"
  />
    </div>
    <Reservation/>
    <ReservationTwo/>
    <SenUnique/>
    <Section/>
    <Services/>
    <Gallery/>
    <Events/>
    <Clients/>
    </>
  );
};

export default Home;
