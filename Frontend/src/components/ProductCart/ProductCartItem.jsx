import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiArrowSmDown } from "react-icons/hi";
import PropTypes from "prop-types";

function ProductCartItem({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  ProductCartItem.propTypes = {
    product: PropTypes.object.isRequired,
  };

  return (
    <div
      className=" flex justify-center items-center flex-col cursor-pointer shadow rounded border hover:shadow-2xl transition duration-500 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex relative p-2 rounded-xl">
        <div
          className={`flex flex-col items-start justify-start top-6 left-5 space-y-3 z-50 absolute inset-0 ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          <button className="text-white bg-black p-1 rounded hover:opacity-65 ">
            <IoCart className="text-sm" />
          </button>
          <button className="text-white bg-black p-1 rounded  hover:opacity-65">
            <FaHeart className="text-sm" />
          </button>
          <Link
            to="/productdetails/:id"
            className="text-white bg-black p-1 rounded  hover:opacity-65"
          >
            <IoMdEye className="text-sm" />
          </Link>
        </div>
        <small className="absolute z-30 top-4 right-5 flex justify-center items-center text-white rounded-lg p-1 bg-red-600">
          <HiArrowSmDown className="text-sm" />%{product.price.discount}
        </small>
        <img
          className={`absolute object-cover max-w-[250px] max-h-[270px]  rounded transition-opacity duration-700  ${
            isHovered ? "opacity-0" : "opacity-100 z-20"
          }`}
          src={product.images[0]}
          alt="Product Image 1"
        />

        <img
          className={`max-w-[250px] max-h-[270px]  rounded transition-opacity duration-700  ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          src={product.images[1]}
          alt="Product Image 2"
        />
      </div>

      <h2 className="font-thin mt-2">{product.name}</h2>
      <hr className="w-3/4" />
      <p className="font-semibold flex gap-1 pb-3 mt-2">
        {product.price.current} $
        <span className="text-xs font-normal text-red-600  line-through">
          {product.price.discount}$
        </span>
      </p>
    </div>
  );
}

export default ProductCartItem;
