import Categories from "../../components/Categories/Categories";
import SingleCampaign from "../../components/SingleCampaign/SingleCampaign";
import HomeBigSlider from "../../components/Sliders/HomeBigSlider/HomeBigSlider";
import ProductsSlider from "../../components/Sliders/ProductsSlider/ProductsSlider";

function HomePage() {
  return (
    <div className="home-page-main-div">
      <HomeBigSlider />
      <Categories />
      <ProductsSlider />
      <SingleCampaign />
      <ProductsSlider />
    </div>
  );
}

export default HomePage;
