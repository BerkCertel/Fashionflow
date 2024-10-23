import Carousel from "react-multi-carousel";

function Gallery() {
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
    <div className="product-img-div flex flex-col w-2/6 space-y-3 ">
      <div className="w-full h-full">
        <img
          className="max-h-[650px] object-cover bg-center rounded"
          src="/images/products/product7/1.webp"
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
        containerClass="carousel-container    "
        itemClass=" flex justify-center items-center p-5"
      >
        <div>
          <img
            className="rounded"
            src="/images/products/product7/1.webp"
            alt=""
          />
        </div>
        <div>
          <img src="/images/products/product7/2.webp" alt="" />
        </div>
        <div>
          <img src="/images/products/product7/3.webp" alt="" />
        </div>
        <div>
          <img src="/images/products/product7/4.webp" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Gallery;
