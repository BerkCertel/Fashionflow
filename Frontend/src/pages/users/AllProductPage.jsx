import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/layout/Filter/Filter";
import { useEffect } from "react";
import { getProducts } from "../../redux/productSlice";
import Loading from "../../components/Loading/Loading";
import ProductCartItem from "../../components/ProductCart/ProductCartItem";

function AllProductPage() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <main>
      <div className="container mx-auto flex gap-3">
        <Filter />
        <div className="w-4/6">
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
        </div>
      </div>
      <div>pagination</div>
    </main>
  );
}

export default AllProductPage;
