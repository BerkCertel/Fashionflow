import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

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
        showDots={false}
        arrows={true}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .7s"
        transitionDuration={1000}
        containerClass="carousel-container border-b-2 border-orange-500"
        itemClass="max-h-[815px] w-full object-cover"
      >
        <div className="relative">
          <div className="absolute top-20 right-24  md:left-1/4 lg:left-1/4 p-3 rounded font-thin  w-3/4 md:w-1/2 bg-black bg-opacity-30 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Embrace the Warmth of Summer!
            </h2>
            <p>
              Discover our exclusive summer collection featuring lightweight and
              vibrant pieces. Perfect for beach days and sunny outings!
            </p>
            <Link to="/">
              <button className="p-3 rounded text-white font-bold bg-black mt-5 hover:bg-transparent hover:text-black transition-all ease-in duration-300 border border-black">
                Check it out!
              </button>
            </Link>
          </div>
          <img
            className="object-cover w-full "
            src="/images/BigSlider/slider1.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="object-cover w-full  "
            src="/images/BigSlider/slider2.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="object-cover inset-0 h-full w-full "
            src="/images/BigSlider/slider3.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeBigSlider;
