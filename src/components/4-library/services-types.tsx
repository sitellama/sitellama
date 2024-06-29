import { useState } from "react";

function ServicesTypes() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="bg-zinc-100 pt-12 pb-16 md:pb-20 mt-4 md:-mb-4 px-4 md:px-0
        bg-[url(src/assets/tech-bg-left-m.png),url(src/assets/tech-bg-right-m.png)] [background-size:30%,30%] md:[background-size:10%,10%]
         bg-no-repeat [background-position:left_top,right_bottom]" id="services">
            <div className="max-w-[1000px] mx-auto  mt-8 mb-8">
                <div className="text-center">
                    <h2 className="text-brand-teal mb-8">Llama Technology</h2>
                    <p className="text-zinc-700 mt-2">Not sure what you need? Send us a message and we'll help you figure it out!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-16 text-center">
                    <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:bg-brand-purple hover:text-white hover:transform hover:scale-105 transition-transform relative">
                        <h3 className="text-lg font-bold mb-2 text-zinc-600 before:content-empty before:block before:inset-0 before:absolute hover:text-white">Branding</h3>
                        <p>From logos to establishing new brand identities, our graphic design team does it all.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:bg-brand-purple hover:text-white hover:transform hover:scale-105 transition-transform relative">
                        <h3 className="text-lg font-bold mb-2 text-zinc-600 before:content-empty before:block before:inset-0 before:absolute hover:text-white">Web Development</h3>
                        <p>We specialize in building the backend bells and whistles that result in superior site performance.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:bg-brand-purple hover:text-white hover:transform hover:scale-105 transition-transform relative">
                        <h3 className="text-lg font-bold mb-2 text-zinc-600 before:content-empty before:block before:inset-0 before:absolute hover:text-white">Web Design</h3>
                        <p>All projects are made using best practices for accessibility and user experience.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:bg-brand-purple hover:text-white hover:transform hover:scale-105 transition-transform relative">
                        <h3 className="text-lg font-bold mb-2 text-zinc-600 before:content-empty before:block before:inset-0 before:absolute hover:text-white">Web Hosting</h3>
                        <p>We offer fast, reliable hosting plans to boost your site's performance.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:bg-brand-purple hover:text-white hover:transform hover:scale-105 transition-transform relative">
                        <h3 className="text-lg font-bold mb-2 text-zinc-600 before:content-empty before:block before:inset-0 before:absolute hover:text-white">Maintenance</h3>
                        <p>Create a custom maintenance package and pass off those time-sinking tasks.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:bg-brand-purple hover:text-white hover:transform hover:scale-105 transition-transform relative">
                        <h3 className="text-lg font-bold mb-2 text-zinc-600 before:content-empty before:block before:inset-0 before:absolute hover:text-white">Site Redesign</h3>
                        <p>Have a website already? It's time for an update! Let us help!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesTypes;
