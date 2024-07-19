import HeaderSec from "@/components/Header/HeaderSec";
import FifthPage from "../utils/Pictures/5th Page.jpg";
import icon1 from "../Logos/I1.svg";
import icon2 from "../Logos/I2.svg";
import icon3 from "../Logos/I3.svg";
import icon4 from "../Logos/I4.svg";
import icon5 from "../Logos/phone...svg";
import ResIcon from "../Logos/RES.svg";
import { useState } from "react";
import Reservation from "@/components/Reservation/Reservation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    fname: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
  const handleSubmit = () => {};
  return(
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
      <Reservation className="top-[25rem]" />
      <div className="flex flex-col justify-center items-center mt-16">
        <h1 className="mb-4 text-2xl font-quicksand lg:leading-4 leading-9  tracking-wide uppercase">
          Accès &<span className="text-custom-brown uppercase">contact </span>
        </h1>
        <img
          className="flex items-center justify-center "
          src={ResIcon}
          alt="ResIcon"
          width={100}
        />

        <iframe
          title="map"
          src="https://maps.google.com/maps?width=100%&amp;height=1200&amp;hl=en&amp;q=610 chemin de la chapelle 13610 Le Puy-Sainte-Réparade&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          className="w-full h-screen lg:px-16 mt-20"
        ></iframe>
      </div>

      <div className="w-full lg:px-16 lg:ms-auto mx-auto text-center">
        <div className="py-16 px-7 rounded-md bg-white">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4 text-2xl font-quicksand lg:leading-4 leading-9  tracking-wide uppercase flex items-start justify-start py-8">
              NOUS
              <span className="text-custom-brown uppercase pl-4">
                contacter{" "}
              </span>
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nom *"
                value={formData.fname}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-brown"
              />
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Prenom"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-brown"
              />
              <div className="md:col-span-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-brown"
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Votre Message *"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-custom-brown"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex items-end justify-end">
                <button className="py-3 mt-1 text-base font-semibold font-quicksand rounded text-white bg-custom-brown w-36 hover:bg-custom-brown transition duration-300">
                  ENVOI
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
