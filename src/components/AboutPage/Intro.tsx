import React from 'react';

export default function Intro() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="flex min-h-screen">
        {/* Left Section - Title */}
        <div className="w-1/2 flex items-start justify-start p-8">
          <div>
            <h1 className="text-[70px] font-normal text-[#1C1C1C] text-[AvantGarde Md BT] leading-[100%]">
              Where<br />
              <span className="ml-30">The Light</span><br />
              <span className="ml-12">Begins</span>
            </h1>
          </div>
        </div>
        
        {/* Right Section - Content */}
        <div className="w-2/3 flex items-center justify-start p-8 relative">
          <div className="max-w-lg space-y-8 ml-30 mt-40">
            {/* Exhibition Info */}
            <div className="space-y-2">
              <h2 className="text-[30px] text-[#1C1C1C] text-[SUIT] font-normal">
                2025 Handong Global Univ.<br />
                Content Convergence Design<br />
                Graduation Exhibition
              </h2>
            </div>
            
            {/* Korean Text */}
            <div className="w-3/2 space-y-4 text-[20px] text-[#1C1C1C] leading-[160%] text-[SUIT] font-normal">
              <p>
                한 줄기의 빛은 투명한 프리즘을 만나 굴절되고, 쪼개지고,<br />
                마침내 여러 색의 결을 드러냅니다. 그 전에는 볼 수 없었던 숨은 색들이,<br />
                단일한 빛 속에 원래부터 존재해 있었음을 깨닫게 되는 순간입니다.
              </p>
              
              <p>
                졸업전시는 바로 그 프리즘과 감습니다.<br />
                네 해 동안 우리는 같은 과정을 지나왔지만, 마지막 관문을 통과하며,<br />
                각자만의 파장과 색채를 띤 존재로 세상 앞에 서게 됩니다.<br />
                사회라는 무대는 결코 직선의 길로만 이루어지지 않았습니다.
              </p>
              
              <p>
                때로는 예리하게 꺾이고, 예상치 못한 방향으로 휘어지며,<br />
                빛마저 사라진 듯한 터널을 지나야 할 때도 있었습니다.<br />
                그러나 그 굴절과 편차 속에서 우리는 더 깊이 각자의 색을 드러낼 것입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}