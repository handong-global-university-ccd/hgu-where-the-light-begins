import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="font-['AvantGarde_Md_BT'] text-[14px] font-[400]">26th CCD Graduation Exhibition: Where The Light Begins</p>
            <p className="mt-1 font-['AvantGarde_Md_BT'] text-[14px] font-[400]">© 2025. Handong Global University, Contents Convergence Design. All Rights Reserved.</p>
          </div>
          <div className="text-center sm:text-right font-['AvantGarde_Md_BT'] text-[14px] font-[400]">
            <p>
              <span>website | </span>
              <a 
                href="http://www.handong.edu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-gray-900 transition-colors"
              >
                www.handong.edu
              </a>
            </p>
            <p className="mt-1">
              <span>instagram | </span>
              <a 
                href="https://www.instagram.com/hgu.exhibition.2025" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-gray-900 transition-colors"
              >
                @hgu.exhibition.2025
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;