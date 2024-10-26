import { Link } from "react-router-dom";

function FavTotal() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-gray-700">Summary</h3>
        <p className="text-gray-500">Sum of Products (1 item)</p>
      </div>

      <hr className="mb-4 mt-1 border-gray-300" />

      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <p className="font-thin"> Sub Total</p>
          <p className="text-lg font-thin">197,99 $</p>
        </div>
      </div>

      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <p className="font-thin text-red-600">Total Discount</p>
          <p className="text-lg font-thin text-red-600 ">-197,99 $</p>
        </div>
      </div>

      <hr className="mb-4 mt-1 border-gray-300" />

      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <p className="font-bold text-lg">Total</p>
          <p className="text-lg font-bold">197,99 $</p>
        </div>
      </div>

      <Link
        to={"/cart"}
        className="block text-center w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Go To Cart
      </Link>
    </div>
  );
}

export default FavTotal;
