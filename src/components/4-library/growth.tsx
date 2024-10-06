import { ArrowRight } from '@/ui';
import llamaTech2d from '../../../src/assets/llama-tech-2-desktop-v2.webp';
import viewMoreWork from '../../../src/assets/view-more-work.webp';
import llamaTech1d from '../../../src/assets/llama-tech-1-desktop.webp';
import llamaTech1m from '../../../src/assets/llama-tech-1-mobile.webp';


function Growth() {
    return (
        <section className="w-full" id='growth'>
            <div className='w-[90%] m-auto text-xl'>
                <h2 className="text-center text-brand-blue dark:text-blue-400 mb-16 mt-4">
                    How <span className="text-brand-teal">Llama Tech</span> Helps <br></br> <span className="md:whitespace-nowrap">Businesses Grow</span>
                </h2>
                <div className="flex items-center justify-center flex-col md:flex-row md:space-x-4 md:mb-8">
                    <p className="bg-brand-green-light text-zinc-600 font-semibold py-4 px-6 rounded-full w-[65%] text-center md:max-w-fit">GET DISCOVERED</p>
                    <ArrowRight className="size-8 stroke-brand-purple rotate-90 md:rotate-0 text-gray-500" /> {/* Right-pointing arrow */}
                    <p className="bg-brand-green-light text-zinc-600 font-semibold py-4 px-6 rounded-full w-[65%] text-center md:max-w-fit">BUILD TRUST</p>
                    <ArrowRight className="size-8 stroke-brand-purple rotate-90 md:rotate-0 text-gray-500" /> {/* Right-pointing arrow */}
                    <p className="bg-brand-green-light text-zinc-600 font-semibold py-4 px-6 rounded-full w-[65%] text-center md:max-w-fit">ENGAGE CLIENTS</p>
                </div>
                <div className="bg-gradient-to-tl shadow-lg from-brand-green to-brand-green-light p-4 md:p-10 rounded-3xl max-w-5xl mx-auto mt-16 md:mt-32 text-white">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-[-6rem]">
                        <div className="mr-[-10rem] font-bold uppercase">
                            <div>small business</div>
                            <div className="text-5xl">big goals</div>
                        </div>
                        <img src={llamaTech1d} alt="sample of custom web design work on a desktop" className="hidden md:block max-w-[80%]" />
                        <img src={llamaTech1m} alt="sample of custom web design work on a desktop" className=" md:hidden align-end mt-8" />
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap items-center justify-between mt-16">
                        <div className="md:order-2 md:w-[46%] text-center md:text-right">
                            <h4 className="text-xl font-bold mb-2 uppercase">Why is a website important?</h4>
                            {/* <p className="mb-4">
                                In a nutshell, good websites look appealing, are fast, answer user questions, are accessible and easy to navigate, can be found by search engines and most importantly - they should enhance your business!
                            </p> */}
                            <p className="mb-4">Websites boost a businesses visibility, credibility and accessibility. Your site acts as a hub for information. It shows potential customers who you are, what you offer and allows them to engage with you 24/7.</p>
                        </div>
                        <div className=" md:order-1 self-center md:w-[54%]">
                            <img className="max-w-[75%] md:max-w-[80%] mb-4 mt-8 md:mt-0" src={llamaTech2d} alt="sample of responsive web design work on a tablet and phone" />
                        </div>
                    </div>
                    <img className="w-5/6 md:w-3/6 mx-auto -mt-[2rem]" src={viewMoreWork} alt="sample of responsive web design work on a tablet and phone"></img>
                    <div className="text-center md:text-left mt-16 mb-4">
                        <h4 className="text-xl font-bold mb-2 uppercase">Picking the right team</h4>

                        <p className="mb-4">Your developement team should optimize your site for user experience and performance by using web best practices - and that's exactly what we do best!  </p>
                        
                        <p className="mb-4">
                            Our team members approach your site with the know-how gained from years working with enterprise level companies such as <span className="text-brand-purple font-bold">Disney</span>, <span className="text-brand-purple font-bold ">Target</span>, <span className="text-brand-purple font-bold">Facebook</span> and <span className="text-brand-purple font-bold">more</span>.
                        </p>

                        <p className="mb-4">
                            We work with you to determine your business goals, timeline and budget. Leave the techy stuff to the llama herd, we've got you covered!
                        </p>

                        <div className='flex justify-center md:justify-start !text-sm'>
                            <a href='#contact' className="flex justify-center items-center leading-light bg-brand-purple btn px-4">
                                Let's Start Today
                                <ArrowRight className="inline-block ml-3 stroke-3 text-brand-white size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Growth;
