import React, { useState } from 'react';
import Header from '../../components/Header'; // 실제 경로에 맞게 수정해주세요

const WorksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = [
    'All',
    'Communication Design',
    'Service Design', 
    'UX Design',
    'Industrial Design'
  ];

  // 샘플 프로젝트 데이터 (실제로는 props나 API에서 가져올 데이터)
  const projects = Array.from({ length: 90 }, (_, i) => ({
    id: i + 1,
    name: `Project ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1], // 'All' 제외
    image: `https://picsum.photos/400/300?random=${i + 1}` // 임시 이미지
  }));

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-8 border-r border-gray-200 min-h-screen">
          <div className="mb-8">
            <h1 className="text-6xl font-light mb-2">Works</h1>
            <p className="text-gray-500 text-lg">90/90</p>
          </div>
          
          <nav className="space-y-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left py-2 transition-colors ${
                  selectedCategory === category 
                    ? 'text-black font-medium' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="group cursor-pointer">
                {/* Project Image */}
                <div className="aspect-[4/3] bg-gray-100 mb-4 rounded-lg overflow-hidden group-hover:opacity-80 transition-opacity">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Project Name */}
                <h3 className="text-sm font-medium group-hover:text-green-500 transition-colors">
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