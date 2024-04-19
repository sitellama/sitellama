import React from "react";

function HeroBanner() {
	return (
		<div className="bg-purple-400 py-8 md:py-16">
		  <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly">
			<div className="text-center md:text-left text-white md:mt-0 mt-10">
			  <h1 className="text-8xl md:text-6xl font-bold mb-4">Site Llama</h1>
			  <p className="text-lg md:text-xl mb-8">Need a Website? No Problama!</p>
			</div>
			<div className="md:mt-0 mt-10">
			  <img
				src="src\assets\placeholder-hero-img.webp"
				alt="Logo"
				className="h-52 md:h-32"
			  />
			</div>
		  </div>
		</div>
	  );
	}

export default HeroBanner;