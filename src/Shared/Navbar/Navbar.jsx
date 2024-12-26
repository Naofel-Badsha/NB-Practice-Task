import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router";

import "../Navbar/Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //--------Set------Togglt------Menu-------
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]">
        <NavLink to="about">About</NavLink>
      </li>
      <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]">
        <NavLink to="about">Pages</NavLink>
      </li>
      <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]">
        <NavLink to="services">Services</NavLink>
      </li>
      <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]">
        <NavLink to="services">Team</NavLink>
      </li>
      <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]">
        <NavLink to="blogs">Blogs</NavLink>
      </li>
      <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]">
        <NavLink to="contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <header className=" w-full bg-white md:bg-transparent  top-0 left-0 right-0">
      <nav
        className={`navbarZedIndex py-4 lg:px-14 px-4 text-whibg-white${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b border-slate-300 bg-white text-black"
            : ""
        }`}
      >
        <div className="flex items-center justify-between container m-auto">
          {/*--------------Logo-----------------*/}
          <div>
            <h2 className="text-6xl font-bold text-black space-x-2 tracking-wider">
              Axtra
            </h2>
            <h4 className="text-sm font-bold text-black">
              DIGITAL AGENCY STUDIO
            </h4>
          </div>
          {/*--------------Navitem-----------------*/}
          <div className="hidden 2xl:block">
            <ul className="flex items-center justify-center gap-[100px] ">
              {navItems}
            </ul>
          </div>
          {/*--------------Button-----------------*/}
          <div className="flex items-center gap-10">
            <FaSearch className="text-3xl text-black cursor-pointer" />
            {/*--------Menu-----Bars------*/}
            <div className="2xl:hidden">
              <button
                onClick={toggleMenu}
                className="focus:text-deep-orange-700"
              >
                {isMenuOpen ? (
                  <IoClose className="text-4xl text-text-white" />
                ) : (
                  <HiOutlineBars3BottomRight className="text-4xl text-black cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/*----------Mobial--------Navitem-----------------*/}
        <div
          className={`space-y-4 px-4 mt-28 py-7 bg-gray-200  2xl:hidden ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          <ul className="flex-row container m-auto ">
            <li className="">{navItems}</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
