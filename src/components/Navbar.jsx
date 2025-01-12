import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 shadow-lg justify-between flex items-center px-10">
      <Link to="/">
        <img src={logo} alt="logo" className="w-20 h-18" />
      </Link>

      <div className="flex ml-auto gap-3 text-black">
        <Link
          to="/"
          className=" px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/login"
          className=" px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className=" px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
