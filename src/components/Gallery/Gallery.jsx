import { Fragment } from "react";
import ResIcon from "../../Logos/RES.svg";
import photo1 from "../../utils/Pictures/1.jpg";
import photo2 from "../../utils/Pictures/2.jpg";
import photo3 from "../../utils/Pictures/3.jpg";
import photo4 from "../../utils/Pictures/4.jpg";
import photo5 from "../../utils/Pictures/5.jpg";
import photo6 from "../../utils/Pictures/6.jpg";
import photo7 from "../../utils/Pictures/7.jpg";
import photo8 from "../../utils/Pictures/8.jpg";
import photo9 from "../../utils/Pictures/9.jpg";
import photo10 from "../../utils/Pictures/10.jpg";
import photo11 from "../../utils/Pictures/11.jpg";
import rightArrow from "../../Logos/rightArrow.svg";
import "./gallery.css";
const Gallery = () => {
  return (
    <Fragment>
      <div className="py-8 px-4 mx-auto max-w-screen-[1360px] text-center lg:py-16 lg:px-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-4 text-2xl font-quicksand leading-4 tracking-wide">
            PHOTO DU<span className="text-custom-brown">DOMAIN</span>
          </h1>
          <img
            className="flex items-center justify-center"
            src={ResIcon}
            alt="ResIcon"
            width={200}
          />
        </div>
        <div className="photo-grid my-10">
          <div className="card card-wide">
            <img className="object-center card object-cover" src={photo1} />
          </div>
          <div className="card card-wide">
            <img className="object-center object-cover card" src={photo2} />
          </div>
          <div className="card card-tall">
            <img className="object-center object-cover card" src={photo3} />
          </div>
          <div className="card card-tall">
            <img className="object-center object-cover card" src={photo4} />
          </div>
          <div className="card card-tall">
            <img className="object-center object-cover card" src={photo5} />
          </div>
          <div className="card card">
            <img className="object-center object-cover card" src={photo6} />
          </div>
          <div className="card card">
            <img className="object-center object-cover card" src={photo7} />
          </div>
          <div className="card card-wide">
            <img className="object-center object-cover card" src={photo8} />
          </div>
          <div className="card card-tall">
            <img className="object-center object-cover card" src={photo9} />
          </div>
          <div className="card card-wide">
            <img
              className="object-center object-cover card card-wide"
              src={photo10}
            />
          </div>
          <div className="card card-wide">
            <img
              className="object-center object-cover  h-full card card-tall card-wide"
              src={photo11}
            />
          </div>
        </div>

        <div>
          <button className="flex mx-auto font-semibold pt-10 text-custom-brown  border-0 x-5">
            <span className="text font-quicksand">VOIR TOUTES LES PHOTOS</span>
            <img className="ml-2" width={30} src={rightArrow} alt="arrow" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
