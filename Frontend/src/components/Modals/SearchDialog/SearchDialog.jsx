import PropTypes from "prop-types";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getKeyword } from "../../../redux/generalSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function SearchDialog({ isSearchShow, setIsSearchShow }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const keywordFunc = () => {
    dispatch(getKeyword(keyword));
    navigate(`/products`);
    setKeyword("");
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center bg-black bg-opacity-50 ${
        isSearchShow ? "fixed  z-50" : "hidden"
      }`}
      onClick={() => setIsSearchShow(false)}
    >
      <div
        className="flex justify-start flex-col items-center w-2/3 h-2/3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-6 rounded-xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="w-full flex justify-end">
          <IoIosCloseCircleOutline
            className="text-4xl cursor-pointer hover:text-white transition duration-300"
            onClick={() => setIsSearchShow(false)}
          />
        </button>

        {/* Search Input and Button */}
        <div className="w-full h-full flex flex-col items-center ">
          <div className="w-3/4 flex space-x-3">
            {/* Input Field */}
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              placeholder="Search for clothes, shoes, and more..."
              className="w-5/6 p-3 rounded-full border border-gray-300 caret-orange-500
                         text-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition duration-300 bg-white shadow-lg"
            />

            {/* Search Button */}
            <div
              onClick={keywordFunc}
              className="w-1/6 flex justify-center items-center cursor-pointer text-3xl bg-white p-3 rounded-full
                         border border-gray-300 hover:bg-orange-600 hover:text-white hover:scale-110 shadow-lg transition duration-300 ease-in-out"
            >
              <BiSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchDialog.propTypes = {
  isSearchShow: PropTypes.bool.isRequired,
  setIsSearchShow: PropTypes.func.isRequired,
};

export default SearchDialog;
