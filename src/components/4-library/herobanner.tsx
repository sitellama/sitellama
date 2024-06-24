import React, { useEffect, useState } from "react";
import mascot from "../../assets/mobile-development-hero.png";

function HeroBanner() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const containerStyles = "\
    w-full \
    bg-gradient-to-br from-grad-hero-top to-grad-hero-bottom \
    py-16 md:py-32 mx-auto flex flex-col lg:flex-row items-center justify-evenly";

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // Set the timeout to 1 second (1000 milliseconds)

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    return (
        <section className={containerStyles}>
            <div className="max-w-lg relative">
                <div className="text-center text-white">
                    <div className={`mt-10 md:mt-20 px-3 ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} delay-[200ms]`}>
                        <h1 className="text-[3rem] md:text-[76px] font-mono font-bold uppercase leading-none ">In
                            <span className="text-brand-purple"> need </span>
                            of a website?</h1>
                    </div>
                    <div className={`md:mt-0 mt-10 px-3 ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}`}>
                        <p className="text-[40px] font-mono font-bold md:mb-8">No Prob-llama!</p>
                    </div>
                    <div className="flex gap-x-4 text-center">
                        <a className="btn bg-brand-green text-black" href="">Learn More</a>
                        <a className="btn bg-brand-purple text-white" href="">Get Started</a>
                    </div>
                </div>
                <div className="md:mt-0 mt-10 relative grid place-content-end">
                    <img
                        src={mascot}
                        alt="Logo"
                        className={`h-112 ${isLoaded ? 'opacity-100 scale-100 rotate-0 transition-all duration-500 delay-1000' : 'opacity-0 scale-50 rotate-12 translate-x-[-50%] translate-y-[-50%] transition-all duration-500'}`}
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
        </section>
    );
}

export default HeroBanner;
