import React from 'react';

function LlamaTech() {
    return (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
            How Llama Tech Helps Businesses Grow
          </h1>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-full">GET DISCOVERED</button>
            <div className="flex items-center">
              <span className="text-gray-500">&#8594;</span> {/* Right-pointing arrow */}
            </div>
            <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-full">BUILD TRUST</button>
            <div className="flex items-center">
              <span className="text-gray-500">&#8594;</span> {/* Right-pointing arrow */}
            </div>
            <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-full">ENGAGE CLIENTS</button>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-200 p-6 rounded-lg">
            <div className="flex flex-col items-center lg:space-x-8">
              <div className="flex-1 mb-6 lg:mb-0">
                <h2 className="text-white text-xl font-bold mb-2">SMALL BUSINESS</h2>
                <h3 className="text-white text-3xl font-bold mb-4">BIG GOALS</h3>
                <img src="src\assets\llama-tech-1-desktop.png" alt="Desktop view" className="mx-auto lg:mx-0 mb-4 lg:mb-0" />
              </div>
              <div className="flex-1 lg:flex lg:items-start lg:space-x-4">
                <img src="src/assets/llama-tech-2-desktop.png" alt="Tablet view" className="lg:w-1/2 mb-4 lg:mb-0" />
                <div className="lg:w-1/2">
                  <h4 className="text-white text-xl font-bold mb-2">WHAT MAKES A ‘GOOD’ WEBSITE?</h4>
                  <p className="text-white mb-4">
                    In a nutshell, good websites look appealing, are fast, answer user questions, are accessible and easy to navigate, can be found by search engines and most importantly - they should enhance your business!
                  </p>
                </div>
              </div>            </div>
            <div className="mt-8">
              <h4 className="text-white text-xl font-bold mb-2">BUILDING A GOOD WEBSITE</h4>
              <p className="text-white mb-4">
                We work with you to determine your business goals, timeline and budget. Leave all the techy stuff to us, we’ve got you covered.
              </p>
              <p className="text-white mb-4">
                Our team members approach your site with the know-how gained from years working with enterprise level companies such as Disney, Target, Facebook and more.
              </p>
              <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full mt-4">
                Lets Get Started →
              </button>
            </div>
          </div>
        </div>
      );
    }
export default LlamaTech;
