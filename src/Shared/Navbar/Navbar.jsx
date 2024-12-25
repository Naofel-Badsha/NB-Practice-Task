import { FaSearch } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const navItems = <>
       <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]"><NavLink to="/">Home</NavLink></li>
       <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]"><NavLink to="about">About</NavLink></li>
       <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]"><NavLink to="about">Pages</NavLink></li>
       <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]"><NavLink to="services">Services</NavLink></li>
       <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]"><NavLink to="services">Team</NavLink></li>
       <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]"><NavLink to="blogs">Blogs</NavLink></li>
       <li className="text-zinc-900 text-xl not-italic font-medium uppercase tracking-[0.396px]"><NavLink to="contact">Contact</NavLink></li>
    </>
  return (
    <div className="container mt-[15px] m-auto">
        <div className="flex items-center justify-between">
          {/*--------------Logo-----------------*/}
          <div>
            {/* <div className="flex items-center">
              <div className="w-[20px] h-[5px] bg-black -rotate-90 absolute mt-6 left-[]"></div>

              <div className="w-[30px] h-[5px] bg-black rotate-45"></div>
            </div> */}
            <h2 className="text-6xl font-bold text-black space-x-2 tracking-wider">Axtra</h2>
            <h4 className="text-sm font-bold text-black">DIGITAL AGENCY STUDIO</h4>
          </div>
          {/*--------------Navitem-----------------*/}
          <div>
            <ul className="flex items-center justify-center gap-[100px]">
              {navItems}
            </ul>
          </div>
          {/*--------------Button-----------------*/}
          <div className="flex items-center gap-10">
            <FaSearch className="text-3xl text-black cursor-pointer"/>
            <HiOutlineBars3BottomRight className="text-4xl text-black cursor-pointer"/>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
