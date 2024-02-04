import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-blue-950">
      <div className="w-[90%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <div>
          <h1 className="text-[20px] sm:text-[30px] text-white">
            Nf<span className="text-yellow-300">tf</span>y
          </h1>
          <p className="text-[14px] text-white opacity-60 mt-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem fuga, a commodi expedita assumenda accusantium
            voluptates. Alias aliquid in fugiat nulla vero dignissimos at nobis
            dicta? Ex odit aperiam quibusdam?
          </p>
          <p className="text-[14px] text-white opacity-80 mt-[1.4rem]">
            (+880) 1234 5678 90 - ahadm3016@gmail.com
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Information</h1>
          <p className="footer-link">About Us</p>
          <p className="footer-link">Privacy Police</p>
          <p className="footer-link">Wallet</p>
          <p className="footer-link">Bidding</p>
          <p className="footer-link">FAQ</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Account</h1>
          <p className="footer-link">Dashboard</p>
          <p className="footer-link">My Bidding</p>
          <p className="footer-link">My Wishlist</p>
          <p className="footer-link">Account Details</p>
          <p className="footer-link">Track My Sell</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Shop</h1>
          <p className="footer-link">Affiliate</p>
          <p className="footer-link">Bestsellers</p>
          <p className="footer-link">Discount</p>
          <p className="footer-link">Latest Product</p>
          <p className="footer-link">Sals Products</p>
        </div>
      </div>
      <div className="mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[90%] mx-auto">
        <p className="text-[14px] text-white opacity-60">&#169; Copyright Ahad Hossain 2024</p>
        <Image src="/images/pay.svg" alt="pay" width={200} height={200} className="object-contain sm:ml-auto" />
      </div>
    </div>
  );
};

export default Footer;
