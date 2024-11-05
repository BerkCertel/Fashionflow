import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Accordion() {
  const [isOpenDetails, setIsOpenDetails] = useState(true);
  const [isOpenSizes, setIsOpenSizes] = useState(true);
  const [isOpenFeature, setIsOpenFeature] = useState(false);

  return (
    <div>
      <div className="w-full mx-auto bg-white  shadow-md overflow-hidden ">
        <div
          className="bg-orange-500 text-white p-4 cursor-pointer flex justify-between items-center border  "
          onClick={() => setIsOpenDetails(!isOpenDetails)}
        >
          <h3 className="text-lg font-semibold">Product Detail</h3>
          <IoIosArrowForward
            className={`text-2xl transition-all duration-500 ${
              isOpenDetails ? "rotate-90" : "rotate-0"
            }`}
          />
        </div>
        {isOpenDetails && (
          <div className="p-4 text-gray-700 animate__animated animate__fadeIn ">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              voluptatem aliquam quibusdam temporibus ipsam commodi perspiciatis
              reiciendis odit doloremque repudiandae incidunt corporis quia
              assumenda non earum magni culpa doloribus, ipsa, exercitationem
              suscipit? Qui, itaque saepe perspiciatis amet maxime ducimus
              voluptatem fugit, sequi similique nemo veniam accusamus labore
              repudiandae tempora ipsam?
            </p>
          </div>
        )}
      </div>
      <div className="w-full mx-auto bg-white  shadow-md overflow-hidden border">
        <div
          className="bg-orange-500 text-white p-4 cursor-pointer flex justify-between items-center"
          onClick={() => setIsOpenFeature(!isOpenFeature)}
        >
          <h3 className="text-lg font-semibold">Product Details</h3>
          <IoIosArrowForward
            className={`text-2xl transition-all duration-500 ${
              isOpenFeature ? "rotate-90" : "rotate-0"
            }`}
          />
        </div>
        {isOpenFeature && (
          <div className="p-4 bg-white border rounded-lg">
            <div className="mb-4">
              <h3 className="font-bold text-lg">Modelin Ölçüleri</h3>
              <p className="text-gray-600">
                Boy: <span className="font-semibold">177 cm</span> / Bel:
                <span className="font-semibold">S</span> / Göğüs:
                <span className="font-semibold">82 cm</span> / Kalça:
                <span className="font-semibold">89 cm</span>
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-lg">Modelin Bedeni</h3>
              <p className="text-gray-600">
                Jean: <span className="font-semibold">27/32</span> / Üst:
                <span className="font-semibold">S</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div className="flex justify-between">
                <span className="font-bold">Kumaş:</span>
                <span>%100 POLİESTER</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Kol Boyu:</span>
                <span>Uzun Kol</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Kol Tipi:</span>
                <span>Balon Kol</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Stil:</span> <span>Klasik</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Yaka Tipi:</span>
                <span>Kruvaze Yaka</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Astar:</span>
                <span>%100 POLİESTER</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Silüet:</span> <span>Klasik</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Ürün Tipi/Stil:</span>
                <span>Klasik</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full mx-auto bg-white  shadow-md overflow-hidden">
        <div
          className="bg-orange-500 text-white p-4 cursor-pointer flex justify-between items-center border"
          onClick={() => setIsOpenSizes(!isOpenSizes)}
        >
          <h3 className="text-lg font-semibold">Product Detail</h3>
          <IoIosArrowForward
            className={`text-2xl transition-all duration-500 ${
              isOpenSizes ? "rotate-90" : "rotate-0"
            }`}
          />
        </div>
        {isOpenSizes && (
          <div className="p-4 text-gray-700 ">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              voluptatem aliquam quibusdam temporibus ipsam commodi perspiciatis
              reiciendis odit doloremque repudiandae incidunt corporis quia
              assumenda non earum magni culpa doloribus, ipsa, exercitationem
              suscipit? Qui, itaque saepe perspiciatis amet maxime ducimus
              voluptatem fugit, sequi similique nemo veniam accusamus labore
              repudiandae tempora ipsam?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
