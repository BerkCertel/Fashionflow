function SingleCampaign() {
  return (
    <div className="w-full h-[650px] relative">
      <img
        className="object-cover bg-center h-full w-full"
        src="../../../public/images/single-campaign.png"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          New Season Collection
        </h2>
        <p className="text-lg text-center mb-4">
          Discover the latest products that are perfect for every occasion!
        </p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded transition-all duration-300 hover:bg-transparent hover:text-orange-500 border border-orange-500">
          View Products
        </button>
      </div>
    </div>
  );
}

export default SingleCampaign;
