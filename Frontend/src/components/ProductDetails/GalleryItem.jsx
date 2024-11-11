import PropTypes from "prop-types";

function GalleryItem({ image }) {
  return (
    <div className="">
      <img
        className="rounded cursor-pointer border border-black "
        src={image}
        alt=""
      />
    </div>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.string,
};

export default GalleryItem;
