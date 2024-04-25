import React, { useEffect, useState } from "react";

function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Set the timeout to 1 second (1000 milliseconds)
    
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-400 py-16 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly">
        <div className="">
          <div className={`text-left md:text-left text-black md:mt-0 mt-10 px-3 ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} delay-[2000ms]`}>
            <h1 className="text-[120px] font-mono font-bold mb-4">Site Llama</h1>
          </div>
          <div className={`text-left md:text-center text-white md:mt-0 mt-10 px-3 ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}`}>
            <p className="text-[40px] font-mono font-bold mb-8">Need a Website? No Problama!</p>
          </div>
        </div>
        <div className="md:mt-0 mt-10 relative">
          <img
            src="src\assets\llamamascot1.webp"
            alt="Logo"
            className={`h-72 rounded-[150px] ${isLoaded ? 'opacity-100 scale-100 rotate-0 transition-all duration-500 delay-1000' : 'opacity-0 scale-50 rotate-12 translate-x-[-50%] translate-y-[-50%] transition-all duration-500'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          {isHovered && (
            <div className="absolute top-0 left-0 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-black font-semibold">Llama says</p>
              <p>"I just got my dipllama"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
