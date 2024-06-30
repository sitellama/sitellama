import React, { useEffect, useState } from "react";
import mascotSm from "../../assets/mobile-development-hero-centered.png";
import mascotLg from "../../assets/mobile-development-hero.png";
import { ArrowRight } from "@/ui";

function HeroBanner() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const sectionStyles = "\
    w-full \
    bg-gradient-to-br from-grad-hero-top to-grad-hero-bottom \
    py-16 md:pt-32 mb-24 md:mb-16 mx-auto \
    rounded-b-3xl \
    flex justify-center \
    md:relative \
    ";

    const imgStyles = `md:object-contain mt-4 md:mt-0 relative md:absolute md:right-0 lg:right-auto md:bottom-[-4rem] md:max-h-[360px]\
    ${isLoaded ? 'opacity-100 scale-100 rotate-0 transition-all duration-500' : 'opacity-0 scale-50 rotate-12 translate-x-[-50%] translate-y-[-50%] transition-all duration-500'}`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // Set the timeout to 1 second (1000 milliseconds)

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    return (
        <section className={sectionStyles}>
            <div className="flex flex-col md:flex-row w-[85%] max-w-[980px]">

                <div className="w-full text-center text-white flex flex-col items-center">
                    <div className={`mt-10 md:mt-0 px-3 md:w-[90%] ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} delay-[200ms]`}>
                        <h1 className="px-10 md:px-2 text-[3rem] font-mono font-bold uppercase leading-none tracking-tight">In
                            <span className="text-brand-purple"> need </span>
                            of <span className="whitespace-nowrap"> a website?</span>
                        </h1>
                    </div>
                    <div className={` mt-4 md:mt-0 mb-4 px-3 ${isLoaded ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}`}>
                        <p className="text-[28px] font-mono md:mb-8">No Prob-llama!</p>
                    </div>
                    <div className="flex justify-center gap-x-4 text-center w-[100%]">
                        <a className="w-[170px] btn bg-brand-purple text-white mt-0 px-4" href="#growth">
                            View Services
                            <ArrowRight className="hidden md:inline-block ml-3 stroke-3 text-white size-4" />
                        </a>
                        <a className="w-[170px] btn bg-brand-green-light text-black mt-0 px-4" href="#contact">
                            Book A Call
                            <ArrowRight className="hidden md:inline-block ml-3 stroke-3 text-brand-purple size-4" />
                        </a>
                    </div>
                </div>

                {/* <div className="mb-[-10rem] xxl:mb-[-12rem] md:mb-0 flex flex-col lg:flex-row xxl:relative md:w-full justify-end"> */}
                <div className=" mb-[-10rem] md:mb-[-4] flex flex-col md:w-full justify-end">
                    <picture>
                        <source media="(min-width:768px)" srcSet={mascotLg} />
                        <img src={mascotSm} alt="Logo" className={imgStyles} ></img>
                    </picture>
                </div>

            </div>
        </section>
    );
}

export default HeroBanner;
