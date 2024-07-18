import MenuIcon from "@mui/icons-material/Menu";
import djLogo from "../../Logos/DJ.svg";
const HeaderSec = () => {
  return (
    <header className=" w-full absolute top-0">
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex flex-col">
            <button>
              <MenuIcon style={{ color: '#fff' }} />
            </button>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Menu
            </span>
          </div>
          <div className="flex items-center lg:order-2">
            <button className="text-white bg-custom-brown font-light px-4 lg:px-8 py-0.5 lg:py-1.5">
              <div className="flex flex-col">
                <span>RESERVER</span>
                <span className="text-xs ">Au meilleur tarif</span>
              </div>
            </button>
           
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <img src={djLogo} height={100} width={140} alt="DJ-Logo" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSec;
