import React from "react";
import BidSlider from "./Helper/BidSlider";

const LiveBiding = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-950">
      <div className="text-center">
        <p className="heading-mini">Bidding</p>
        <h1 className="heading-primary mt-[0.5rem]">
          Live <span className="text-yellow-300">Bidding</span>
        </h1>
      </div>
      <div className="w-[90%] mx-auto pt-[5rem]">
        <BidSlider/>
      </div>
    </div>
  );
};

export default LiveBiding;
