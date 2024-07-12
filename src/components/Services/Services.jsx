import ResIcon from "../../Logos/res2.svg";
const Services = () => {
  return (
    <>
      <div className=" w-screen-xl h-[90vh] bg-custom-brown py-10">
        <div className="py-8 px-4 mx-auto max-w-screen-[1360px] text-center lg:py-16 lg:px-12">
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-4 text-2xl font-quicksand lg:leading-4 leading-9  tracking-wide ">
              NO SERVICES A{" "}
              <span className="text-white">VOTRE DISPOSITION </span>
            </h1>
            <img
              className="flex items-center justify-center "
              src={ResIcon}
              alt="ResIcon"
              width={100}
            />
          </div>

          <div></div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-4 text-2xl font-quicksand lg:leading-4 leading-9  tracking-wide ">
              NO SERVICES A{" "}
              <span className="text-white">VOTRE DISPOSITION </span>
            </h1>
            <img
              className="flex items-center justify-center "
              src={ResIcon}
              alt="ResIcon"
              width={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
