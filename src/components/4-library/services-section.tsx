import React from 'react';

function ServicesSection() {
  return (
    <div className="bg-zinc-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <img src="https://placehold.co/100x100" alt="icon" className="mb-4 mx-auto" />
            <h2 className="text-xl font-bold mb-2">TIME TO STAND OUT FROM THE HERD</h2>
            <p>We make small businesses look good. Sure, you could grab a template and sprinkle in some keywords, but what about site speed? Mobile-friendly design? SEO? Sitellama takes care of the details so you can focus on what you do best - running your business!</p>
          </div>
          <div className="bg-blue-700 text-white p-6 rounded-lg">
            <img src="https://placehold.co/100x100" alt="icon" className="mb-4 mx-auto" />
            <h2 className="text-xl font-bold mb-2">ALL BUSINESS, NO DRAMA</h2>
            <p>There's no drama with Sitellama. Our clients' sites are built with purpose. Whether you need a simple landing page or a jaw-dropping, multi-page masterpiece to showcase your work, Sitellama creates custom websites that prioritize your business's needs.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold text-teal-600">Llama Technology</h1>
          <p className="text-zinc-700 mt-2">Not sure what you need? Send us a message and we'll help you figure it out!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Branding</h3>
            <p>From logos to establishing new brand identities, our graphic design team does it all.</p>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Web Development</h3>
            <p>We specialize in building the backend bells and whistles that result in superior site performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Web Design</h3>
            <p>All projects are made using best practices for accessibility and user experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Web Hosting</h3>
            <p>We offer fast, reliable hosting plans to boost your site's performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Maintenance</h3>
            <p>Create a custom maintenance package and pass off those time-sinking tasks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Site Redesign</h3>
            <p>Have a website already? It's time for an update! Let us help!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
