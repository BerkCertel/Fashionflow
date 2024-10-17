function FooterSection() {
  return (
    <div className="container mx-auto flex items-start justify-between  gap-8 mt-8">
      {/* HELP Section */}
      <ul className="flex flex-col items-start w-3/12">
        <h2 className="text-orange-500 text-xl mb-2">HELP</h2>
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
      <ul className="flex flex-col items-start w-3/12">
        <h2 className="text-orange-500   text-xl mb-2">COMPANY</h2>
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

      {/* New Section 1 */}
      <ul className="flex flex-col items-start w-3/12">
        <h2 className="text-orange-500  text-xl mb-2">SUPPORT</h2>
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

      {/* New Section 2 */}
      <ul className="flex flex-col items-start w-3/12">
        <h2 className="text-orange-500  text-xl mb-2">MORE INFO</h2>
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
    </div>
  );
}

export default FooterSection;
