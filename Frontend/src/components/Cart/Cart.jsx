import CartTotal from "./CartTotal";
import CartProgress from "./CartProgress";
import CartItem from "./CartItem";

function Cart() {
  return (
    <section className=" container mx-auto w-full h-full  p-10 ">
      <div className="flex justify-center items-center flex-col space-y-6">
        <div className="w-full flex justify-center items-center flex-col">
          <h2 className=" text-6xl">Your Cart</h2>
          <hr className="w-full mt-3" />
        </div>

        <div className="cart-progress  flex justify-start items-center w-full  ">
          <CartProgress />
        </div>
        <div className="w-full h-full flex space-x-5">
          {/* Product Cart Area */}
          <div className="card-main-div w-full lg:w-4/6 ">
            <div className="flex  gap-4  flex-col">
              {/* Product Card */}
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>

          {/* Summary Area */}
          <div className="w-full  max-h-max lg:w-2/6 bg-orange-500 text-white p-6 rounded-lg  shadow-2xl">
            <CartTotal />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
