import Carousel from "react-multi-carousel";
import ProductsSliderItem from "./ProductsSliderItem";
import { useSelector } from "react-redux";

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

  const productsData = useSelector((state) => state.products.products);

  return (
    <div
      className="homepage-slider-div mt-10
    "
    >
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        arrows={true}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="all .7s"
        transitionDuration={1000}
        containerClass="carousel-container    "
        itemClass=" flex justify-center items-center p-10"
      >
        {productsData?.map((product) => {
          return <ProductsSliderItem key={product.id} product={product} />;
        })}
      </Carousel>
    </div>
  );
}

export default ProductsSlider;
