import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/HomePage";
import AuthPage from "./pages/users/AuthPage";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
