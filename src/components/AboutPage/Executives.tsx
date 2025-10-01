import React from 'react';

export default function Executives() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section - Title */}
      <div className="w-1/3 flex items-start justify-start p-8">
        <div className="mt-8">
          <h1 className="text-7xl font-normal text-black tracking-tight">
            Executives
          </h1>
        </div>
      </div>
      
      {/* Right Section - Content */}
      <div className="w-1/2 flex flex-col justify-start p-8 mt-30 ml-[200px]">
        <div className="space-y-12">
          {/* Top Level - 위원장, 부위원장, 회계 */}
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-4 text-[#1C1C1C] text-[20px] font-semibold leading-normal">위원장</div>
              <div className="col-span-4"></div>
              <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">오신영</div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-4 text-[#1C1C1C] text-[20px] font-semibold leading-normal">부위원장</div>
              <div className="col-span-4"></div>
              <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">장수민</div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-4 text-[#1C1C1C] text-[20px] font-semibold leading-normal">회계</div>
              <div className="col-span-4"></div>
              <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">홍현지</div>
            </div>

          {/* 아이덴티티 Section */}
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-semibold leading-normal">아이덴티티</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">Leader</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">박예빈</div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start -mt-8">
            <div className="col-span-4"></div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">Member</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">강하라  임사랑</div>
          </div>

          {/* 웹사이트 Section */}
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-semibold leading-normal">웹사이트</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">Leader</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">조 환</div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start -mt-8">
            <div className="col-span-4"></div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">Member</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">송연수  정경난  정승준</div>
          </div>

          {/* 홍보 Section */}
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-semibold leading-normal">홍보</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">Leader</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">최현성</div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start -mt-8">
            <div className="col-span-4"></div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">Member</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">
              <div>김종욱  박정현  서주빈</div>
              <div className="mt-1">성윤지  유하은  육지민</div>
            </div>
          </div>

          {/* 설계 & 설치 Section */}
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-semibold leading-normal">설계 & 설치</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">Leader</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">권미소  김채영</div>
          </div>
          <div className="grid grid-cols-12 gap-4 items-start -mt-8">
            <div className="col-span-4"></div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">Member</div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">
              <div>안민애  윤규인</div>
              <div className="mt-1">장한나  최민서</div>
            </div>
          </div>

          {/* 웹 개발 Section */}
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-semibold leading-normal">웹 개발</div>
            <div className="col-span-4"></div>
            <div className="col-span-4 text-[#1C1C1C] text-[20px] font-medium leading-normal">권채은</div>
          </div>
        </div>
      </div>
    </div>
  );
}