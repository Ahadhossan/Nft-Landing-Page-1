import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NftCard from "./NftCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 1, //optional
  },
  desktop: {
    breakpoint: { max: 1300, min: 1024 },
    items: 3,
    slidesToSlide: 1, //optional
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
    slidesToSlide: 1, //optional
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, //optional
  },
};

const BidSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <div>
        <NftCard
          image="/images/nft1.svg"
          title="Warrior"
          author="AHAD"
          price="3.25"
        />
      </div>
      <div>
        <NftCard
          image="/images/nft2.svg"
          title="Meata Forted"
          author="AHAD"
          price="4.25"
        />
      </div>
      <div>
        <NftCard
          image="/images/nft3.svg"
          title="Forted"
          author="AHAD"
          price="5.25"
        />
      </div>
      <div>
        <NftCard
          image="/images/nft4.svg"
          title="Forted Eastern"
          author="AHAD"
          price="2.25"
        />
      </div>
      <div>
        <NftCard
          image="/images/nft5.svg"
          title="Eastern"
          author="AHAD"
          price="7.25"
        />
      </div>
      <div>
        <NftCard
          image="/images/nft6.svg"
          title="Eastern Tie"
          author="AHAD"
          price="1.25"
        />
      </div>
    </Carousel>
  );
};

export default BidSlider;
