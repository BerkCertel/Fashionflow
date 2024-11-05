import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart, FaUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

function Header({ setIsSearchShow }) {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    {
      name: "Profile",
      url: "/profile",
    },
    {
      name: "Admin",
      url: "/admin",
    },
    {
      name: "Logout",
      url: "/logout",
    },
  ];

  return (
    <header className="header-main-div ">
      <h1 className="top-bar text-white flex justify-center items-center bg-black sm:text-sm  w-full min-h-12 text-xl">
        Up to <span className="text-orange-500 px-2"> 50% Off </span> on New
        Season Products!!!
        <span className="text-orange-500 px-2 hover:underline cursor-pointer hover:text-orange-700 ">
          Check it out!
        </span>
      </h1>

      <nav className="  bg-orange-500   ">
        <div className="  flex justify-around min-h-16 w-full container mx-auto">
          <div className=" flex justify-center items-center text-4xl font-medium">
            <Link to={"/"}>FASHIONFLOW</Link>
          </div>

          <ul className="  flex justify-center items-center space-x-4 font-semibold  text ">
            <li className="relative group  flex justify-center items-center text-white hover:text-black transition-all duration-500 ">
              <Link to="/">Home</Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </li>

            <li className="relative group text-white hover:text-black transition-all duration-500 ">
              <Link to="/blogs">Blogs</Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </li>

            <li className="relative group text-white hover:text-black transition-all duration-500 ">
              <Link to="/contact">Contact</Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </li>
          </ul>

          <ul className="  flex justify-center items-center gap-5">
            <li className="  flex items-center justify-center text-white hover:text-black transition-all duration-500  cursor-pointer">
              <BiSearch
                className="size-8"
                onClick={() => setIsSearchShow(true)}
              />
            </li>

            <li className="relative group text-white hover:text-black transition-all duration-500 ">
              <Link
                to="/cart"
                className="flex justify-center items-center text-3xl font-bold  "
              >
                <BsCart2 />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center font- ">
                  1
                </span>
              </Link>
            </li>

            <li className="relative group text-white hover:text-black transition-all duration-500  text-2xl">
              <Link
                to="/favorites"
                className="flex justify-center items-center "
              >
                <FaHeart />
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center font- ">
                  1
                </span>
              </Link>
            </li>

            <li className="relative group  transition-all duration-500   ">
              <div className="relative">
                <div
                  className="flex space-x-1 cursor-pointer text-white hover:text-black transition-all duration-500"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <FaUser className="size-7" />

                  <p className="capitalize">berk</p>
                </div>
                {openMenu && (
                  <div className="absolute z-10 p-1  bg-white shadow-xl w-[100px] flex flex-col items-center justify-center rounded top-10  cursor-pointer">
                    {menuItems.map((item, i) => (
                      <div
                        key={i}
                        className=" px-2 py-1 w-full font-thin bg-white hover:bg-gray-100  "
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  setIsSearchShow: PropTypes.func,
};

export default Header;
