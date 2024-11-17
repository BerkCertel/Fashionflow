import { FaStar } from "react-icons/fa";
import { HiArrowSmDown } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";
import GalleryItem from "./GalleryItem";

function Gallery({ product }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="product-img-div flex  flex-col w-2/6 space-y-3 top-1  ">
      <div className="w-full h-full relative">
        <small className="absolute z-30 top-12 right-3 flex justify-center items-center text-white rounded-lg p-1 bg-yellow-600 ">
          <FaStar className="size-3 mr-1" />
          {product?.product?.rating}
        </small>

        <small className="absolute z-30 top-4 right-3 flex justify-center items-center text-white rounded-lg p-1 bg-red-600">
          <HiArrowSmDown className="size-4" />%
          {product?.product?.price?.discount}
        </small>
        <img
          className="max-h-[650px] object-cover bg-center rounded-lg border border-black shadow"
          src={product?.product?.images[0]}
          alt=""
        />
      </div>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        arrows={true}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .7s"
        transitionDuration={1000}
        containerClass="carousel-container   "
        itemClass=" flex justify-center items-center p-5  "
      >
        {product?.product?.images.map((image, index) => (
          <GalleryItem key={index} image={image} />
        ))}
      </Carousel>
    </div>
  );
}

Gallery.propTypes = {
  product: PropTypes.object,
};

export default Gallery;
