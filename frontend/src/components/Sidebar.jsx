import { SidebarLinks } from "@/data/SidebarLinks";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logofinanciera.png";
const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="hidden bg-white  md:flex flex-col  h-screen py-5 w-96 border-r ">
      <div className="flex justify-center">
        <img className="w-4/5 flex justify-center" src={logo} />
      </div>
      <div className="flex flex-col mx-7 mt-7 gap-4  ">
        {SidebarLinks.map((link) => (
          <Link
            className={
              location.pathname == link.link
                ? "flex items-center  text-md gap-3 text-primary  px-4 rounded-lg bg-primary/20 font-semibold  py-4  transition-all duration-300"
                : "flex items-center py-3 text-md gap-3 text-slate-500 hover:text-primary  transition-all duration-300"
            }
            to={link.link}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
