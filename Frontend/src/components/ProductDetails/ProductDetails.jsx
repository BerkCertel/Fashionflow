import Gallery from "./Gallery";
import { BsShare } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import Accordion from "./Accordion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/productSlice";
import Loading from "../Loading/Loading";
import Button from "./Button";
import { FaPlus, FaMinus } from "react-icons/fa";

function ProductDetails() {
  // Details Fetch
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);

  // Quantity
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < product?.product?.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  //Add to cart
  const addBasket = () => {};

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="container mx-auto product-detail-main w-full min-h-screen flex items-center justify-center p-20 border m-10 shadow-2xl rounded-lg">
          <div className="flex h-full w-full space-x-10 items-start justify-start">
            <Gallery product={product} />

            <div className="w-4/6 h-full  flex justify-center items-center flex-col space-y-5">
              <div className="flex items-center justify-between w-full">
                <p className="font-mono text-4xl">{product?.product?.name}</p>

                <div
                  className={`text-lg font-thin  text-white rounded-lg border shadow bg-orange-500 px-8 py-2 ${
                    product?.product?.stock > 10
                      ? `bg-orange-500`
                      : `bg-red-500`
                  }`}
                >
                  Stock: {product?.product?.stock}
                </div>
              </div>

              <hr className="w-full" />

              <div className="w-full flex items-center justify-between">
                <div className="w-1/6">
                  {product?.product?.isNewSeason && (
                    <div className="bg-red-600 text-white p-1 rounded-lg px-2 py-2 ">
                      New Season!
                    </div>
                  )}
                </div>
                <div className="w-4/6 flex justify-center items-center space-x-2">
                  <p className="text-4xl">
                    {Number(product?.product?.price?.current).toFixed(2)}$
                  </p>
                  <small className="text-base text-red-600 line-through ">
                    %{Number(product?.product?.price?.discount).toFixed(2)}
                  </small>
                </div>
                <div className="flex space-x-4 items-center justify-end w-1/6">
                  <FaHeart className="bg-orange-500 text-4xl text-white p-2 rounded hover:text-black cursor-pointer transition duration-300" />
                  <BsShare className="bg-orange-500 text-4xl text-white p-2 rounded hover:text-black cursor-pointer transition duration-300" />
                </div>
              </div>

              <hr className="w-full" />

              <p className="font-thin w-full text-start">
                {product?.product?.description}
              </p>

              <div className="flex w-full space-x-2 items-center">
                <div className="w-1/6 flex items-center justify-around gap-2">
                  <div
                    onClick={decrement}
                    className="bg-slate-300 p-2 cursor-pointer hover:opacity-75"
                  >
                    <FaMinus />
                  </div>
                  <div className="border px-4 py-1">{quantity}</div>
                  <div
                    onClick={increment}
                    className="bg-slate-300 p-2 cursor-pointer hover:opacity-75"
                  >
                    <FaPlus />
                  </div>
                </div>

                <Button
                  name={"Add To Basket"}
                  onClick={addBasket}
                  product={product}
                />
              </div>

              <div className="product-details-accordion-div  w-full  ">
                <Accordion product={product} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetails;
