import secData from "@/utils/Section";
import rightArrow from "../../Logos/rightArrow.svg";
import ResIcon from "../../Logos/RES.svg";
const Section = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="mb-4 text-2xl font-quicksand leading-4 tracking-wide">
          LES <span className="text-custom-brown">CHAMBRES</span>
        </h1>
        <img
          className="flex items-center justify-center"
          src={ResIcon}
          alt="ResIcon"
          width={200}
        />
      </div>
      <div className="flex flex-wrap lg:ml-0 items-center justify-center ">
        {secData.map((data) => (
          <div key={data.id} className="p-4 md:w-1/3 sm:mb-0 mt-6">
            <section className="text-gray-600 body-font">
              <div className="container py-6 mx-auto">
                <div className="flex flex-col">
                  <div className=" h-64 overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover h-full w-full"
                      src={data.picture}
                    />
                  </div>
                  <h2 className="title-font font-quicksand flex mx-auto text-2xl font-medium text-gray-900 mt-6 mb-3">
                    {data.description}
                  </h2>
                  <button className="flex mx-auto font-semibold mt-3 text-custom-brown  border-0 x-5">
                    <span className="text font-quicksand">EN SAVOIR PLUS</span>
                    <img
                      className="ml-2"
                      width={30}
                      src={rightArrow}
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
