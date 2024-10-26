import Carousel from "react-multi-carousel";

function HomeBigSlider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="homepage-slider-div">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        arrows={false}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .7s"
        transitionDuration={1000}
        containerClass="carousel-container container mx-auto  w-1/2 p-3  mt-5 border rounded shadow"
        itemClass="h-full w-full object-cover mb-3 "
      >
        <div>
          <img
            className="object-cover w-full "
            src="/images/SmallSlider/slider1.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full "
            src="/images/SmallSlider/slider2.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full "
            src="/images/SmallSlider/slider3.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full "
            src="/images/SmallSlider/slider4.webp"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeBigSlider;
