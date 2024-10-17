import { Link } from "react-router-dom";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

function Header() {
  return (
    <div>
      <header className="header-main-div">
        <h1 className="top-bar text-white flex justify-center items-center bg-black  w-full min-h-12 text-xl">
          Up to <span className="text-orange-500 px-2"> 50% Off </span> on New
          Season Products!!!
          <span className="text-orange-500 px-2 ">Check it out!</span>
        </h1>

        <nav className="  bg-orange-500 w-full  ">
          <div className=" mx-auto flex justify-around min-h-16">
            <div className="flex justify-center items-center text-4xl font-medium">
              <Link to={"/"}>FASHIONFLOW</Link>
            </div>

            <ul className="flex justify-center items-center space-x-4 font-semibold  text ">
              <li className="relative group text-white hover:text-black transition-all duration-500 pb-1">
                <Link to="/">Home</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
              </li>

              <li className="relative group text-white hover:text-black transition-all duration-500 pb-1">
                <Link to="/Blogs">Blogs</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
              </li>

              <li className="relative group text-white hover:text-black transition-all duration-500 pb-1">
                <Link to="/Contact">Contact</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
              </li>
            </ul>

            <ul className="flex justify-center items-center gap-3">
              <li className="relative group text-white hover:text-black transition-all duration-500 pb-1">
                <Link
                  to="/Auth"
                  className="flex justify-center items-center gap-1 "
                >
                  <FaUserAlt className="" />
                  <span className=" text-center">Login</span>
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
              </li>

              <li className="relative group text-white hover:text-black transition-all duration-500 pb-1">
                <Link
                  to="/cart"
                  className="flex justify-center items-center text-3xl font-bold  "
                >
                  <BsCart2 className="" />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center font- ">
                    1
                  </span>
                </Link>
              </li>

              <li className="relative group text-white hover:text-black transition-all duration-500 pb-1 text-2xl">
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
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
