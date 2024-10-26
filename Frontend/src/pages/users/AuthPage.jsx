import { useState } from "react";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import "animate.css"; // Eğer npm ile yüklediyseniz

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex flex-col items-center">
      <div className="mx-auto container flex justify-center items-center space-x-5 bg-orange-500 w-1/3 mt-5 p-2 rounded-lg relative">
        <div
          onClick={() => setIsLogin(true)}
          className={`w-full text-center cursor-pointer p-2 rounded-lg transition-all duration-500 ease-in-out ${
            isLogin
              ? "bg-white text-orange-500 shadow-lg"
              : "bg-transparent text-white"
          }`}
        >
          Login
        </div>
        <div
          onClick={() => setIsLogin(false)}
          className={`w-full text-center cursor-pointer p-2 rounded-lg transition-all duration-500 ease-in-out ${
            !isLogin
              ? "bg-white text-orange-500 shadow-lg"
              : "bg-transparent text-white"
          }`}
        >
          Register
        </div>
      </div>

      <div className=" mt-5">
        {/* Login Bileşeni */}
        <div
          className={` w-full h-full transition-transform duration-700 ease-in-out ${
            isLogin
              ? "animate__animated animate__fadeIn"
              : "animate__animated animate__fadeOut"
          }`}
          style={{ display: isLogin ? "block" : "none" }}
        >
          <Login setIsLogin={setIsLogin} />
        </div>

        {/* Register Bileşeni */}
        <div
          className={` w-full h-full transition-transform duration-700  ease-in-out ${
            !isLogin
              ? "animate__animated animate__fadeIn"
              : "animate__animated animate__fadeOut"
          }`}
          style={{ display: !isLogin ? "block" : "none" }}
        >
          <Register setIsLogin={setIsLogin} />
        </div>
      </div>
    </main>
  );
}

export default AuthPage;
