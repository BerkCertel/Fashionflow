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
        autoPlay={false}
        autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="all .7s"
        transitionDuration={1000}
        containerClass="carousel-container border-b-2 border-orange-500"
        itemClass="max-h-[605px] w-full object-cover"
      >
        <div className="relative">
          <div className="absolute top-28 left-10 md:left-1/4 lg:left-1/4 p-3 rounded font-thin justify-center w-3/4 md:w-1/2 bg-black bg-opacity-30 text-white">
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
            className="object-cover w-full h-[605px] md:h-[500px] lg:h-full"
            src="/images/slider/slider3.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="absolute p-3 rounded font-thin text-center bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-30 w-3/4 md:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Everything You Need for Everyday Style!
            </h2>
            <p>
              Looking for comfortable yet stylish everyday outfits? You’ve come
              to the right place! Explore combinations that blend comfort with
              elegance.
            </p>
          </div>
          <img
            className="object-cover w-full h-[605px] md:h-[500px] lg:h-full"
            src="/images/slider/slider6.jpg"
            alt=""
          />
        </div>

        <div>
          <div className="absolute p-3 rounded-xl top-36 left-10 md:left-1/4 lg:left-1/4 w-3/4 md:w-2/4 bg-black bg-opacity-30 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
              Everything You Need for Everyday Style!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui
              repellat reprehenderit. Omnis eos cupiditate deserunt, nulla
              reiciendis suscipit debitis rerum error facere perspiciatis porro
              quam iste beatae soluta, voluptatem maxime, ex esse rem quis eius
              alias in? Voluptatibus sed totam fugiat quas delectus dicta
              dolorum hic mollitia recusandae dolorem.
            </p>
          </div>
          <img
            className="object-cover w-full h-[605px] md:h-[500px] lg:h-full"
            src="/images/slider/slider5.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="object-cover w-full h-[605px] md:h-[500px] lg:h-full"
            src="/images/slider/slider2.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeBigSlider;
