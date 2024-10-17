function Categories() {
  return (
    <div className="category-main-div flex flex-wrap justify-center items-center mb-5 mt-10 gap-5">
      <div className="flex flex-col justify-center items-center p-2 rounded-xl border-2 cursor-pointer shadow-2xl hover:shadow-orange-400 ">
        <img
          className="object-cover category-img rounded"
          src="/images/categories/categories1.png"
          alt="T-shirt"
        />
        <h2 className="text-center">T-shirt</h2>
      </div>

      <div className="flex flex-col justify-center items-center p-2 rounded-xl border-2 cursor-pointer shadow-2xl hover:shadow-orange-400 ">
        <img
          className="object-cover category-img"
          src="/images/categories/categories2.png"
          alt="Jean"
        />
        <h2 className="text-center">Jean</h2>
      </div>

      <div className="flex flex-col justify-center items-center p-2 rounded-xl border-2 cursor-pointer shadow-2xl hover:shadow-orange-400 ">
        <img
          className="object-cover category-img"
          src="/images/categories/categories3.png"
          alt="Shoes"
        />
        <h2 className="text-center">Shoes</h2>
      </div>

      <div className="flex flex-col justify-center items-center p-2 rounded-xl border-2 cursor-pointer shadow-2xl hover:shadow-orange-400 ">
        <img
          className="object-cover category-img"
          src="/images/categories/categories4.png"
          alt="Shirt"
        />
        <h2 className="text-center">Shirt</h2>
      </div>

      <div className="flex flex-col justify-center items-center p-2 rounded-xl border-2 cursor-pointer shadow-2xl hover:shadow-orange-400 ">
        <img
          className="object-cover category-img"
          src="/images/categories/categories5.png"
          alt="Dress"
        />
        <h2 className="text-center">Dress</h2>
      </div>

      <div className="flex flex-col justify-center items-center p-2 rounded-xl border-2 cursor-pointer shadow-2xl hover:shadow-orange-400 ">
        <img
          className="object-cover category-img"
          src="/images/categories/categories6.png"
          alt="Another Category"
        />
        <h2 className="text-center">Another Category</h2>
      </div>
    </div>
  );
}

export default Categories;
