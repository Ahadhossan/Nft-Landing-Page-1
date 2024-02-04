import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-950">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[5rem]">
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="md:w-[450px] md:h-[450px] w-[70%] h-[70%] border-[3px] flex items-center justify-center border-gray-400 rounded-lg"
        >
          <Image
            src="/images/about.jpg"
            alt="about"
            height={400}
            width={400}
            className="-rotate-6 rounded-lg"
          />
        </div>
        <div>
          <p className="heading-mini">About Us</p>
          <h1 className="heading-primary">
            Discover More Collect and Sell Rare NFTs
          </h1>
          <p
            className="text-[15px] md:text-[17px] mt-[1rem] mb-[1rem]
          text-white opacity-80"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            distinctio nesciunt ducimus rem tempora omnis inventore adipisci
            illo fuga esse enim possimus voluptatem repellendus corrupti
            quibusdam sequi eligendi, sed dignissimos.
          </p>
          <p
            className="text-[15px] md:text-[17px] mt-[1rem] mb-[1rem]
          text-white opacity-80"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            distinctio nesciunt ducimus rem tempora omnis inventore adipisci
            illo fuga esse enim possimus voluptatem repellendus corrupti
            quibusdam sequi eligendi, sed dignissimos.
          </p>
          <button className="before:ease relative h-12 w-40 overflow-hidden bg-blue-700 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#da5959] before:transition-all before:duration-300 hover:text-white mt-[1.5rem] hover:before:-rotate-180">
            <span className="relative z-10">Read More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
