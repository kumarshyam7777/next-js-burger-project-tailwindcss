import React from "react";
import Image from "next/image";
import DeliverImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:gid-cols-2 gap-[3rem]">
        {/* Image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src={DeliverImg} alt="deliveryImag" />
          </div>
          {/* Text Content */}
          <div>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
              Your <span className="text-red-600">Favourite Burger </span> on
              tha way{" "}
            </h1>
            <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
              y continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-2019 - Zomato™
              Media Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-3 mt-[1rem]">
              <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600 " />
              <h1 className="text-[18px] text-black font-medium uppercase ">
                Delivery in 30 minutes
              </h1>
            </div>
            <div className="flex items-center space-x-3 mt-[2rem]">
              <IoFastFood className="w-[2rem] h-[2rem] text-red-600 " />
              <h1 className="text-[18px] text-black font-medium uppercase ">
                Free shipping from 75$
              </h1>
            </div>

            <div className="flex items-center space-x-3 mt-[2rem]">
              <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600 " />
              <h1 className="text-[18px] text-black font-medium uppercase ">
               Some Random Text
              </h1>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Delivery;
