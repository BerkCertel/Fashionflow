import Categories from "../../components/Categories/Categories";
import HomeBigSlider from "../../components/Sliders/HomeBigSlider/HomeBigSlider";
import ProductsSlider from "../../components/Sliders/ProductsSlider/ProductsSlider";

function HomePage() {
  return (
    <div className="home-page-main-div">
      <HomeBigSlider />
      <Categories />
      <ProductsSlider />
    </div>
  );
}

export default HomePage;
