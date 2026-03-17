import React from 'react';

import Imagee from "../../assets/service1.png";
import Imageee from "../../assets/service2.png";
import Imageeee from "../../assets/service3.png";
const OurServices = () => {
  return (
    <div id="service" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Our  <span className="text-amber-800">Services</span></h2>
    <p className="text-lg text-gray-700 mb-8">
        We offer many services for our clients, Here are some of our services:
      </p>


        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
          
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imagee} alt="Service 1" />
                <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Premium Homes</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">Star Paradise offers 23 thoughtfully designed luxury homes built with modern architecture and quality materials. Each apartment is planned to provide maximum space, ventilation, and natural light for a comfortable lifestyle.</p>
                  <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  Learn More
                </button>
                </div>
              </div>
            </div>

          
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imageee} alt="Service 2" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Prime Location Advantage</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">Prime Location Advantage
Located in the prime area of Nalasopara West, Yashwant Gaurav, the project offers excellent connectivity to schools, markets, transport, and daily essentials, making everyday living convenient and stress-free..</p>
                  <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  Learn More
                </button>
                </div>
              </div>
            </div>

           
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imageeee} alt="Service 3" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Easy Buying Assistance</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We provide complete support throughout your home buying journey including site visit assistance, project information, documentation guidance, and booking support to make your purchase smooth and hassle-free..</p>
                  <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  Learn More
                </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default OurServices;





















