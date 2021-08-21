import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from '../assets/logo.png';


const Header = () => {
  const [menuStatus, setmenuStatus] = useState("hidden");
  const menuClick = () => {
    if (menuStatus === "hidden") setmenuStatus("");
    else setmenuStatus("hidden");
  };
  return (
    <nav className="bg-white shadow-md  w-full py-2 duration-300 delay-150">
      <div className="flex justify-between   px-2 items-center">
        <Link to="/">
          <div className="cursor-pointer">
            <img className='h-32' src={Logo} alt='Logo'/>
          </div>
        </Link>
        <div className="hidden md:flex  my-2 px-12 space-x-8 text-2xl font-normal">
          <Link to="/">
            <h2 className="cursor-pointer hover:text-red-900 hover:underline">
              Home
            </h2>
          </Link>
          <Link to="/about">
            <h2 className="cursor-pointer hover:text-red-900 hover:underline">
              About
            </h2>
          </Link>
          {/* <Link to="/product">
            <h2 className="cursor-pointer hover:text-red-900 hover:underline">
              Fans
            </h2>
          </Link> */}
        </div>
        <div className="md:hidden">
          <button onClick={menuClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col  items-center text-xl p-6 space-y-4 ${menuStatus} md:hidden`}
      >
        <Link to="/" className=" hover:underline">
          Home
        </Link>
        <Link to="/about" className=" hover:underline">About</Link>
        <Link to="/product" className=" hover:underline ">Fans</Link>
      </div>
    </nav>
  );
};

export default Header;
