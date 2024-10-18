import PropTypes from "prop-types";
import { IoIosCloseCircleOutline } from "react-icons/io";

function ModalDialog({ isDialogShow, setIsDialogShow }) {
  const handleCloseDialog = (event) => {
    const checked = event.target.checked;
    localStorage.setItem("dialog", JSON.stringify(!checked));
    setIsDialogShow(false);
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center bg-black bg-opacity-50 ${
        isDialogShow ? "fixed z-20" : "hidden"
      }`}
      onClick={() => setIsDialogShow(false)}
    >
      <div
        className="bg-orange-500 p-4 rounded-lg w-2/3 h-2/3 shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Modal dışına tıklamayı engelle
      >
        <IoIosCloseCircleOutline
          className="text-3xl absolute top-2 right-2 cursor-pointer hover:text-white duration-500"
          onClick={() => setIsDialogShow(false)}
        />
        <div className="flex w-full h-full">
          <div className="w-2/6 h-full">
            <img
              className="w-full h-full object-cover bg-center rounded"
              src="/images/modal-dialog.jpg"
              alt="Modal Görseli"
            />
          </div>
          <div className="w-4/6 p-4 space-y-4">
            <h2 className="text-white text-5xl font-bold mb-4 text-center">
              Don’t Miss Our 20% Discount!
            </h2>
            <p className="text-white text-center">
              Sign up now to receive exclusive discount offers and updates on
              our latest collections.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <input
                type="email"
                className="w-3/4 p-2 rounded text-black"
                placeholder="Enter your email address"
                autoComplete="email"
              />
              <button className="btn btn-primary w-1/4 h-full p-2 text-center text-light border rounded">
                Subscribe
              </button>
            </div>
            <div className="form-check mt-3 text-center">
              <input type="checkbox" onClick={handleCloseDialog} />
              <label className="text-white ml-2">Don’t show this again</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalDialog.propTypes = {
  setIsDialogShow: PropTypes.func.isRequired,
  isDialogShow: PropTypes.bool.isRequired,
};

export default ModalDialog;
