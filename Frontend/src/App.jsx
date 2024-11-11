import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/HomePage";
import ContactPage from "./pages/users/ContactPage";
import AuthPage from "./pages/users/AuthPage";
import AllBlogsPage from "./pages/users/AllBlogPage";
import BlogDetailPage from "./pages/users/BlogDetailPage";
import ProductDetailsPage from "./pages/users/ProductDetailsPage";
import CartPage from "./pages/users/CartPage";
import FavoritesPage from "./pages/users/FavoritesPage";
import AllProductPage from "./pages/users/AllProductPage";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products" element={<AllProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/blogs" element={<AllBlogsPage />} />
      <Route path="/blogs/:id" element={<BlogDetailPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </Routes>
  );
}

export default App;
