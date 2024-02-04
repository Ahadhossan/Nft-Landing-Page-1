import React from "react";
import NftCard from "./Helper/NftCard";

const PopularNft = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-950">
      <div className="text-center">
        <p className="heading-mini">Popular Item</p>
        <h1 className="heading-primary">
          Explor <span className="text-yellow-300">popular</span> Nfts
        </h1>
      </div>
      <div className="w-[90%] mx-auto pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.5rem]">
        <div data-aos="fade-up" data-anchor-placement="top-center">
          <NftCard
            image="/images/nft1.svg"
            title="Warrior"
            author="AHAD"
            price="3.25"
          />
        </div>
        <div
          data-aos="fade-right"
          data-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NftCard
            image="/images/nft2.svg"
            title="Meata Forted"
            author="AHAD"
            price="4.25"
          />
        </div>
        <div
          data-aos="fade-right"
          data-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NftCard
            image="/images/nft3.svg"
            title="Forted"
            author="AHAD"
            price="5.25"
          />
        </div>
        <div
          data-aos="fade-right"
          data-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NftCard
            image="/images/nft4.svg"
            title="Forted Eastern"
            author="AHAD"
            price="2.25"
          />
        </div>
        <div
          data-aos="fade-right"
          data-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <NftCard
            image="/images/nft5.svg"
            title="Eastern"
            author="AHAD"
            price="7.25"
          />
        </div>
        <div
          data-aos="fade-right"
          data-anchor-placement="top-center"
          data-aos-delay="500"
        >
          <NftCard
            image="/images/nft6.svg"
            title="Eastern Tie"
            author="AHAD"
            price="1.25"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularNft;
