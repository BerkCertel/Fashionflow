import Gallery from "./Gallery";
import { BsShare } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import Accordion from "./Accordion";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <section className="container mx-auto product-detail-main w-full h-full p-20 border m-10 shadow-2xl rounded-lg ">
      <div className="flex h-full w-full space-x-10 items-start justify-start">
        <Gallery />

        <div className="w-4/6 h-full  flex justify-center items-center flex-col space-y-5">
          <hr className="w-full" />

          <div className="w-full flex items-center justify-between">
            <div className="w-3/6">
              <p>Product Name</p>
            </div>
            <div className="w-2/6 flex justify-cenceter items-center space-x-2">
              <p className="text-4xl">$100.00</p>
              <small className="text-xs ">$150.00</small>
            </div>
            <div className="flex space-x-4 items-center justify-end w-1/6">
              <FaHeart className="bg-orange-500 text-4xl text-white p-2 rounded hover:text-black cursor-pointer transition duration-300" />
              <BsShare className="bg-orange-500 text-4xl text-white p-2 rounded hover:text-black cursor-pointer transition duration-300" />
            </div>
          </div>

          <hr className="w-full" />

          <div>
            <h2 className="text-3xl">Prodcut Detail</h2>
            <hr className="w-1/4 mb-1 mt-1" />
            <p className="font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              veritatis unde, consequuntur voluptatum nihil quaerat neque,
              inventore corporis sint provident possimus laboriosam, eveniet
              laborum distinctio repellat modi. Necessitatibus culpa veniam unde
              temporibus doloribus vel, voluptatibus hic quod nemo, ab similique
              earum est corrupti quo laudantium assumenda itaque soluta facilis
              explicabo.
            </p>
          </div>

          <div className="flex w-full space-x-2 items-center">
            <button
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleDecrease}
            >
              <FaMinus />
            </button>
            <input
              type="number"
              className="w-1/6 text-center border rounded border-black py-2"
              value={quantity}
              onChange={(e) => {
                const value = Math.max(1, Math.min(10, Number(e.target.value)));
                setQuantity(value);
              }}
              min="1"
              max="10"
            />
            <button
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleIncrease}
            >
              <FaPlus />
            </button>
            <button className="bg-orange-500 w-5/6 rounded text-lg text-white hover:opacity-80 p-2">
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
