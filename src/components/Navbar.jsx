import React, { useState } from "react";
import { logoo, menu, close } from "../assets";
import { navlinks } from "../constants";
import { styles } from "../style";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoo} alt="logo" className="h-6" />
          <h1 className="text-[1.5rem] font-bold text-secondary font-poppins">
            mediately.
          </h1>
        </Link>
        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <Link
                to={`#${navlink.id}`}
                className={`${
                  active === navlink.title ? "text-orange" : "text-secondary"
                } font-bold`}
                onClick={() => setActive(navlink.title)}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain w-6 h-6 flex items-center justify-center"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none sm:flex flex-col items-start justify-end gap-4">
              {navlinks.map((navlink, index) => (
                <li key={index}>
                  <Link
                    to={`#${navlink.id}`}
                    className={`${
                      active === navlink.title
                        ? "text-orange"
                        : "text-secondary"
                    } font-bold`}
                    onClick={() => {
                      setActive(navlink.title);
                      setToggle(!toggle);
                    }}
                  >
                    {navlink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
