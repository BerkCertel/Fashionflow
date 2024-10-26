import { MdOutlineRestartAlt } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";

function FooterIcons() {
  return (
    <div className="footer-icons-main-div w-full h-full bg-orange-500   p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-2">
          <CiDeliveryTruck className="footer-icon" />
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold uppercase">Free Cargo</h2>
            <p>Free shipping on orders over $100</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <MdOutlineRestartAlt className="footer-icon" />
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold uppercase">15 Days Return</h2>
            <p>Simply return it within 15 days</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <BiSupport className="footer-icon" />
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold uppercase">Online Support</h2>
            <p>Online 24 hours support</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <FaRegCreditCard className="footer-icon" />
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold uppercase">Payment Method</h2>
            <p>Secure Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterIcons;
