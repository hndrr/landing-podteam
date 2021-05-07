import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <section className="w-full px-6 antialiased">
      <div className="mx-auto max-w-7xl">
        <nav className="relative z-50 h-16 select-none">
          <div
            className={
              "container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium lg:justify-center sm:px-4 md:px-2" +
              (navbarOpen ? "" : " overflow-hidden") +
              "md:overflow-visible"
            }
          >
            <div className="flex items-center justify-start w-1/4 h-full pr-4">
              <a href="#_" className="inline-block py-4 md:py-0">
                <span className="p-1 text-4xl font-black leading-none text-gray-900">
                  <span>POD</span>
                </span>
              </a>
            </div>
            <div
              className={
                "top-0 left-0 items-start w-full h-full text-sm md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex" +
                (navbarOpen ? " flex" : " hidden")
              }
            >
              <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                <div
                  className={
                    "flex flex-col items-start justify-center w-full space-x-6 text-center md:w-2/3 md:mt-0 md:flex-row md:items-center"
                  }
                >
                  <a
                    href="#_"
                    className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                  >
                    Home
                  </a>
                  <Link
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                    activeClass="active"
                    to="member"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Member
                  </Link>
                  <Link
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                    activeClass="active"
                    to="faq"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Faq
                  </Link>
                  <Link
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="absolute right-0 flex flex-col items-center justify-center w-10 h-10 bg-white rounded cursor-pointer md:hidden hover:bg-gray-100"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className={
                  "w-6 h-6 text-gray-700" + (navbarOpen ? " hidden" : " block")
                }
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                x-cloak=""
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className={
                  "w-6 h-6 text-gray-700" + (navbarOpen ? " block" : " hidden")
                }
                x-show="showMenu"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                x-cloak=""
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
