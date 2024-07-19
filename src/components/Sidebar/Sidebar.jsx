import djLogo from "../../Logos/DJ.svg";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon from Material UI
import heading1 from '../../Logos/sidebar1.svg'
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={` z-40 fixed inset-y-0 left-0 lg:w-[25rem] md:w-[25rem] sm:w-[25rem] w-screen bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out `}
    >
      <div className="flex items-center justify-between h-24 border-b bg-custom-gray border-gray-700 p-4">
        <div className="flex items-center justify-center h-full w-full my-4">
          <img src={djLogo} height={100} width={100} alt="DJ-Logo" />
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
      <nav className="flex-1 p-4">
        <ul>
          <li className="flex py-4 items-start justify-start">
           <img src={heading1} />
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
                 
              Le domaine
            </a>
          </li>
          <li className="flex py-4 items-start justify-start">
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Les Chambres
            </a>
          </li>
          <li className="flex py-4 items-start justify-start">
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Les Services
            </a>
          </li>
          <li className="flex py-4 items-start justify-start">
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Événements
            </a>
          </li>
          <li className="flex py-4 items-start justify-start">
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Accès & contact
            </a>
          </li>
          <li className="flex py-4 items-start justify-start">
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-700 uppercase"
            >
              Galerie Photos
            </a>
          </li>
          <li className="flex py-4 items-center justify-center">
            <button className="text-white bg-custom-brown font-light px-4 lg:px-8 py-0.5 lg:py-1.5">
              <div className="flex flex-col">
                <span>RESERVER</span>
                <span className="text-xs ">Au meilleur tarif</span>
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
