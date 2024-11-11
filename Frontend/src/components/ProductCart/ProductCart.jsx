import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/productSlice";
import ProductCartItem from "./ProductCartItem";
import Loading from "../Loading/Loading";

function ProductCart() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <main className="product-cart-main-div container mx-auto border p-5 rounded-lg">
      <div className="text-5xl text-center mb-3">All Product</div>
      <hr className=" mb-5" />
      {loading ? (
        <Loading />
      ) : (
        products?.products && (
          <div className="flex justify-start  items-center  gap-5 flex-wrap  w-full">
            {products?.products?.map((product, i) => {
              return <ProductCartItem product={product} key={i} />;
            })}
          </div>
        )
      )}
    </main>
  );
}

export default ProductCart;
