import mask from "../../Logos/Mask.jpg";
import ResIcon from "../../Logos/RES.svg";
const SenUnique = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="max-w-screen-xl mx-auto justify-center flex px-5 py-3 md:flex-row-reverse flex-col">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              width={900}
              src={mask}
            />
          </div>
          <div className="md:w-1/2 flex flex-col md:items-start md:text-left lg:mr-2">
            <div className="flex flex-col items-center md:items-start justify-center lg:ml-[12rem] mb-4">
              <h1 className="mb-4 text-2xl font-quicksand leading-4 tracking-wide">
                UN SEJOUR <span className="text-custom-brown">UNIQUE </span>
              </h1>
              <img
                className="flex items-center justify-center"
                src={ResIcon}
                alt="ResIcon"
                width={200}
              />
            </div>
            <p className="mb-2 font-normal text-gray-500 px-4 2xl:px-2 dark:text-gray-400">
              Offrez-vous une escale dans un havre de paix luxueux et
              chaleureux. Pour vous
            </p>
            <p className="mb-2 font-normal text-gray-500 px-4 2xl:px-2 dark:text-gray-400">
              Pour vous accueillir, le Domaine comporte cinq chambres modernes
              et pleines de charme dans la bâtisse principale, dont une suite de
              luxe équipée d’un jacuzzi privatif en plus de sa salle de bain,
              elle offre une splendide vue sur les Alpes et un aperçu sur la
              montagne Sainte-Victoire et également trois bastidons seigneuriaux
              à la décoration soignée tout confort, situés dans la propriété,
              disposant chacun de leur terrasse privative offrant également la
              vue sur les Alpes.
            </p>
            <p className="mb-2 font-normal text-gray-500 px-4 2xl:px-2 dark:text-gray-400">
              Pour parfaire votre séjour au cœur de la Provence, accordez-vous
              un moment de détente au bord de la piscine, décompressez dans le
              jacuzzi...
            </p>
            <div className="flex items-center justify-center lg:mr-[12rem] mt-4">
              <button className="p-1.5 lg:p-3 font-semibold lg:px-10 text-white bg-custom-brown px-6">
                <span className="text font-quicksand">RESERVER</span>
              </button>
              <button className="p1.5 lg:p-3 lg:px-6 text-gray-600 font-light px-6">
                <span className="text font-quicksand">EN SAVIOR PLUS</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font ">
        <div className="max-w-screen-xl mx-auto justify-center flex px-5 py-3 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              width={900}
              src={mask}
            />
          </div>
          <div className=" md:w-1/2 flex flex-col md:items-start md:text-left lg:ml-2 ">
            <div className="flex flex-col items-center justify-center lg:ml-[12rem] mb-4">
              <h1 className="mb-4 text-2xl font-quicksand leading-4 tracking-wide">
              UN MOMENT <span className="text-custom-brown">INOUBLIABLE </span>
              </h1>
              <img
                className="flex items-center justify-center"
                src={ResIcon}
                alt="ResIcon"
                width={200}
              />
            </div>

            <p className="mb-2 font-normal text-gray-500 px-4 2xl:px-2 dark:text-gray-400">
              Offrez-vous une escale dans un havre de paix luxueux et
              chaleureux. Pour vous
            </p>
            <p className="mb-2 font-normal text-gray-500 px-4 2xl:px-2 dark:text-gray-400">
              Pour vous accueillir, le Domaine comporte cinq chambres modernes
              et pleines de charme dans la bâtisse principale, dont une suite de
              luxe équipée d’un jacuzzi privatif en plus de sa salle de bain,
              elle offre une splendide vue sur les Alpes et un aperçu sur la
              montagne Sainte-Victoire et également trois bastidons seigneuriaux
              à la décoration soignée tout confort, situés dans la propriété,
              disposant chacun de leur terrasse privative offrant également la
              vue sur les Alpes.
            </p>
            <p className="mb-2 font-normal text-gray-500 px-4 2xl:px-2 dark:text-gray-400">
              Pour parfaire votre séjour au cœur de la Provence, accordez-vous
              un moment de détente au bord de la piscine, décompressez dans le
              jacuzzi...
            </p>
            <div className="flex items-center justify-center lg:ml-[12rem] mt-4">
              <button className="p-1.5 lg:p-3 font-semibold lg:px-10 text-white bg-custom-brown px-6">
                <span className="text font-quicksand">RESERVER</span>
              </button>
              <button className="p1.5 lg:p-3 lg:px-6 text-gray-600  font-light px-6">
                <span className="text font-quicksand">EN SAVIOR PLUS</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SenUnique;
