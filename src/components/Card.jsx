import React from "react";
import car_img from "../assets/download.png";
import Tag from "./ui/Tag";
import Button from "./Button";

function Card() {
  return (
    <div className="h-auto  flex flex-col gap-3 justify-evenly border border-[#737373] rounded-[10px] p-[30px] mb-[14px]">
      
      <div className="relative flex items-center justify-center">
        <img
          src={car_img}
          alt="Card Image"
          className="w-full max-h-[240px] object-cover  rotate-90 rounded-[10px]"
        />
      </div>

      <div className="w-full h-[73px] flex flex-col items-start justify-between">
        <p className="text-white text-lg font-semibold">
          Chaintech Product
        </p>
        <div className="flex flex-row flex-wrap items-start gap-[5px]">
          <Tag>UX Design</Tag>
          <Tag>Angular</Tag>
          <Tag>JavaScript</Tag>
        </div>
      </div>

      <Button 
            className="w-full px-[24px] text-center"
            bgColor="bg-[#292929]"
            >
                View Product  detail
            </Button>
    </div>
  );
}

export default Card;
