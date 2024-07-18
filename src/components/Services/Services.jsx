import ResIcon from "../../Logos/res2.svg";
import right2 from "../../Logos/right2.svg";
import SvgData from "@/utils/SvgData";
// import vec from "../../Logos/VEC.svg"
const Services = () => {
  return (
    <>
      <div className=" w-screen-xl h-full bg-custom-brown">
        <div className="py-8 px-4 mx-auto max-w-screen-[1360px] text-center lg:py-16 lg:px-12">
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-4 text-2xl font-quicksand lg:leading-4 leading-9  tracking-wide ">
              NO SERVICES A
              <span className="text-white">VOTRE DISPOSITION </span>
            </h1>
            <img
              className="flex items-center justify-center "
              src={ResIcon}
              alt="ResIcon"
              width={100}
            />
          </div>

          <div>
            {/* <div className="flex items-center justify-center">
<img src={vec} />
</div> */}

            <section className="text-gray-600 body-font">
              <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {SvgData.map((data) => (
                    <div key={data.id} className="p-4 w-full sm:w-1/2 lg:w-1/3">
                      <div className="p-6 rounded-lg text-center">
                        <img
                          className="rounded object-cover object-center mx-auto"
                          width={40}
                          src={data.picture}
                          alt="content"
                        />
                        <h2 className="text-lg text-gray-900 font-medium title-font mt-4 mb-2">
                          {data.description}
                        </h2>
                        <p className="leading-relaxed text-base">
                         {data.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="flex flex-col justify-center items-center">
            <svg
              width={50}
              height={50}
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4"
            >
              <g clipPath="url(#clip0_83_666)">
                <path
                  d="M25 0C11.2142 0 0 11.2152 0 25C0 38.7848 11.2142 50 25 50C38.7858 50 50 38.7848 50 25C50 11.2152 38.7858 0 25 0ZM25 47.9167C12.3637 47.9167 2.0833 37.6363 2.0833 25C2.0833 12.3637 12.3637 2.0833 25 2.0833C37.6363 2.0833 47.9167 12.3637 47.9167 25C47.9167 37.6363 37.6363 47.9167 25 47.9167Z"
                  fill="black"
                />
                <path
                  d="M26.0417 24.5687V7.2917C26.0417 6.71592 25.5757 6.25 25 6.25C24.4242 6.25 23.9583 6.71592 23.9583 7.2917V25C23.9583 25.2767 24.0681 25.5412 24.2634 25.7365L33.6384 35.1115C33.8418 35.3149 34.1084 35.4167 34.375 35.4167C34.6415 35.4167 34.908 35.3149 35.1115 35.1115C35.5184 34.7046 35.5184 34.0454 35.1115 33.6386L26.0417 24.5687Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_83_666">
                  <rect width={50} height={50} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-white text-center font-['Quicksand'] flex flex-col leading-[normal]">
              <p>
                <span className="text-black font-semibold">Check-in :</span> à
                parti de 15h
              </p>
              <p>
                <span className="text-black font-semibold">Check-out :</span> au
                plus tard à 11h
              </p>
            </div>
            <button className="flex mx-auto  mt-3 text-white  border-0 x-5">
              <span className="text font-quicksand">
                VOIR TOUS LES SERVICES
              </span>
              <img className="ml-2" width={30} src={right2} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
