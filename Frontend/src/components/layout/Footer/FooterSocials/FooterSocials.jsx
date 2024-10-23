import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function FooterSocials() {
  return (
    <div className="container mx-auto flex justify-start items-start  w-2/4 flex-col gap-5">
      <div className=" flex   h-1/4 w-full gap-6 items-center justify-center flex-col">
        <div className="flex justify-center items-center space-x-4">
          <span className="text-5xl text-center">~</span>
          <h2 className="text-orange-500 text-3xl ">SOCIALS</h2>
          <span className="text-5xl text-center">~</span>
        </div>
        <ul className="flex space-x-4 justify-center items-start h-full">
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-orange-500 transition duration-300 text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white hover:text-orange-500 transition duration-300 text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white hover:text-orange-500 transition duration-300 text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-orange-500 transition duration-300 text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white hover:text-orange-500 transition duration-300 text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center  h-3/4 w-full">
        <p className="text-xl text-gray-400">
          Stay updated with our latest offers and news!
        </p>
      </div>
    </div>
  );
}

export default FooterSocials;
