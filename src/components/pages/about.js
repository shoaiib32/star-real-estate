import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row w-full bg-amber-800 py-12 md:py-20">
      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center">
        <img
          src="https://www.desaihomes.com/uploads/media/DD-Jade-Tower-Banner-Image6475a4ac5421e_result64f01a1964590.webp"
          alt="About Star Paradise"
          className="w-full max-h-96 md:max-h-[480px] object-cover rounded-tr-full rounded-bl-full"
        />
      </div>

      <div className="w-full md:w-1/2 p-6 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">About Us</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Welcome to Star Paradise, a premium residential project offering 23 luxurious homes in the prime location of Nalasopara West, Yashwant Gaurav. Designed for modern families, this project focuses on providing comfort, quality construction, and a peaceful living environment with excellent connectivity to daily necessities.
            <br />
            <br />
            Developed by a reputed builder with a strong history of delivering successful projects, Star Paradise reflects trust, quality, and thoughtful planning. Every home is designed to maximize space, natural light, and functionality, ensuring a comfortable and secure lifestyle for homeowners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;