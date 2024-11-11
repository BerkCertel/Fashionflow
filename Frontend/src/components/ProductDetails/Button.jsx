import PropTypes from "prop-types";
function Button({ product, name, onClick }) {
  return (
    <button
      className={`bg-orange-500 w-5/6 rounded text-lg text-white hover:opacity-80 p-2 ${
        product?.product?.stock > 0
          ? " bg-orange-500 cursor-pointer "
          : "bg-red-500 cursor-not-allowed"
      }`}
      disabled={product?.product?.stock == 0}
      onClick={onClick}
    >
      {product?.product?.stock == 0 ? "Out of Sock" : `${name}`}
    </button>
  );
}

Button.propTypes = {
  product: PropTypes.object,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
