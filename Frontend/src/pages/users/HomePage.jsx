import Blogs from "../../components/Blogs/Blogs";
import Categories from "../../components/Categories/Categories";
import ProductCart from "../../components/ProductCart/ProductCart";
import SingleCampaign from "../../components/SingleCampaign/SingleCampaign";
import HomeBigSlider from "../../components/Sliders/HomeBigSlider/HomeBigSlider";
import ProductsSlider from "../../components/Sliders/ProductsSlider/ProductsSlider";

function HomePage() {
  return (
    <main className="home-page-main-div">
      <HomeBigSlider />
      <Categories />
      <ProductCart />
      <ProductsSlider />
      <SingleCampaign />
      <ProductsSlider />
      <Blogs />
    </main>
  );
}

export default HomePage;
