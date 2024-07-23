import Dj from "../../Logos/DJ.svg";
import { Link } from "react-router-dom";
import footer  from '../../Logos/footer.svg'
import LN from '../../Logos/footerLn.svg'
import instagram from '../../Logos/footerINS.svg'
const Footer = () => {
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <img src={Dj} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">
              Domain Jourdan
            </h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  About
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Pro Version
                </a>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Products</h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-400 hover:text-white"
                >
                  Figma UI System
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Icons Assets
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Responsive Blocks
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Components Library
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Plugin Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Resources</h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-400 hover:text-white"
                >
                  FAQs
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Quick Start
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  User Guide
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Plugin Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Support</h4>
            <ul className="text-lg  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-400 hover:text-white"
                >
                  Customer Support
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Cookies
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  License
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className=" text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
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

            <img src={footer}/>

            <span className="text-gray-400 font-quicksand ">
            Conditions générales de vente
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
              <a
                href="javascript:;"
                className="w-14 h-14 border flex justify-center items-center hover:"
              >
                <img src={LN} width={50}/>
              </a>
              <a
                href="javascript:;"
                className="w-12 h-14 flex justify-center items-center hover:"
              >
               <img src={instagram} width={50}/>
              </a>
              
               
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
