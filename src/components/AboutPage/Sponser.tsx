import React from 'react';
import Image from 'next/image';
import S1 from "@/img/Sponsers/RixFont.svg";
import S2 from "@/img/Sponsers/Yoondesign.svg";
import S3 from "@/img/Sponsers/Moorim.svg";

export default function Sponser() {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="w-1/3 flex items-start justify-start p-8">
        <div>
          <h1 className="text-[70px] font-normal text-[#1C1C1C]" style={{fontFamily: 'AvantGarde Md BT'}}>
            Sponsers
          </h1>
        </div>
      </div>
      
      {/* Right Section - Content */}
      <div className="w-2/3 flex justify-end items-center p-8 -mt-60 gap-x-14">
        <div>
        <Image 
          src={S1}
          alt="RixFont"
          className="object-contain max-w-full h-auto"
        />
        </div>
        <div className="mt-1">
        <Image 
          src={S2}
          alt="Yoondesign"
          className="object-contain max-w-full h-auto"
        />
        </div>
        <div className="mb-10">
        <Image 
          src={S3}
          alt="Moorim"
          className="object-contain max-w-full h-auto"
        />
        </div>
      </div>
    </div>
  );
}