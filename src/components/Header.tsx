import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <section id="header" className="w-full px-6 antialiased">
      <div className="mx-auto max-w-7xl">
        <nav className="relative z-50 h-16 select-none">
          <div
            className={
              "container relative flex flex-wrap items-center justify-between h-24 font-medium lg:justify-center sm:px-4 md:px-2" +
              (navbarOpen ? "" : " overflow-hidden") +
              "md:overflow-visible"
            }
          >
            <Link
              className="fixed md:static inline-block py-4 md:py-0"
              activeClass="active"
              to="header"
              offset={-40}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <span className="p-1 text-4xl font-black leading-none text-gray-900">
                <span>POD</span>
              </span>
            </Link>
            <div
              className={
                "fixed top-100px right-0 mr-4 items-start w-32 h-full text-sm md:items-center md:w-3/4 md:top-0 md:mr-0 lg:text-base md:bg-transparent md:p-0 md:relative md:flex" +
                (navbarOpen ? " flex" : " hidden")
              }
            >
              <div className="flex-col w-full h-auto overflow-hidden justify-center rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                <div
                  className={
                    "flex flex-col items-start justify-center w-full space-x-6 text-center md:w-2/3 md:mt-0 md:flex-row md:items-center"
                  }
                >
                  <Link
                    className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 text-2xl md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                    activeClass="active"
                    to="header"
                    offset={-40}
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Home
                  </Link>
                  <Link
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 text-2xl md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                    activeClass="active"
                    to="member"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Member
                  </Link>
                  <Link
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 text-2xl md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                    activeClass="active"
                    to="faq"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Faq
                  </Link>
                  <Link
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 text-2xl md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
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
              className="fixed right-0 mr-4 flex flex-col items-center justify-center w-10 h-10 bg-white rounded cursor-pointer md:hidden hover:bg-gray-100"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className={
                  "w-6 h-6 text-gray-700" + (navbarOpen ? " hidden" : " block")
                }
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                x-cloak=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
