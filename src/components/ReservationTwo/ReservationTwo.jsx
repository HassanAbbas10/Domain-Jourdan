/* eslint-disable no-irregular-whitespace */
import ResIcon from "../../Logos/RES.svg";
import rightArrow from "../../Logos/rightArrow.svg";
const ReservationTwo = () => {
  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-[1360px] text-center lg:py-16 lg:px-12">
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-4 text-2xl font-quicksand leading-4 tracking-wide">
              UN DOMAINE <span className="text-custom-brown">DE LUXE </span>
            </h1>
            <img
              className="flex items-center justify-center"
              src={ResIcon}
              alt="ResIcon"
              width={200}
            />
          </div>

          <p className=" mt-8 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-8 md:px-16 xl:px-32 2xl:px-56 dark:text-gray-400">
            Un portail monumental en fer forgé orné de pierres sculptées… Une
            bâtisse de style néogothique se dresse fièrement devant vous.
          </p>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-8 md:px-16 xl:px-32 2xl:px-0 dark:text-gray-400">
            La délicatesse de ses sculptures murales, l’élégance de ses
            boiseries, le charme authentique de ses vieilles pierres provençales
            vous plongent dans un univers unique d’un luxe hors du temps.
          </p>

          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-8 md:px-16 xl:px-32 2xl:px-2 dark:text-gray-400">
            Le Domaine se situe dans un écrin de nature qui s’étend sur 2,5
            hectares et qui surplombe un magnifique panorama boisé avec une vue
            imprenable sur les Alpes, le Luberon et la montagne Sainte-Victoire.
            Le vignoble du Domaine parfait la beauté sereine des lieux.
          </p>
          <p className=" text-lg font-normal text-gray-500 lg:text-xl sm:px-8 md:px-16 xl:px-32 2xl:px-2 dark:text-gray-400">
            Une escapade en amoureux, un séjour en famille, un week-end entre
            amis, un voyage d’affaires…
          </p>
          <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-8 md:px-16 xl:px-32 2xl:px-2 dark:text-gray-400">
             Il est également possible de louer l’ensemble du Domaine à la
            semaine.
          </p>
          <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-8 md:px-16 xl:px-32 2xl:px-48 dark:text-gray-400">
            Le Domaine Jourdan vous réserve le meilleur accueil.
          </p>
        </div>
        <div className="lg:mt-6 mt-5 flex mb-8 lg:mb-16  flex-row justify-center sm:space-y-0">
          <button className="p-1.5 lg:p-3 font-semibold lg:px-10 text-white bg-custom-brown px-6">
            <span className="text font-quicksand">RESERVER</span>
          </button>
          <button className="p1.5 lg:p-3 lg:px-6 text-gray-600  font-light px-6">
            <div className="flex items-center justify-center">
              <span className="text font-quicksand">EN SAVIOR PLUS</span>{" "}
              <img className="" width={30} src={rightArrow} />
            </div>
          </button>
        </div>
      </section>
    </>
  );
};
export default ReservationTwo;
