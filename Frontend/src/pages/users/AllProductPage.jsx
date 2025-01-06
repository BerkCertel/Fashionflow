import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/productSlice";
import Filter from "../../components/layout/Filter/Filter";
import Loading from "../../components/Loading/Loading";
import ProductCartItem from "../../components/ProductCart/ProductCartItem";
import { useState } from "react";

function AllProductPage() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);
  const { keyword } = useSelector((state) => state.general);

  const [price, setPrice] = useState({ min: 0, max: 30000 });
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState();

  useEffect(() => {
    dispatch(getProducts({ keyword, price, rating, category }));
  }, [dispatch, keyword, price, rating, category]);

  console.log(products);

  return (
    <main className="container mx-auto">
      <div className=" flex gap-4 p-5">
        <Filter
          setPrice={setPrice}
          setRating={setRating}
          setCategory={setCategory}
        />
        <div className="w-5/6">
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

      <div className="w-3/4 h-full flex items-center justify-end mt-2">
        pagination
      </div>
    </main>
  );
}

export default AllProductPage;
