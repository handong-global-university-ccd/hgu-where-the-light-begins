import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface NavigationItem {
  name: string;
  path: string;
  angle: number; // 각 메뉴 항목의 각도
}

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 4개 메뉴 항목을 90도씩 균등하게 배치
  const navigationItems: NavigationItem[] = [
    { name: 'ABOUT', path: '/about', angle: 180 },      // 왼쪽
    { name: 'WORKS', path: '/works', angle: 150 },      // 왼쪽 위
    { name: 'DESIGNERS', path: '/designers', angle: 125 }, // 위쪽
    { name: 'ARCHIVE', path: '/archive', angle: 90 }     // 오른쪽 위
  ];

  const handleLogoClick = (): void => {
    router.push('/');
  };

  const handleNavClick = (path: string): void => {
    router.push(path);
    setIsMenuOpen(false);
  };

  const isCurrentPath = (path: string): boolean => {
    return router.pathname === path;
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const StarIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="#1C1C1C"
      className={`cursor-pointer transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'rotate-45' : 'rotate-0'
      }`}
      onClick={toggleMenu}
    >
      <path 
        d="M40 17.9173H25.0245L35.6118 7.33007L32.6699 4.38282L22.0718 14.981V0H17.9173V14.9755L7.33007 4.38282L4.38282 7.33007L14.9701 17.9173H0V22.0772H14.9755L4.38282 32.6699L7.33007 35.6117L17.9173 25.0245V40H22.0718V25.019L32.6699 35.6117L35.6118 32.6699L25.019 22.0772H40V17.9173Z" 
        fill="#1C1C1C"
        className="hover:fill-[#00FF36] transition-colors"
      />
    </svg>
  );

  // 방사형 메뉴 아이템의 위치 계산 및 살짝 기울이기
  const getMenuItemStyle = (angle: number, index: number) => {
    // 글자 길이에 따른 반지름 조정 (글자 끝에서 별까지의 거리를 일정하게)
    const baseRadius = 60; // 기본 거리
    const textLengths = {
      'ABOUT': 50,
      'WORKS': 50, 
      'DESIGNERS': 80,
      'ARCHIVE': 50
    };
    const itemName = navigationItems[index].name;
    const adjustedRadius = baseRadius + (textLengths[itemName as keyof typeof textLengths] / 2);
    
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * adjustedRadius;
    const y = Math.sin(radian) * adjustedRadius;
    
    // 각 아이템을 별 중심으로 살짝 기울이기
    const tiltAngle = angle - 180; // 별을 향해 기울어지도록 조정

    return {
      transform: isMenuOpen
        ? `translate(${x}px, ${y}px) rotate(${tiltAngle}deg) scale(1)`
        : 'translate(0px, 0px) scale(0)',
      transformOrigin: 'center',
      transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
    };
  };

  return (
    <>
      <header className="flex items-center justify-between pt-1 pb-12 pr-8 pl-8 bg-white relative z-50">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={handleLogoClick}
        >
          <div className="bg-[#00FF36] px-1 py-0.5 transition-colors" style={{
    color: 'var(--Colors-Neutral-Black, #1C1C1C)',
    fontFamily: '"AvantGarde Md BT"',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  }}>
            Where
          </div>
          <div className="bg-[#00FF36] mt-[35px] px-1 py-0.5 transition-colors" style={{
    color: 'var(--Colors-Neutral-Black, #1C1C1C)',
    fontFamily: '"AvantGarde Md BT"',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  }}>
            The
          </div>
          <div className="bg-[#00FF36] mb-[15px] px-1 py-0.5 transition-colors" style={{
    color: 'var(--Colors-Neutral-Black, #1C1C1C)',
    fontFamily: '"AvantGarde Md BT"',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  }}>
            Light
          </div>
          <div className="bg-[#00FF36] mt-[45px] px-1 py-0.5 transition-colors" style={{
    color: 'var(--Colors-Neutral-Black, #1C1C1C)',
    fontFamily: '"AvantGarde Md BT"',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  }}>
            Begins
          </div>
        </div>
        
        {/* Right side with navigation */}
        <div className="flex items-center space-x-8 relative">
          {/* Radial Menu Items - 별 클릭시에만 나타남 */}
          {navigationItems.map((item, index) => (
            <button
              key={`radial-${item.name}`}
              onClick={() => handleNavClick(item.path)}
              className={`absolute text-sm whitespace-nowrap transition-all ${
                isCurrentPath(item.path) 
                  ? 'text-black font-bold' 
                  : 'text-gray-600 hover:text-black'
              } ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
              style={getMenuItemStyle(item.angle, index)}
            >
              {item.name}
            </button>
          ))}

          {/* Star Icon */}
          <div className="relative z-10">
            <StarIcon />
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-transparent z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;