import { Fragment } from "react";
import ResIcon from "../../Logos/RES.svg";
import rightArrow from "../../Logos/rightArrow.svg";
import eventData from "@/utils/Events";
const Events = () => {
  return (
    <Fragment>
      <div className="py-8 px-4 mx-auto max-w-screen-[1360px] text-center lg:py-16 lg:px-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase mb-4 text-2xl font-quicksand leading-4 tracking-wide">
            Événements
          </h1>
          <img
            className="flex items-center justify-center"
            src={ResIcon}
            alt="ResIcon"
            width={200}
          />
        </div>

        <div className="flex flex-wrap -mx-4 mt-4 mb-10">
          {eventData.map((data) => (
            <div key={data.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <h1 className="uppercase font-quicksand text-lg py-4">
                {data.heading}
              </h1>
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={data.picture}
                />
              </div>
              <p className="text-base leading-relaxed py-14">{data.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <button className="flex mx-auto font-semibold pt-5 text-custom-brown  border-0 x-5">
            <span className="text font-quicksand">VOIR TOUTES LES PHOTOS</span>
            <img className="ml-2" width={30} src={rightArrow} alt="arrow" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Events;
