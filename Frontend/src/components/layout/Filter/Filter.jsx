function Filter() {
  const categoryList = ["Outerwear", "Skirt", "Pants", "T-Shirt", "Dress"];
  const ratingList = [1, 2, 3, 4, 5];

  return (
    <div className="w-1/6 border p-3 space-y-2 rounded-lg shadow-xl h-full">
      <div className="text-center uppercase text-lg font-semibold border-b">
        Filter
      </div>
      <div className="flex items-center gap-2 w-full">
        <input
          className="border outline-none px-1 w-24 rounded"
          type="number"
          placeholder="Min"
          min={0}
        />
        <input
          className="border rounded  outline-none px-1 w-24"
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

export default Filter;
