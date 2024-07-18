/* eslint-disable react/no-unescaped-entities */
const Reservation = () => {
  return (
<div>
<header>
  <nav className=" mx-auto mt-0.5 bg-white max-w-screen border border-gray-300 px-4 lg:px-6 py-6 dark:bg-gray-800">
    <div className="flex flex-wrap justify-between items-center w-full ">
      <ul className="flex flex-col lg:flex-row font-medium space-y-4 lg:space-y-0 lg:space-x-8 items-center justify-center w-full ">
        <li>
          <a
            href="#"
            className="tracking-wide pt-6 font-quicksand block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            RESERVER EN LIGNE
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-quicksand block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent tracking-wide lg:border-0 lg:hover:text-blue-700 lg:p-0"
          >
            DATE D'ARRIVE
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-quicksand block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent tracking-wide lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-white "
          >
            DATE D' DEPART
          </a>
        </li>
        <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent tracking-wide lg:border-0 font-quicksand lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
          ADULTE(S):
          <span className="border border-slate-400 p-3 px-4 ml-1">0</span>
        </li>
        <li className="ml-0.5 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent tracking-wide lg:border-0 font-quicksand lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
          ENFANTE(S):
          <span className="border border-slate-400 p-3 px-4 ml-1">0</span>
        </li>
        <li>
          <a
            href="#"
            className="pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent tracking-wide lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            <button className="p-1.5 lg:p-3 lg:px-6 text-white bg-custom-brown font-light px-4">
              <span className="text font-quicksand">RESERVER</span>
            </button>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent tracking-wide lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            <button className="p-1.5 lg:p-3 text-white bg-white font-light px-4">
              <span className="text font-semibold font-quicksand p-4 text-black border border-gray-400">MALLEUR TARIF GRANTI ICI </span>
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  </header>

</div>

  );
};

export default Reservation;
