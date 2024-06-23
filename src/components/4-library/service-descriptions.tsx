import React, { useState } from 'react';

function ServicesDescription() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="bg-zinc-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`rounded-lg ${hovered ? 'bg-blue-800' : 'bg-blue-600'} text-white overflow-hidden`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ maxHeight: '60%' }}>
            <img src="src\assets\services-web-design.png" alt="icon" className="block mx-auto" />
          </div>
          {/* First service description */}
          <div className={`relative rounded-lg overflow-hidden ${hovered ? 'bg-blue-800' : 'bg-blue-600'} text-white`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ maxHeight: '60%' }}>
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold mb-2">TIME TO STAND OUT FROM THE HERD</h2>
              <p className="text-sm px-4 text-center">
                We make small businesses look good. Sure, you could grab a template and sprinkle in some keywords, but what about site speed? Mobile-friendly design? SEO? Sitellama takes care of the details so you can focus on what you do best - running your business!
              </p>
            </div>
            <img src="src\assets\side-background-right.png" alt="icon" className="w-full h-auto" />

          </div>

          {/* Second service description */}
          <div className={`relative rounded-lg overflow-hidden ${hovered ? 'bg-blue-800' : 'bg-blue-600'} text-white`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ maxHeight: '60%' }}>
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold mb-2">ALL BUSINESS, NO DRAMA</h2>
              <p className="text-sm px-4 text-center">
                There's no drama with Sitellama. Our clients' sites are built with purpose. Whether you need a simple landing page or a jaw-dropping, multi-page masterpiece to showcase your work, Sitellama creates custom websites that prioritize your business's needs.
              </p>
            </div>
            <img src="src\assets\side-background-left.png" alt="icon" className="w-full h-auto" />
          </div>
          <div className={`rounded-lg ${hovered ? 'bg-blue-800' : 'bg-blue-600'} text-white overflow-hidden`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ maxHeight: '60%' }}>
          <img src="src\assets\services-web-development.png" alt="icon" className="block mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDescription;
