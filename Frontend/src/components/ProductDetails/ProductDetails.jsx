import Gallery from "./Gallery/Gallery";
import { BsShare } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import Accordion from "./Accordion/Accordion";

function ProductDetails() {
  return (
    <section className="container mx-auto product-detail-main w-full h-full p-20">
      <div className="flex h-full w-full space-x-10">
        <Gallery />

        <div className="w-4/6 h-full  flex justify-center items-center flex-col space-y-5">
          <h2 className="text-center text-5xl font-thin">Product Name</h2>
          <hr className="w-1/2 " />

          <div className="flex items-center justify-between w-full ">
            <div className="space-x-3 flex w-full">
              <p className="font-semibold text-5xl">100.00 $</p>
              <div className="flex flex-col">
                <small className="text-red-600 text-2xl">%33.33</small>
                <small className="text-red-600  line-through">150.00 $</small>
              </div>
            </div>
            <div className="flex space-x-4 items-center justify-end w-full">
              <FaHeart className="bg-orange-500 text-4xl text-white p-2 rounded hover:text-black cursor-pointer" />
              <BsShare className="bg-orange-500 text-4xl text-white p-2 rounded hover:text-black cursor-pointer" />
            </div>
          </div>

          <div className="flex w-full space-x-2 ">
            <select
              className="w-1/6 text-center border rounded border-black"
              name="quantity"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Chose
              </option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <button className="bg-orange-500 w-5/6 rounded  text-lg text-white hover:opacity-80 p-2">
              Add To Cart
            </button>
          </div>

          <div className="product-details-accordion-div  w-full  ">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
