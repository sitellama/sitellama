import React, { useEffect, useState } from "react";

function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Set the timeout to 1 second (1000 milliseconds)
    
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="bg-white py-16 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly">
        <div className="">
          <div className={`text-left md:text-left text-white md:mt-0 mt-10 bg-purple-400 rounded-[60px] px-3 ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} delay-[1500ms]`}>
            <h1 className="text-[120px] font-mono font-bold mb-4">Site Llama</h1>
          </div>
          <div className={`text-left md:text-left text-white md:mt-0 mt-10 bg-purple-400 rounded-[60px] px-3 ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} delay-[1500ms]`}>
            <p className="text-[40px] font-mono font-bold mb-8">Need a Website? No Problama!</p>
          </div>
        </div>
        <div className="md:mt-0 mt-10">
          <img
            src="src\assets\llamamascot1.webp"
            alt="Logo"
            className={`h-72 rounded-[150px] ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
