import PropTypes from "prop-types";

function Filter({ setPrice, setRating, setCategory }) {
  const categoryList = ["Giyim", "Bilgisayar", "Çanta"];
  const ratingList = [1, 2, 3, 4, 5];

  return (
    <div className="w-1/6 border p-3 space-y-2 rounded-lg shadow-xl h-full">
      <div className="text-center uppercase text-lg font-semibold border-b">
        Filter
      </div>
      <div className="flex items-center gap-2 w-full">
        <input
          onChange={(e) =>
            setPrice((prev) => ({ ...prev, min: e.target.value }))
          }
          className="border outline-orange-500 p-1 w-1/2 rounded"
          type="number"
          placeholder="Min"
          min={0}
        />
        <input
          onChange={(e) =>
            setPrice((prev) => ({ ...prev, max: e.target.value }))
          }
          className="border rounded  outline-orange-500 p-1 w-1/2"
          type="number"
          placeholder="Max"
          min={1}
        />
      </div>

      <div className="flex flex-col space-y-1">
        <p className="text-center text-lg border-b mb-2 uppercase font-semibold">
          Category
        </p>
        {categoryList.map((category, i) => {
          return (
            <div
              onClick={() => setCategory(category)}
              className="text-white bg-orange-500 rounded px-2 py-1 cursor-pointer hover:opacity-70"
              key={i}
            >
              • {category}
            </div>
          );
        })}
      </div>

      <div>
        <p className=" mb-2 text-center text-lg border-b uppercase font-semibold">
          Rating
        </p>
        <div className="flex items-center  justify-around">
          {ratingList.map((rating, i) => {
            return (
              <div
                onClick={() => setRating(rating)}
                className="text-white bg-orange-500 rounded-full px-2 cursor-pointer hover:opacity-70"
                key={i}
              >
                {rating}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Filter.propTypes = {
  setRating: PropTypes.func,
  setPrice: PropTypes.func,
  setCategory: PropTypes.func,
};

export default Filter;
