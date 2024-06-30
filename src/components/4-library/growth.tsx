import { ArrowRight } from '@/ui';
import React from 'react';
import llamaTech2d from '../../../src/assets/llama-tech-2-desktop-v2.png';
import viewMoreWork from '../../../src/assets/view-more-work.png';
import llamaTech1d from '../../../src/assets/llama-tech-1-desktop.png';
import llamaTech1m from '../../../src/assets/llama-tech-1-mobile.png';

function Growth() {
    return (
        <section className="px-4 md:px-0" id='growth'>
            <h2 className="text-center text-brand-blue dark:text-blue-400 mb-16 mt-4">
                How <span className="text-brand-teal">Llama Tech</span> Helps <br></br> <span className="md:whitespace-nowrap">Businesses Grow</span>
            </h2>

            <div className="flex justify-center items-center flex-col md:flex-row md:space-x-4 md:mb-8">
                <p className="bg-brand-green-light text-zinc-600 font-semibold py-4 px-6 rounded-full w-[65%] text-center md:max-w-fit">GET DISCOVERED</p>
                <p className="flex items-center">
                    <p className="text-gray-500"><ArrowRight className="size-8 stroke-brand-purple rotate-90 md:rotate-0" /></p> {/* Right-pointing arrow */}
                </p>
                <p className="bg-brand-green-light text-zinc-600 font-semibold py-4 px-6 rounded-full w-[65%] text-center md:max-w-fit">BUILD TRUST</p>
                <p className="flex items-center">
                    <p className="text-gray-500"><ArrowRight className="size-8 stroke-brand-purple rotate-90 md:rotate-0" /></p> {/* Right-pointing arrow */}
                </p>
                <p className="bg-brand-green-light text-zinc-600 font-semibold py-4 px-6 rounded-full w-[65%] text-center md:max-w-fit">ENGAGE CLIENTS</p>
            </div>

            <div className="bg-gradient-to-tl shadow-lg from-brand-green to-brand-green-light p-4 md:p-10 rounded-3xl max-w-[1000px] mx-auto mt-16 md:mt-32">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-[-6rem]">
                    <div className="mr-[-10rem] flex flex-col align-start">
                        {/* <p className="text-brand-teal uppercase font-bold">helping</p> */}
                        <p className="text-white text-xl font-bold">SMALL BUSINESS</p>
                        {/* <p className="text-brand-teal uppercase font-bold">achieve</p> */}
                        <p className="text-white text-5xl font-bold">BIG GOALS</p>
                    </div>
                    <img src={llamaTech1d} alt="sample of web design work on a laptop" className="hidden md:block max-w-[80%]" />
                    {/* <img src="src/assets/llama-tech-1-desktop.png" alt="sample of web design work on a laptop" className="hidden md:block max-w-[80%]" /> */}
                    <img src={llamaTech1m} alt="sample of web design work on a laptop" className=" md:hidden align-end mt-8" />
                    {/* <img src="src/assets/llama-tech-1-mobile.png" alt="sample of web design work on a laptop" className=" md:hidden align-end mt-8" /> */}
                </div>

                <div className="flex flex-col md:flex-row flex-wrap items-center justify-between mt-16">
                    <div className="md:order-2 md:w-[46%] text-center md:text-right">
                        <h4 className="text-white text-xl font-bold mb-2 uppercase">Why is a website important?</h4>
                        {/* <p className="text-white mb-4">
                            In a nutshell, good websites look appealing, are fast, answer user questions, are accessible and easy to navigate, can be found by search engines and most importantly - they should enhance your business!
                        </p> */}
                        <p className="text-white mb-4">Websites boost a businesses visibility, credibility and accessibility. Your site acts as a hub for information. It shows potential customers who you are, what you offer and allows them to engage with you 24/7.</p>
                    </div>
                    <div className=" md:order-1 self-center md:w-[54%]">
                        <img src={llamaTech2d} alt="sample of web design work on a tablet and phone" className=" max-w-[75%] md:max-w-[80%] mb-4 mt-8 md:mt-0" />
                        {/* <img src="src/assets/llama-tech-2-mobile.png" alt="sample of web design work on a tablet and phone" className="md:hidden mt-8 mb-4" /> */}
                    </div>
                </div>

                <div className="w-5/6 md:w-3/6 mx-auto -mt-[2rem]">
                    <img src={viewMoreWork} alt="sample of web design work on a tablet and phone"></img>
                    {/* <img src="src/assets/view-more-work.png" alt="sample of web design work on a tablet and phone"></img> */}
                </div>


                <div className="text-center md:text-left mt-16">
                    <h4 className="text-white text-xl font-bold mb-2 uppercase">Picking the right team</h4>
                    <p className="text-white mb-4">Your developement team should optimize your site for user experience and performance by using web best practices - and that's exactly what we do best!  </p>
                    <p className="text-white mb-4">
                        Our team members approach your site with the know-how gained from years working with enterprise level companies such as <span className="text-brand-purple font-bold">Disney</span>, <span className="text-brand-purple font-bold ">Target</span>, <span className="text-brand-purple font-bold">Facebook</span> and <span className="text-brand-purple font-bold">more</span>.
                    </p>
                    <p className="text-white mb-4">
                        We work with you to determine your business goals, timeline and budget. Leave the techy stuff to the llama herd, we've got you covered!
                    </p>
                    <div className='flex justify-center md:justify-start'>
                        <a href='#contact' className="flex justify-center items-center leading-light bg-purple-600 text-white font-semibold py-2 px-4 rounded-full mt-4">
                            Let's Get Started
                            <ArrowRight className="inline-block ml-3 stroke-3 text-brand-white size-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Growth;
