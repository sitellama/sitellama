import React from 'react';

function ServicesTypes() {
  return (
    <div className="bg-zinc-100 p-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold text-teal-600">Llama Technology</h1>
          <p className="text-zinc-700 mt-2">Not sure what you need? Send us a message and we'll help you figure it out!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-purple-500 hover:text-white hover:transform hover:scale-110 transition-transform">
            <h3 className="text-lg font-bold mb-2">Branding</h3>
            <p>From logos to establishing new brand identities, our graphic design team does it all.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-purple-500 hover:text-white hover:transform hover:scale-110 transition-transform">
            <h3 className="text-lg font-bold mb-2">Web Development</h3>
            <p>We specialize in building the backend bells and whistles that result in superior site performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-purple-500 hover:text-white hover:transform hover:scale-110 transition-transform">
            <h3 className="text-lg font-bold mb-2">Web Design</h3>
            <p>All projects are made using best practices for accessibility and user experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-purple-500 hover:text-white hover:transform hover:scale-110 transition-transform">
            <h3 className="text-lg font-bold mb-2">Web Hosting</h3>
            <p>We offer fast, reliable hosting plans to boost your site's performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-purple-500 hover:text-white hover:transform hover:scale-110 transition-transform">
            <h3 className="text-lg font-bold mb-2">Maintenance</h3>
            <p>Create a custom maintenance package and pass off those time-sinking tasks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-purple-500 hover:text-white hover:transform hover:scale-110 transition-transform">
            <h3 className="text-lg font-bold mb-2">Site Redesign</h3>
            <p>Have a website already? It's time for an update! Let us help!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesTypes;
