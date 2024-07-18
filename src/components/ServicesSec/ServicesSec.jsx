import ResIcon from "../../Logos/RES.svg";

import SvgData from "@/utils/SvgData";
const ServicesSec = () => {
  return (
    <>
      <div className=" w-screen-xl h-full bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-[1360px] text-center lg:py-16 lg:px-12">
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-4 text-2xl font-quicksand leading-4 tracking-wide uppercase">
              Les Services
            </h1>
            <img
              className="flex items-center justify-center"
              src={ResIcon}
              alt="ResIcon"
              width={200}
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
                        <p className="leading-relaxed text-base text-black px-[4rem]">
                     {data.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

        
        </div>
      </div>
    </>
  )
}

export default ServicesSec