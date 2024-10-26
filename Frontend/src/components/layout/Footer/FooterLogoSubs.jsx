function FooterLogoSubs() {
  return (
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <div>
        <p className="text-4xl text-orange-500">FASHIONFLOW</p>
      </div>

      {/* Subscribe Form */}
      <div className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 w-64 rounded-md text-black"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default FooterLogoSubs;
