import { ArrowRight } from '@/ui';
import React from 'react';

function LlamaTech() {
    return (
        <section>
            <h2 className="text-center text-brand-blue dark:text-blue-400 mb-8">
                How <span className="text-brand-teal">Llama Tech</span> Helps <br></br> <span className="md:whitespace-nowrap">Businesses Grow</span>
            </h2>

            <div className="flex justify-center flex-col md:flex-row space-x-4 mb-8">
                <p className="bg-brand-green-light text-zinc-600 font-semibold py-4 px-6 rounded-full max-w-fit">GET DISCOVERED</p>
                <p className="flex items-center">
                    <span className="text-gray-500">&#8594;</span> {/* Right-pointing arrow */}
                </p>
                <p className="bg-brand-green-light text-zinc-600 font-semibold py-4 px-6 rounded-full max-w-fit">BUILD TRUST</p>
                <p className="flex items-center">
                    <span className="text-gray-500">&#8594;</span> {/* Right-pointing arrow */}
                </p>
                <p className="bg-brand-green-light text-zinc-600 font-semibold py-4 px-6 rounded-full max-w-fit">ENGAGE CLIENTS</p>
            </div>

            <div className="bg-gradient-to-tl shadow-lg from-brand-green to-brand-green-light p-10 rounded-3xl max-w-[1000px] mx-auto mt-[8rem]">
                <div className="flex flex-col md:flex-row justify-between items-center mt-[-6rem] pb-[5rem]">
                    <div className="mr-[-10rem]">
                        <p className="text-white text-xl font-bold mb-2">SMALL BUSINESS</p>
                        <p className="text-white text-5xl font-bold mb-4">BIG GOALS</p>
                    </div>
                    <img src="src\assets\llama-tech-1-desktop.png" alt="sample of web design work on a laptop" className="hidden md:block max-w-[80%]" />
                    <img src="src\assets\llama-tech-1-mobile.png" alt="sample of web design work on a laptop" className=" md:hidden max-w-[80%]" />
                </div>

                <div className="flex flex-col md:flex-row pb-[5rem]">
                    <div className="md:order-1">
                        <h4 className="text-white text-xl font-bold mb-2">WHAT MAKES A ‘GOOD’ WEBSITE?</h4>
                        <p className="text-white mb-4">
                            In a nutshell, good websites look appealing, are fast, answer user questions, are accessible and easy to navigate, can be found by search engines and most importantly - they should enhance your business!
                        </p>
                    </div>
                    <div className="relative">
                        <img src="src/assets/llama-tech-2-desktop.png" alt="sample of web design work on a tablet and phone" className="hidden md:block max-w-[80%] mb-4" />
                        <img src="src/assets/llama-tech-2-mobile.png" alt="sample of web design work on a tablet and phone" className="md:hidden max-w-[80%] mb-4" />
                    </div>
                </div>


                <div className="mt-8">
                    <h4 className="text-white text-xl font-bold mb-2">BUILDING A GOOD WEBSITE</h4>
                    <p className="text-white mb-4">
                        We work with you to determine your business goals, timeline and budget. Leave all the techy stuff to us, we’ve got you covered.
                    </p>
                    <p className="text-white mb-4">
                        Our team members approach your site with the know-how gained from years working with enterprise level companies such as Disney, Target, Facebook and more.
                    </p>
                    <div className='flex justify-center'>
                        <button className="flex justify-center items-center leading-light bg-purple-600 text-white font-semibold py-2 px-4 rounded-full mt-4">
                            Let's Get Started
                            <ArrowRight className="inline-block ml-3 stroke-3 text-brand-white size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default LlamaTech;
