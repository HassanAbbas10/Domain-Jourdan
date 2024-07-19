import djLogo from "../../Logos/DJ.svg";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon from Material UI

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={` z-40 fixed inset-y-0 left-0 lg:w-[25rem] md:w-[25rem] sm:w-[25rem] w-screen bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out `}
    >
      <div className="flex items-center justify-between h-24 border-b bg-custom-gray border-gray-700 p-4">
        <div className="flex items-center justify-center ml-[6.25rem] my-4">
          <img src={djLogo} height={100} width={100} alt="DJ-Logo" />
        </div>

        <button
          onClick={toggleSidebar}
          className="p-2  text-white rounded -mr-[3.5rem]"
        >
          {console.log(toggleSidebar)}
          {console.log(isOpen)}
          <CloseIcon style={{ color: "#fff" }} />
        </button>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <a href="#" className="block p-2 rounded hover:bg-gray-700 uppercase">
            Le domaine
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="block p-2 rounded hover:bg-gray-700 uppercase">
            Les Chambres
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="block p-2 rounded hover:bg-gray-700 uppercase">
            Les Services
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700 uppercase">
            Événements
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700 uppercase">
            Accès & contact
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700 uppercase">
            Galerie Photos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
