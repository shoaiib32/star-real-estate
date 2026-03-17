import React from "react";
import Client1 from "../../assets/client1.png";
import Client4 from "../../assets/client4.png";
import Client5 from "../../assets/client5.png";

const OurClients = () => {
  return (
    <div id="client" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-lg text-gray-700 mb-8">
            See what our clients have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
        <div className="justify-center">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={Client1}
          alt="Client 1"
        />
        <div className="z-10 bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            Star Paradise impressed me with its location and construction quality. The project planning is excellent and the buying process was smooth. I am happy with my decision to book a home here.
          </p>
          <p className="text-gray-500">Rahul Sharma, Homebuyer</p>
        </div>
      </div>
      <div className="justify-center">
      <img
        className="w-24 h-24 object-cover rounded-full"
        src={Client4}
        alt="Client 1"
      />
      <div className="z-10 bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          I really liked the design and peaceful environment of Star Paradise. The builder has maintained good quality standards and the project offers great value compared to other projects nearby.
        </p>
        <p className="text-gray-500">Amit Verma, Homebuyer</p>
      </div>
    </div>
    <div className="justify-center">
    <img
      className="w-24 h-24 object-cover rounded-full"
      src={Client5}
      alt="Client 1"
    />
    <div className="z-10 bg-white p-8 rounded-lg shadow-md">
      <p className="text-lg text-gray-700 mb-4">
        The project location is very convenient with everything nearby. The team explained everything clearly during my visit and the overall experience from inquiry to booking was very professional.
      </p>
      <p className="text-gray-500">Sandeep Patil, Homebuyer</p>
    </div>
  </div>
  </div>
  </div>
</div>
  );
};

export default OurClients;
















