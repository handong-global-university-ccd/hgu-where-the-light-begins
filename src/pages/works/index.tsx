import React, { useState } from 'react';
import Header from '../../components/Header'; // 실제 경로에 맞게 수정해주세요

interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
}

type CategoryType = 'All' | 'Communication Design' | 'Service Design' | 'UX Design' | 'Industrial Design';

const WorksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  
  const categories: CategoryType[] = [
    'All',
    'Communication Design',
    'Service Design', 
    'UX Design',
    'Industrial Design'
  ];

  // 샘플 프로젝트 데이터 (실제로는 props나 API에서 가져올 데이터)
  const projects: Project[] = Array.from({ length: 90 }, (_, i) => ({
    id: i + 1,
    name: `Project ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1] as CategoryType, // 'All' 제외
    image: `https://picsum.photos/400/300?random=${i + 1}` // 임시 이미지
  }));

  const filteredProjects: Project[] = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryChange = (category: CategoryType): void => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (projectId: number): void => {
    // 프로젝트 상세 페이지로 라우팅
    console.log(`Navigate to project ${projectId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-130 p-8 min-h-screen">
          <div className="mb-4 flex items-baseline justify-between">
            <h1
    style={{
      color: 'var(--Colors-Neutral-Black, #1C1C1C)',
      fontFamily: '"AvantGarde Md BT"',
      fontSize: '70px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    }}
            >
            Works
            </h1>
            <p className="mr-40" style={{
      color: 'var(--Colors-Neutral-Black, #1C1C1C)',
      fontFamily: '"AvantGarde Md BT"',
      fontSize: '30px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    }}>{filteredProjects.length}/90</p>
          </div>
          <nav className="space-y-4 relative">
  {categories.map((category: CategoryType) => (
    <button
      key={category}
      onClick={() => handleCategoryChange(category)}
      className="relative flex items-center w-full transition-all duration-300"
    >
      {/* SVG 아이콘 */}
      <span
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300
          ${selectedCategory === category ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
      >
        {category === 'Communication Design' && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6.9292 4.95015C5.18307 3.05488 4.11898 1.7411 4.25806 1.60033L1.60034 4.25806C1.7411 4.1173 3.05488 5.18307 4.95015 6.9292C5.61039 7.53749 5.15459 8.63846 4.25639 8.60159C1.68245 8.49602 0 8.32007 0 8.12065V11.8793C0 11.6799 1.68245 11.5057 4.25639 11.3984C5.15459 11.3615 5.61039 12.4625 4.95015 13.0708C3.05488 14.8169 1.7411 15.881 1.60034 15.7419L4.25806 18.3997C4.1173 18.2589 5.18307 16.9451 6.9292 15.0499C7.53749 14.3896 8.63846 14.8454 8.60159 15.7436C8.49602 18.3176 8.32007 20 8.12065 20H11.8793C11.6799 20 11.5057 18.3176 11.3984 15.7436C11.3615 14.8454 12.4625 14.3896 13.0708 15.0499C14.8169 16.9451 15.881 18.2589 15.7419 18.3997L18.3997 15.7419C18.2589 15.8827 16.9451 14.8169 15.0499 13.0708C14.3896 12.4625 14.8454 11.3615 15.7436 11.3984C18.3176 11.504 20 11.6799 20 11.8793V8.12065C20 8.32007 18.3176 8.49434 15.7436 8.60159C14.8454 8.63846 14.3896 7.53749 15.0499 6.9292C16.9451 5.18307 18.2589 4.11898 18.3997 4.25806L15.7419 1.60033C15.8827 1.7411 14.8169 3.05488 13.0708 4.95015C12.4625 5.61039 11.3615 5.15459 11.3984 4.25639C11.504 1.68245 11.6799 0 11.8793 0H8.12065C8.32007 0 8.49434 1.68245 8.60159 4.25639C8.63846 5.15459 7.53749 5.61039 6.9292 4.95015Z" fill="#00FF36"/>
          </svg>
        )}
        {category === 'Service Design' && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3.36119L8.6118 3.5066L7.28407 3.93615L6.07566 4.62978L5.03869 5.55908L4.21852 6.68227L3.65046 7.94919L3.3597 9.30637V10.6936L3.65046 12.0508L4.21852 13.3194L5.03869 14.4426L6.07566 15.3719L7.28407 16.0655L8.6118 16.4951L10 16.6405L11.3883 16.4951L12.716 16.0655L13.9244 15.3719L14.9614 14.4426L15.7815 13.3194L16.3496 12.0508L16.6404 10.6936V9.30637L16.3496 7.94919L15.7815 6.68227L14.9614 5.55908L13.9244 4.62978L12.716 3.93615L11.3883 3.5066L10 3.36119ZM10 0L12.0908 0.218954L14.0908 0.864115L15.911 1.90874L17.4723 3.3077L18.7076 4.99916L19.5631 6.90958L20 8.9537V11.0446L19.5631 13.0887L18.7076 14.9992L17.4723 16.6906L15.911 18.0896L14.0908 19.1342L12.0908 19.781L10 20L7.90927 19.781L5.90928 19.1342L4.08911 18.0896L2.52777 16.6906L1.29247 14.9992L0.437014 13.0887L3.24249e-05 11.0446V8.9537L0.437014 6.90958L1.29247 4.99916L2.52777 3.3077L4.08911 1.90874L5.90928 0.864115L7.90927 0.218954L10 0Z" fill="#00FF36"/>
          <path d="M9.99905 6.72119L10.6831 6.79306L11.3386 7.00533L11.9352 7.34797L12.4478 7.80593L12.8528 8.35917L13.1335 8.98594L13.2764 9.65617V10.3414L13.1335 11.0117L12.8528 11.6368L12.4478 12.1917L11.9352 12.6497L11.3386 12.9923L10.6831 13.2046L9.99905 13.2764L9.31335 13.2046L8.65788 12.9923L8.06124 12.6497L7.55031 12.1917L7.14528 11.6368L6.86461 11.0117L6.72174 10.3414V9.65617L6.86461 8.98594L7.14528 8.35917L7.55031 7.80593L8.06124 7.34797L8.65788 7.00533L9.31335 6.79306L9.99905 6.72119Z" fill="#00FF36"/>
          </svg>
        )}
        {category === 'UX Design' && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4.21359 18.1598L9.99631 12.3774L15.779 18.1598C12.3272 20.6132 7.66709 20.6132 4.21359 18.1598Z" fill="#00FF36"/>
            <path d="M18.1598 15.781L12.3771 9.99867L18.1598 4.21631C20.6134 7.66792 20.6134 12.3278 18.1598 15.781Z" fill="#00FF36"/>
            <path d="M4.21359 1.84007C7.66541 -0.613357 12.3255 -0.613357 15.779 1.84007L9.99631 7.62244L4.21359 1.84007Z" fill="#00FF36"/>
            <path d="M1.84019 4.21631L7.62291 9.99867L1.84019 15.781C-0.613395 12.3294 -0.613395 7.6696 1.84019 4.21631Z" fill="#00FF36"/>
          </svg>
        )}
        {category === 'Industrial Design' && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4.21359 18.1598L9.99631 12.3774L15.779 18.1598C12.3272 20.6132 7.66709 20.6132 4.21359 18.1598Z" fill="#00FF36"/>
            <path d="M18.1598 15.781L12.3771 9.99867L18.1598 4.21631C20.6134 7.66792 20.6134 12.3278 18.1598 15.781Z" fill="#00FF36"/>
            <path d="M4.21359 1.84007C7.66541 -0.613357 12.3255 -0.613357 15.779 1.84007L9.99631 7.62244L4.21359 1.84007Z" fill="#00FF36"/>
            <path d="M1.84019 4.21631L7.62291 9.99867L1.84019 15.781C-0.613395 12.3294 -0.613395 7.6696 1.84019 4.21631Z" fill="#00FF36"/>
          </svg>
        )}
      </span>

      {/* 버튼 텍스트 */}
      <span
        className={`block font-suit text-[20px] font-medium leading-[30px] transition-transform duration-300
        ${selectedCategory === category ? 'translate-x-6 text-black' : 'translate-x-0 text-gray-400 hover:text-black'}`}
      >
        {category}
      </span>
    </button>
  ))}
</nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-y-8">
            {filteredProjects.map((project: Project) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Project Image */}
                <div className="aspect-[4/3] bg-gray-100 mb-2 overflow-hidden border-3 border-transparent hover:border-[#00FF36] transition-opacity">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                    </div>
                
                {/* Project Name */}
                <h3 className="block text-[#1C1C1C] w-full text-left transition-colors font-suit text-[14px] font-medium leading-[30px]">
                  {project.name}
                </h3>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorksPage;