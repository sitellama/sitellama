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
        <div className="grid grid-cols-1 gap-6">
          <div className={`p-6 rounded-lg ${hovered ? 'bg-blue-600' : 'bg-blue-500'} text-white`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src="https://placehold.co/100x100" alt="icon" className="mb-4 mx-auto" />
            <h2 className="text-xl font-bold mb-2">TIME TO STAND OUT FROM THE HERD</h2>
            <p>We make small businesses look good. Sure, you could grab a template and sprinkle in some keywords, but what about site speed? Mobile-friendly design? SEO? Sitellama takes care of the details so you can focus on what you do best - running your business!</p>
          </div>
          <div className={`p-6 rounded-lg ${hovered ? 'bg-blue-800' : 'bg-blue-700'} text-white`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src="https://placehold.co/100x100" alt="icon" className="mb-4 mx-auto" />
            <h2 className="text-xl font-bold mb-2">ALL BUSINESS, NO DRAMA</h2>
            <p>There's no drama with Sitellama. Our clients' sites are built with purpose. Whether you need a simple landing page or a jaw-dropping, multi-page masterpiece to showcase your work, Sitellama creates custom websites that prioritize your business's needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDescription;
