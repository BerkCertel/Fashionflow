import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/productSlice";
import Blogs from "../../components/Blogs/Blogs";
import Categories from "../../components/Categories/Categories";
import SingleCampaign from "../../components/SingleCampaign/SingleCampaign";
import HomeBigSlider from "../../components/Sliders/HomeBigSlider/HomeBigSlider";
import ProductsSlider from "../../components/Sliders/ProductsSlider/ProductsSlider";

function HomePage() {
  // const dispatch = useDispatch;

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  return (
    <main className="home-page-main-div">
      <HomeBigSlider />
      <Categories />
      <ProductsSlider />
      <SingleCampaign />
      <ProductsSlider />

      <Blogs />
    </main>
  );
}

export default HomePage;
