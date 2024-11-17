import Carousel from "react-multi-carousel";
import ProductsSliderItem from "./ProductsSliderItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../redux/productSlice";
import Loading from "../../Loading/Loading";

function ProductsSlider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="homepage-slider-div mt-10 border-b mb-10">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h3 className="text-center text-5xl font-thin mb-4">New Season</h3>
          <hr />
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            arrows={true}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .7s"
            transitionDuration={1000}
            containerClass="carousel-container"
            itemClass="flex justify-center items-center p-10"
          >
            {products?.products?.map((product, i) => (
              <ProductsSliderItem product={product} key={i} />
            ))}
          </Carousel>
        </>
      )}
    </div>
  );
}

export default ProductsSlider;
