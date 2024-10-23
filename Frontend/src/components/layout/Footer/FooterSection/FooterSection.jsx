function FooterSection() {
  return (
    <div className="container mx-auto flex flex-wrap items-center justify-between gap-8 mt-8">
      {/* HELP Section */}
      <ul className="flex flex-col items-start flex-1">
        <li className="text-orange-500 text-xl mb-2 font-bold">HELP</li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Contact Us
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          FAQ
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Shipping Info
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Return Policy
        </li>
      </ul>

      {/* COMPANY Section */}
      <ul className="flex flex-col items-start flex-1">
        <li className="text-orange-500 text-xl mb-2 font-bold">COMPANY</li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          About Us
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Careers
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Privacy Policy
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Terms of Service
        </li>
      </ul>

      {/* SUPPORT Section */}
      <ul className="flex flex-col items-start flex-1">
        <li className="text-orange-500 text-xl mb-2 font-bold">SUPPORT</li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Order Status
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Shipping
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Returns
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Gift Cards
        </li>
      </ul>

      {/* MORE INFO Section */}
      <ul className="flex flex-col items-start flex-1">
        <li className="text-orange-500 text-xl mb-2 font-bold">MORE INFO</li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Affiliate Program
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Student Discount
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Gift Registry
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-500">
          Promotions
        </li>
      </ul>

      {/* App Download Section */}
      <ul className="flex items-center justify-center w-2/12 h-full space-x-4 flex-1">
        <img
          className="h-[36px] w-auto cursor-pointer"
          src="images/footer/ios.png"
          alt="Download on iOS"
        />
        <img
          className="h-[36px] w-auto cursor-pointer"
          src="images/footer/google-play.png"
          alt="Get it on Google Play"
        />
      </ul>
    </div>
  );
}

export default FooterSection;
