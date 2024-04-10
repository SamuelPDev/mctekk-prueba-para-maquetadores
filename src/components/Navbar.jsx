import { useState } from "react";
import bldLogo from "../assets/logo-white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex flex-col bg-teal-400 pin-t pin-r pin-l">
      <nav className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-teal-400 shadow sm:shadow-none">
        <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
          <div className="col-span-2 flex items-center justify-center">
            <img src={bldLogo} alt="BLD" className="w-20" />
          </div>
          <button
            className={`hamburger block sm:hidden focus:outline-none ${
              isOpen ? "open" : ""
            }`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a
            className="text-white hover:underline text-lg w-full sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
            href="#P3L"
            target="_blank"
          >
            WHAT IS BLD
          </a>
          <a
            className="text-white hover:underline text-lg w-full sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
            href="#P3L"
          >
            CUSTOMER REVIEWS
          </a>
          <a
            className="text-white hover:underline text-lg w-full sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
            href="#P3L"
          >
            SUPPORT
          </a>
          <a
            className="text-white hover:underline text-lg w-full sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
            href="#P3L"
          >
            FAQ
          </a>
          <button className="bg-teal-400 text-white py-2 px-4 rounded border border-white border-solid">
            GET STARTED
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
