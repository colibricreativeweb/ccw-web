import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/ccw-logo.svg";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const location = useLocation();
  const [linkClicked, setLinkClicked] = useState(false);

  useEffect(() => {
    setLinkClicked(location.pathname === "/quote");
  }, [location]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out rounded-b-md ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="flex flex-row" aria-label="Colibri">
              <div className="flex items-center rounded-r-full bg-gradient-to-l from-white drop-shadow-sm pr-3">
                <img className="w-16 h-16" src={Logo} alt="SVG logo" />
                <div className="font-bold pt-1 font-gruppo leading-4 text-transparent bg-clip-text bg-gradient-to-b from-[#00a6ff] to-[#00ffff]">
                  <div className="flex flex-col items-end">
                    <h1 className="text-[26.5px]">Colibri</h1>
                    <div className="flex text-[12px] space-x-1">
                      <h1>Creative</h1>
                      <h1>Web</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li> */}
              <li>
                <Link
                  to={linkClicked ? "/" : "/quote"}
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                  onClick={() => setLinkClicked(!linkClicked)}
                >
                  <span>{linkClicked ? "Go Back" : "Get a Quote"}</span>
                  <i
                    className={`icon-${
                      linkClicked ? "left-open-2" : "right-open-2"
                    } ml-2`}
                  ></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
