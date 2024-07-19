/* eslint-disable react/prop-types */
import djLogo from "../../Logos/DJ.svg";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon from Material UI
import heading1 from "../../Logos/sidebar1.svg";
import heading2 from "../../Logos/sidebar2.svg";
import sidebar3 from "../../Logos/sidebar3.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={` z-40 fixed inset-y-0 left-0 lg:w-[25rem] md:w-[25rem] sm:w-[25rem] w-screen bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out `}
    >
      <div className="flex items-center justify-between h-16 border-b bg-custom-gray border-gray-700 p-4">
        <div className="flex items-center justify-center h-full w-full my-4">
          <img src={djLogo} height={100} width={80} alt="DJ-Logo" />
        </div>

        {isOpen ? (
          <button
            onClick={toggleSidebar}
            className="p-2 text-white rounded lg:-mr-[3.5rem] md:-mr-[3.5rem] sm:-mr-[3.5rem]"
          >
            <CloseIcon style={{ color: "#fff" }} />
          </button>
        ) : null}
      </div>
      <nav className="flex-1 p-2">
        <ul>
          <Link to="/">
            <li className="flex py-1.5 items-center pl-[4.5rem] uppercase">
              <img src={heading1} className="mr-4" alt="Heading" />
              <p className="block p-2 rounded hover:bg-gray-700 uppercase">
                
                Le domaine
              </p>
            </li>
          </Link>

          <Link to='/chambres'>
          <li className="flex py-1.5 items-center pl-[4.5rem]">
            <img src={heading2} className="mr-4" alt="Heading" />
            <a
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Les Chambres
            </a>
          </li>
          </Link>
          <Link to='/services'>
          <li className="flex py-1.5 items-center pl-[4.5rem]">
            <img src={heading2} className="mr-4" alt="Heading" />
            <a
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Les Services
            </a>
          </li>
          </Link>
          <Link to="/events">
          <li className="flex py-1.5 items-center pl-[4.5rem]">
            <img src={heading2} className="mr-4" alt="Heading" />
            <a
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Événements
            </a>
          </li>
          </Link>
          <Link to="/contact">
          <li className="flex py-1.5 items-center pl-[4.5rem]">
            <img src={heading2} className="mr-4" alt="Heading" />
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Accès & contact
            </a>
          </li>
          </Link>
          <Link to='/gallery'>
          <li className="flex py-1.5 items-center pl-[4.5rem]">
            <img src={heading2} className="mr-4" alt="Heading" />
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Galerie Photos
            </a>
          </li>
          </Link>

          <li className="flex py-1.5 items-center justify-center border-b-2 border-slate-500 border-collapse">
            <button className="text-white bg-custom-brown font-light px-3 lg:px-8 py-0.5 lg:py-1.5 ">
              <div className="flex flex-col">
                <span>RESERVER</span>
                <span className="text-xs ">Au meilleur tarif</span>
              </div>
            </button>
          </li>

          <section className="flex py-1.5 items-center justify-center ">
            <p className=" flex py-1.5 items-center justify-center px-24 font-quicksand text-slate-400">
              610 chemin de la chapelle 13610 Le Puy-Sainte-Réparade
            </p>
          </section>

          <section className="flex py-1.5 items-center justify-center flex-col px-4  font-quicksand text-slate-400">
            <p>07 82 00 23 24</p>
            <p>contact@domainejourdan.com</p>
          </section>
          <div className="flex items-center justify-center">
            <img src={sidebar3} />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
