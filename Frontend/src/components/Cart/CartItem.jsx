import { Link } from "react-router-dom";
import { TiPlus, TiMinus, TiTimes } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

function CartItem() {
  return (
    <div className="flex bg-white shadow-lg p-4 rounded-lg border w-full space-x-3">
      <Link
        to={"/product/1"}
        className="flex justify-center items-center w-2/6 space-x-2"
      >
        <img
          src="/images/products/product7/1.webp"
          alt="Product"
          className=" max-h-36  object-center rounded-lg"
        />
        <h3 className=" font-semibold  max-h-36 text-center text-balance truncate w-full">
          Product Name
        </h3>
      </Link>
      <div className="w-full flex justify-between items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button className=" flex items-center justify-center py-1 bg-gray-200 hover:bg-gray-300 rounded text-xl  h-7 w-7 ">
            <TiMinus className="text-sm" />
          </button>
          <input
            type="number"
            className="w-12 h-12 text-center border rounded  appearance-none"
            // value={0}
            min="1"
            max="10"
          />
          <button className=" flex items-center justify-center py-1 bg-gray-200 hover:bg-gray-300 rounded text-xl h-7 w-7 ">
            <TiPlus className="text-sm" />
          </button>
        </div>

        <p className="text-xl font-semibold mt-2 ">497,99 $</p>

        <div className="flex justify-center items-center space-x-4">
          <button className="text-black hover:text-rose-600">
            <FaHeart className="text-2xl" />
          </button>
          <button className="text-red-500 hover:text-red-600">
            <TiTimes className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
