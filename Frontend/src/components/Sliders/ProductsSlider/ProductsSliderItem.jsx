import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProductsSliderItem({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" flex justify-center items-center flex-col cursor-pointer shadow rounded border hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex relative p-2 rounded-xl">
        <div
          className={`flex flex-col items-start justify-start top-6 left-5 space-y-3 z-50 absolute inset-0 ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          <button className="text-white bg-black p-1 rounded hover:text-orange-500 ">
            <IoCart className="text-sm" />
          </button>
          <button className="text-white bg-black p-1 rounded  hover:text-orange-500">
            <FaHeart className="text-sm" />
          </button>
          <Link
            to="/productdetails/:id"
            className="text-white bg-black p-1 rounded  hover:text-orange-500"
          >
            <IoMdEye className="text-sm" />
          </Link>
        </div>

        <img
          className={`absolute object-cover max-w-[250px] max-h-[270px] mt-2 rounded  ${
            isHovered ? "invisible" : "visible z-20"
          }`}
          src={product.images.thumbs[0]}
          alt="Product Image 1"
        />

        <img
          className={`max-w-[250px] max-h-[270px] mt-2 rounded  ${
            isHovered ? "visible" : "invisible"
          }`}
          src={product.images.thumbs[1]}
          alt="Product Image 2"
        />
      </div>

      <h2 className="font-t">{product.name}</h2>
      <p className="font-bold flex gap-1 pb-1">
        {product.price.newPrice}$
        <span className="text-xs font-normal text-red-600  line-through">
          {product.price.oldPrice}$
        </span>
      </p>
    </div>
  );
}

ProductsSliderItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductsSliderItem;
