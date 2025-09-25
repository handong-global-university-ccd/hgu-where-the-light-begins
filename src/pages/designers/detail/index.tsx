import { useState } from 'react';
import Image from 'next/image';
import Header from "../../../components/Header";
import HoverImage from '../../../img/Image.png';
import ArtWork from '../../../img/Artwork.png';

export default function DesignerDetailPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Mock data - replace with actual data
  const designer = {
    name: "Name",
    email: "Email@email.com",
    description: "디자이너 소개글은 본인이 어떤 종류의 디자이너인지, 어떤 강점을 가지고 있고, 어떤 성과를 이루었는지를 명확히 보여주는 글입니다. 디자이너 소개글은 본인이 어떤 종류의 디자이너인지,.. 디자이너 소개글은 본인이 어떤 종류의 디자이너인지, 어떤 강점을 가지고 있고, 어떤 성과를"
  };

  const portfolioImages = [
    { id: 1, title: "TITLETITLE", thumbnail: true },
    { id: 2, title: "thumbnail", thumbnail: false },
    { id: 3, title: "thumbnail", thumbnail: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />      
      <div className="flex">
        {/* Left Section */}
        <div className="w-110 p-8 min-h-screen">
          {/* Name and Email */}
          <div>
            <h1 className="text-[#1C1C1C] font-[AvantGarde Md BT] text-[60px] font-normal">
              {designer.name}
            </h1>
            <p className="text-[#7C7C7C] font-[SUIT] text-[24px] font-normal">
              {designer.email}
            </p>
          </div>         
          {/* Profile Image */}
          <div className="w-full h-full bg-white">
            <div className="relative w-4/5 h-full -mt-24">
                <Image 
                  src={HoverImage} 
                  alt="Designer preview" 
                  fill
                  className="object-contain"
                />
            </div>
          </div>         
        </div>

        {/* Right Section */}
        <div className="w-3/4 pt-12 min-h-screen -ml-22 pr-8">
          {/* Description */}
          <div className="w-4/5 text-[#1C1C1C)] font-[SUIT] text-[18px] font-normal">
            {designer.description}
          </div>
          {/* Main Selected Image */}
          <div className="mt-[58px] flex justify-end">
            <div className="w-[365px] h-[274px] flex items-center justify-center cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-[#00FF36] group relative">
              <Image
              src={ArtWork}
              alt="ArtWork"
              fill
              className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-[#00FF36] text-black px-3 py-1 text-sm font-bold">
                  TITLETITLE
                </div>
              </div>
            </div>
          </div>
          
          {/* Thumbnail Grid */}
          <div className="flex justify-end">
          <div className="grid grid-cols-2 gap-[20px] mt-[20px] flex justify-end">
            {portfolioImages.slice(1).map((image, index) => (
              <div 
                key={image.id} 
                className="w-[365px] h-[274px] flex items-center justify-center cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-[#00FF36] group relative"
                onClick={() => setSelectedImageIndex(index + 1)}
              >
                <Image
              src={ArtWork}
              alt="ArtWork"
              fill
              className="object-contain"
              />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-[#00FF36] text-black px-3 py-1 text-sm font-bold">
                    {image.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}