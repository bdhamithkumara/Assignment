import React from "react";
import { Logo } from "../../assets/index";
import { NavLinks } from "../../constants";
import Button from "../../components/structure/Button";
import { useState } from "react";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="cursor-pointer flex items-center">
          <img src={Logo} alt="logo" className="w-[250px] h-[75px]" />
        </div>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {NavLinks.map((nav, index) => (
                <li
                  className={`font-Lato font-normal md:my-0 my-7 uppercase cursor-pointer text-[20px] text-black mr-8 `}
                  key={nav.id}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <Button/>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
