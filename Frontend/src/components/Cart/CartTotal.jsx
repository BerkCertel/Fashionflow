import { Link } from "react-router-dom";

function CartTotal() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-gray-700">Summary</h3>
        <p className="text-gray-500">Sum of Products (1 item)</p>
      </div>

      <hr className="mb-4 mt-1 border-gray-300" />

      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <p className="font-thin">Sub Total</p>
          <p className="text-lg font-thin">497,99 $</p>
        </div>
        <div className="flex justify-between">
          <p className="font-thin">Free Shipping</p>
          <p className="text-lg font-thin">-0,00 $</p>
        </div>
        <div className="flex justify-between">
          <p className="font-thin text-red-600">Total Discount</p>
          <p className="text-lg font-thin text-red-600">-0,00 $</p>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="promo-code" className="block mb-2 text-gray-600">
          Promotion Code
        </label>
        <div className="flex">
          <input
            type="text"
            id="promo-code"
            className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-l-lg border border-gray-300 focus:outline-none focus:border-orange-400"
            placeholder="Enter code"
          />
          <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-r-lg hover:bg-orange-600 transition border-l">
            Apply
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-300 mt-6 pt-4" />

      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <p className="text-lg font-bold">497,99 $</p>
        </div>
      </div>

      <Link
        to={"/checkout"}
        className="block text-center w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
      >
        CHECKOUT
      </Link>
    </div>
  );
}

export default CartTotal;
