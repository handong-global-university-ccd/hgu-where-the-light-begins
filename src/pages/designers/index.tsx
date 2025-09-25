import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import HoverImage from '../../img/Image.png';

interface Designer {
  id: string;
  name: string;
  major: string;
}

const designersData: Designer[] = [
  { id: '001', name: '강예은', major: 'Major' },
  { id: '002', name: '강주찬', major: 'Major' },
  { id: '003', name: '강하라', major: 'Major' },
  { id: '004', name: '권미소', major: 'Major' },
  { id: '005', name: '김민지', major: 'Major' },
  { id: '006', name: '김수현', major: 'Major' },
  { id: '007', name: '박지원', major: 'Major' },
  { id: '008', name: '이서연', major: 'Major' },
];

export default function DesignersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const router = useRouter();

  // 검색 필터링
  const filteredDesigners = useMemo(() => {
    if (!searchTerm.trim()) return designersData;
    return designersData.filter(designer =>
      designer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      designer.id.includes(searchTerm)
    );
  }, [searchTerm]);

  // 디자이너 클릭 핸들러
  const handleDesignerClick = (designerId: string) => {
    router.push(`/designers/detail`);
  };

  // 호버된 아이템의 인덱스 가져오기
  const getHoveredIndex = () => {
    if (!hoveredId) return -1;
    return filteredDesigners.findIndex(designer => designer.id === hoveredId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />     
      <div className="flex">
        {/* 왼쪽 사이드바 */}
        <div className="w-110 p-8 min-h-screen">
          <h1 className="text-[var(--Colors-Neutral-Black,#1C1C1C)] font-[AvantGarde Md BT] text-[60px] font-normal leading-normal">Designers</h1>          
          {/* 검색창 */}
          <div>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full font-[SUIT] text-[50px] font-normal text-[#1C1C1C] bg-transparent border-none outline-none placeholder-gray-400"
            />
          </div>

          {/* 호버 시 이미지 표시 영역 */}
          <div className="w-full h-full bg-white">
            {hoveredId && (
              <div className="relative w-4/5 h-full -mt-20">
                <Image 
                  src={HoverImage} 
                  alt="Designer preview" 
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* 오른쪽 메인 콘텐츠 */}
        <div className="flex-1 bg-white pt-8">
          {/* List 헤더 */}
          <div className="px-8 py-6">
            {/* 디자이너 목록 */}
            <div className="space-y-0">
              {filteredDesigners.map((designer, index) => {
                const isHovered = hoveredId === designer.id;
                
                return (
                  <div
                    key={designer.id}
                    className={`grid grid-cols-12 gap-4 py-4 transition-all duration-200 cursor-pointer group ${
                      isHovered 
                        ? 'border-b border-gray-700'
                        : 'border-b border-gray-200 hover:bg-gray-50'
                    } ${
                      index === 0 
                        ? 'border-t-transparent'
                        : isHovered
                        ? 'border-t border-gray-700'
                        : 'border-t border-gray-200'
                    }`}
                    onMouseEnter={() => setHoveredId(designer.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleDesignerClick(designer.id)}
                  >
                    <div className="col-span-2 text-[24px] font-normal text-[#1C1C1C]">
                      {designer.id}
                    </div>
                    <div className="col-span-5 text-[24px] font-normal text-[#1C1C1C]">
                      {designer.name}
                    </div>
                    <div className="col-span-5 text-[24px] font-normal text-[#1C1C1C]">
                      {designer.major}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 검색 결과가 없을 때 */}
            {searchTerm && filteredDesigners.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                검색 결과가 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>


    </div>
  );
}