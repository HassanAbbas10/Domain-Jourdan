import Dj from "../../Logos/DJ.svg";
import { Link } from "react-router-dom";
import footer from "../../Logos/footer.svg";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 mt-[20rem]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <img src={Dj} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-14 pb-20 max-w-md mx-auto md:max-w-2xl lg:max-w-full text-center">
      <div className="border-b-2 md:border-r-2 md:border-b-0 border-gray-600 pb-6 md:pb-0">
        <section className="text-lg mx-auto transition-all duration-500 space-y-5">
          <p className="font-quicksand">
            <a href="#" className="text-gray-400 hover:text-white duration-500">
              610 chemin de la chapelle 13610 Le Puy-Sainte-Réparade
            </a>
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
            07 82 00 23 24
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
            contact@domainejourdan.com
          </p>
        </section>
      </div>

      <div className="border-b-2 md:border-r-2 md:border-b-0 border-gray-600 pb-6 md:pb-0">
        <section className="text-lg mx-auto transition-all duration-500 space-y-2">
          <p className="font-quicksand">
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white duration-500"
            >
              Contact & Accès
            </Link>
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
            Ouvert tous les jours 24/24
          </p>
        </section>
      </div>

      <div>
        <section className="text-lg mx-auto transition-all duration-500 space-y-3">
          <p className="font-quicksand">
            <Link
              to="/chambres"
              className="text-gray-400 hover:text-white duration-500"
            >
              Hotel & chambres
            </Link>
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
            Restaurant & bar
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
            Séminaire
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
            Evènement privé
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
            Galerie
          </p>
        </section>
      </div>
    </div>

        <div className="py-7 border-t border-gray-700 ">
          <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
            <span className="text-gray-400  font-quicksand block">
              ©<Link to="/">Domain Jourdan</Link> 2024,
            </span>

            <span className="text-gray-400 font-quicksand">
              Politique de confidentialité & Mentions Légales
            </span>

            <img src={footer} />

            <span className="text-gray-400 font-quicksand ">
              Conditions générales de vente
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
              <a
                href="javascript:;"
                className="w-14 h-14 border rounded-full border-gray-400 flex justify-center items-center hover:shadow-lg hover:shadow-custom-brown duration-500"
              >
                <LinkedIn sx={{ color: "gray" }} />
              </a>
              <a
                href="javascript:;"
                className="w-14 h-14 border rounded-full border-gray-400 flex justify-center items-center hover:shadow-lg hover:shadow-custom-brown duration-500"
              >
                <Instagram sx={{ color: "gray" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
