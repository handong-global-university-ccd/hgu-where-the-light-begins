import React, { useState , useEffect} from 'react';
import { avantGarde } from '../../styles/fonts';
import { ITCavantGarde } from '../../styles/fonts';
import { suitMedium } from '../../styles/fonts';
import { ProjectOneSVG, ProjectTwoSVG, ProjectThreeSVG, ProjectFourSVG } from './ProjectSVGs';

const quadrantData = [
  { id: 1, title: 'Project One', Component: ProjectOneSVG, styleClasses: '-top-27 left-111 w-2/5 scale-100', color: '#FFA115', designType: 'COMMUNICATION DESIGN' },
  { id: 2, title: 'Project Two', Component: ProjectTwoSVG, styleClasses: '-top-22 -right-12 w-2/5 scale-100', color: '#FDFF00', designType: 'SERVICE DESIGN' },
  { id: 3, title: 'Project Three', Component: ProjectThreeSVG, styleClasses: 'bottom-6 left-106 w-2/5 scale-100', color: '#7CFC1B', designType: 'UX DESIGN' },
  { id: 4, title: 'Project Four', Component: ProjectFourSVG, styleClasses: 'bottom-1 right-[-26px] w-2/5 scale-100', color: '#FF586F', designType: 'INDUSTRIAL DESIGN' },
];

const Intro = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnyQuadrantHovered, setIsAnyQuadrantHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState('#00FF36');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsAnyQuadrantHovered(true);
    setCurrentColor(quadrantData[index].color);
  };

  const handleImageMouseLeave = () => {
    setHoveredIndex(null);
    setIsAnyQuadrantHovered(false);
    setCurrentColor('#00FF36');
  };

  return (
    <section 
      className={`relative w-full bg-white h-240 flex justify-center items-center overflow-hidden`}
    >
      {/* Background image layer (z-0) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/home/자산 10.svg"
          alt="Main Radial Background"
          className={`absolute top-[59.5px] right-30 w-1/2 h-auto rounded-xl scale-[134.5%] object-cover transition-opacity duration-300 ease-in-out ${
            isAnyQuadrantHovered ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        <img
          src="/img/home/Gray_radial.png" 
          alt="Gray Radial Background"
          className={`absolute top-[63px] right-31.5 w-1/2 h-auto rounded-xl scale-[185%] object-cover transition-opacity duration-300 ease-in-out ${
            isAnyQuadrantHovered ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>

      {/* --- UI Layer (z-10, z-20) --- */}
      <div className="absolute top-8 left-8 z-20">
        <h2 className={`${ITCavantGarde.variable} text-[20px] tracking-wider text-black`}>
          2025 HANDONG GLOBAL UNIVERSITY
          <br />
          CONTENTS CONVERGENCE DESIGN GRADUATION EXHIBITION
        </h2>
      </div>
      <div className="absolute top-8 right-8 z-20">
        <button className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>
      <div className="z-10 w-[800px] h-[600px]">
        <div className="absolute top-[180px] left-[100px] h-[133px] border-2 bg-white flex justify-center items-center px-6 transition-colors duration-300" style={{ borderColor: currentColor }}>
          <span className={`${suitMedium.variable} absolute -top-9 left-14 -translate-x-1/2 text-black text-[16px] font-bold p-1.5 transition-colors duration-300`} style={{ backgroundColor: currentColor }}>능력의 서막</span>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[112.346px] font-normal text-[#222]`}>Where</h1>
        </div>
        <div className="absolute z-20 top-[290px] left-[250px] h-[133px] border-2 bg-white flex justify-center items-center px-6 transition-colors duration-300" style={{ borderColor: currentColor }}>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[112.346px] font-normal text-[#222]`}>The Light</h1>
        </div>
        <div className="absolute top-[400px] left-[150px] h-[133px] border-2 bg-white flex justify-center items-center px-6 transition-colors duration-300" style={{ borderColor: currentColor }}>
          <div className="absolute z-10 -top-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -top-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 bg-[#fff] border-2 transition-colors duration-300" style={{ borderColor: currentColor }}></div>
          <h1 className={`${avantGarde.variable} relative text-[112.346px] font-normal text-[#222]`}>Begins</h1>
        </div>
      </div>
      <div className={`absolute bottom-60 right-24 z-10 transition-opacity duration-300 ${isAnyQuadrantHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative">
          <span className={`${suitMedium.variable} absolute -top-9 right-[23.3px] translate-x-1/2 text-black text-[16px] font-bold p-1.5 transition-colors duration-300`} style={{ backgroundColor: currentColor }}>Date</span>
          <div className="inline-flex flex-col items-end">
            <div className="border-2 inline-block bg-white p-1.5 transition-colors duration-300" style={{ borderColor: currentColor }}>
              <p className={`${suitMedium.variable} text-[40px] font-normal text-black leading-none`}>2025.11.05.WED</p>
            </div>
            <div className="w-[213.5px] h-1 bg-white z-10 -mt-0.5 mr-0.5"></div>
            <div className="border-2 inline-block bg-white p-1.5 -mt-0.5 transition-colors duration-300" style={{ borderColor: currentColor }}>
              <p className={`${suitMedium.variable} text-[40px] font-normal text-black leading-none`}>-11.12.TUE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Type Label */}
      {hoveredIndex !== null && (
        <div className="absolute top-[424px] left-[955px] z-10">
          <div className="relative inline-flex items-center gap-[33px] px-5 py-2 transition-colors duration-300" style={{ backgroundColor: currentColor }}>
            <div className="absolute -top-[7px] -left-[7px] w-[14px] h-[14px] rounded-full transition-colors duration-300" style={{ backgroundColor: currentColor }}></div>
            <span className={`${ITCavantGarde.variable} text-[30px] font-normal text-[#1C1C1C] whitespace-nowrap`}>
              {quadrantData[hoveredIndex].designType}
            </span>
          </div>
        </div>
      )}
      
      {/* ✅ Hover images and detection boxes layer (z-5) */}
      <div 
        className="absolute inset-0 z-5 overflow-visible"
      >
        {quadrantData.map((item, index) => {
          const SVGComponent = item.Component;
          
          return (
            <div 
              key={item.id} 
              className={`absolute ${item.styleClasses} overflow-visible pointer-events-none`}
            >
              {/* 인라인 SVG 컴포넌트 - 실제 도형 영역만 호버 감지 */}
              <SVGComponent
                className={`w-full h-full transition-opacity duration-300 ease-in-out ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                onMouseEnter={() => handleImageMouseEnter(index)}
                onMouseLeave={handleImageMouseLeave}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Intro;