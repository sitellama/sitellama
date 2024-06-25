import React, { useEffect, useState } from "react";
import mascot from "../../assets/mobile-development-hero-cropped.png";

function HeroBanner() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const sectionStyles = "\
    w-full \
    bg-gradient-to-br from-grad-hero-top to-grad-hero-bottom \
    py-16 md:pt-32 mx-auto \
    rounded-b-3xl \
    flex justify-center";

    const imgStyles = `mt-4 md:mt-0 relative md:absolute md:max-h-[360px] md:-bottom-[8rem]\
    ${isLoaded ? 'opacity-100 scale-100 rotate-0 transition-all duration-500 delay-1000' : 'opacity-0 scale-50 rotate-12 translate-x-[-50%] translate-y-[-50%] transition-all duration-500'}`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // Set the timeout to 1 second (1000 milliseconds)

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    return (
        <section className={sectionStyles}>
            <div className="flex flex-col md:flex-row w-[80%] max-w-[980px]">

                <div className="w-full text-center text-white lg:w-auto">
                    <div className={`mt-10 md:mt-0 px-3 ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} delay-[200ms]`}>
                        <h1 className="px-10 md:px-2 text-[3rem] font-mono font-bold uppercase leading-none tracking-tight">In
                            <span className="text-brand-purple"> need </span>
                            of <span className="whitespace-nowrap"> a website?</span>
                        </h1>
                    </div>
                    <div className={` mt-4 md:mt-0 mb-4 px-3 ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}`}>
                        <p className="text-[28px] font-mono md:mb-8">No Prob-llama!</p>
                    </div>
                    <div className="flex justify-center gap-x-4 text-center w-[100%]">
                        <a className="w-fit btn bg-brand-green text-black mt-0 px-6" href="">Learn More</a>
                        <a className="w-fit btn bg-brand-purple text-white mt-0 px-6" href="">Get Started</a>
                    </div>
                </div>

                <div className="mb-[-10rem] md:mb-0 flex flex-col lg:flex-row md:relative md:w-full justify-end">
                    <img
                        src={mascot}
                        alt="Logo"
                        className={imgStyles}
                    // onMouseEnter={() => setIsHovered(true)}
                    // onMouseLeave={() => setIsHovered(false)}
                    />
                    {/* {isHovered && (
                        <div className="absolute top-0 left-0 bg-white p-4 rounded-lg shadow-lg">
                            <p className="text-black font-semibold">Llama says</p>
                            <p>"I just got my dipllama"</p>
                        </div>
                    )} */}
                </div>

            </div>
        </section>
    );
}

export default HeroBanner;
