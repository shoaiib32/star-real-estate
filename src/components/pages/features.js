import React from "react";

const Features = () => {
  return (
    <section id="feature" className="w-full py-12 bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Feature <span className="text-amber-800">Properties</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">Here are some of our featured properties:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="shadow-md hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvtMuglDuj6rBu_crS63RXq59ocZ757wsdA&s"
                alt="Property"
                className="w-full h-64 object-cover"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Star Galaxy Heights</h3>
                <p className="text-sm text-gray-500">3 bd | 2 ba | 1,500 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4">₹50,00,000</p>
                <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-md hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5RbszmrVtvQ_C9yEB_xcckxYyDO_2CU0Vg&s"
                alt="Property"
                className="w-full h-64 object-cover"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Star Sky Park</h3>
                <p className="text-sm text-gray-500">4 bd | 3 ba | 2,000 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4">₹75,00,000</p>
                <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-md hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.raysonsconstructions.com/krystal-tower/krystal-tower-nagala-park-kolhapur-07.jpg"
                alt="Property"
                className="w-full h-64 object-cover"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Star Crystal Avenue</h3>
                <p className="text-sm text-gray-500">2 bd | 1 ba | 1,000 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4">₹30,00,000</p>
                <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;