import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
    <header className=" w-full absolute top-0">
    <nav className=" border-gray-200 px-4 lg:px-6 py-4 mx-4 dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex flex-col">
          <button onClick={toggleSidebar}>
        
            <MenuIcon style={{ color: '#fff' }}/>
          </button>
          <span className=" font-thin self-center text-xl whitespace-nowrap font-quicksand text-white">
            MENU
          </span>
        </div>
        <div className="flex items-center lg:order-2">
          <button className="text-white bg-custom-brown font-light px-4 lg:px-8 py-0.5 lg:py-1.5">
            <div className="flex flex-col">
              <span className="font-quicksand">RESERVER</span>
              <span className="text-xs font-quicksand">Au meilleur tarif</span>
            </div>
          </button>
         
            
        </div>
        
      </div>
    </nav>

  </header>
  <Sidebar isOpen={!isSidebarOpen} toggleSidebar={toggleSidebar} />
   </>
  );
};

export default Header;
