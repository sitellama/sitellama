import React, { useState } from 'react';

function ServicesDescriptionCopy() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <section className="mt-16 flex flex-col">
            {/* row 1 */}
            <div className='flex justify-end'>
                <div className="flex w-[90%] 3xl:w-full 2xl:justify-end">
                    <div className="bg-brand-blue mr-8 p-10 rounded-3xl hidden md:block">
                        <img src="src\assets\tech-icon1.png" alt="" className="max-w-[150px]" />
                    </div>
                    <div className="bg-brand-blue bg-intro-left bg-contain bg-no-repeat bg-right p-8 rounded-l-3xl flex">
                        <div className="lg:max-w-[90%]">
                            <h2 className="text-white text-3xl">Time To Stand Out From The Herd</h2>
                            <div className="lg:max-w-[75%]">
                                <p className="text-white">We make small businesses look good. Sure, you could grab a template and sprinkle in some keywords, but what about site speed? Mobile-friendly design? SEO? Sitellama takes care of the details so you can focus on what you do best - running your business!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="flex mt-16 justify-start">
                <div className="flex w-[90%]">
                    <div className="bg-brand-blue bg-intro-right bg-contain bg-no-repeat p-8 rounded-r-3xl flex justify-end">
                        <div className="lg:max-w-[75%]">
                            <h2 className="text-white text-3xl" >All Business, No Dramma</h2>
                            <p className="text-white">There's no drama with Sitellama. Our clients' sites are built with purpose. Whether you need a simple landing page or a jaw-dropping, multi-page masterpiece to showcase your work, Sitellama creates custom websites that prioritize your business's needs.</p>
                        </div>
                    </div>
                    <div className="bg-brand-blue ml-8 p-10 rounded-3xl hidden md:block">
                        <img src="src\assets\tech-icon2.png" alt="" className="max-w-[150px]" />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ServicesDescriptionCopy;
