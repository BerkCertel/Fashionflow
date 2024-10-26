import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
function CartProgress() {
  return (
    <Link
      className="text-xl flex items-center justify-center hover:underline "
      to={"/"}
    >
      <IoChevronBackOutline className="text-xl" /> Back To Shopping
    </Link>
  );
}

export default CartProgress;
