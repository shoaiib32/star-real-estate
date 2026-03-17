import React from "react";
import houseIcon from "../../assets/house.png";
import locationIcon from "../../assets/location.png";
import moneyIcon from "../../assets/money.png";

const Demo = () => {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvtMuglDuj6rBu_crS63RXq59ocZ757wsdA&s";

  return (
    <div id="demo" className="flex flex-col md:flex-row w-full h-screen">
      {/* LEFT: image background that fully covers the left half */}
      <div className="w-full md:w-1/2 p-0 md:p-8 relative overflow-hidden">
        {/* Background image fills the container */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Foreground content (kept readable with translucent bg) */}
        <div className="relative z-10 flex items-center justify-center h-full p-6">
          <div className="text-center bg-white/80 dark:bg-black/40 rounded-md p-6 max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Real <span className="text-amber-800">Estate</span>
            </h1>
            <p className="text-gray-700">
              Discover your dream home — modern designs, prime locations.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: info panel */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-amber-800">
        <div className="text-white max-w-lg">
          <h2 className="text-2xl font-semibold mb-2">Star Paradise</h2>
          <h3 className="text-3xl font-bold mb-6">Why Choose Our Properties?</h3>

          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <img src={houseIcon} alt="House Icon" className="w-8 h-8" />
              <span>Spacious and comfortable living spaces</span>
            </li>

            <li className="flex items-start space-x-4">
              <img src={locationIcon} alt="Location Icon" className="w-8 h-8" />
              <span>Located in prime areas with excellent infrastructure</span>
            </li>

            <li className="flex items-start space-x-4">
              <img src={moneyIcon} alt="Money Icon" className="w-8 h-8" />
              <span>Affordable prices and flexible payment plans</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;