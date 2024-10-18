import { IconCheck, IconCross } from "@/ui";
import pricingBackground from '../../../src/assets/llama-pricing-background-v2.webp';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";
import viewMoreWork from '../../../src/assets/view-more-work.webp';

const bgImg = `url(${pricingBackground})`;

// list items with icon
function ListItem({ label, ok = true }: { label: string; ok?: boolean; }) {
    return (
        <li className="1w-max truncate flex items-center gap-x-2 md:gap-x-4">
            {ok ? <IconCheck className="shrink-0 size-6 text-brand-green self-start" /> : <IconCross className="shrink-0 size-6 text-brand-red" />}
            <div className="text-sm text-wrap">{label}</div>
        </li>
    );
}

// colored top half
function PriceTag({ label, pages, bgColor, price }: { label: string; pages: string; bgColor: string; price: string; }) {
    return (
        <div className={`text-center ${bgColor} rounded-3xl py-12`}>
            <h3 className="text-2xl font-semibold capitalize text-white">{label}</h3>
            <p className="text-2xl text-zinc-100">{price}</p>
            <p className="text-2xl text-zinc-100 font-semibold pt-8 pb-4">{pages}</p>
        </div>
    );
}

// colored top half
function AccordionTop({ label, pages, price }: { label: string; pages: string; price: string; }) {
    return (
        <div className="w-full flex flex-col justify-center">
            <h3 className="text-2xl font-semibold capitalize text-white ">{label}</h3>
            <p className="text-2xl text-zinc-100">{price}</p>
            <p className="text-2xl text-zinc-100 font-semibold">{pages}</p>
        </div>
    );
}

const cardClasses = "flex-1 md:max-w-96 bg-white rounded-3xl md:hover:scale-105 transition-transform shadow-xl";

function PricingSection() {
    return (
        <section className="flex flex-col items-center justify-center pt-36 mt-8 mb-8 !bg-no-repeat" id="pricing" style={{ background: bgImg }}>
            <h2 className="bgImg text-center">
                <span className="text-brand-purple">Website</span> Packages
            </h2>

            <p className="text-zinc-700 mt-8 mb-8 w-[90%] xl:max-w-5xl text-center font-semibold">
                We offer hosting, branding and maintenance but we specialize in web development. Here are our most popular packages. For a quote on your custom project, please
                <a href="#contact" className="underline"> contact us </a>
                for pricing.
            </p>

            <div className="w-full mx-4 pt-6 pb-8">
                {/* <div className="flex flex-col md:flex-row items-center justify-center"> */}
                <Accordion type="multiple" className="flex flex-col items-center justify-center gap-6 w-full max-w-[90%] xl:max-w-5xl m-auto">

                    {/*=== ALWAYS INCLUDED ===*/}
                    <AccordionItem value="item-1" className="w-full m-auto bg-white rounded-3xl">
                        <AccordionTrigger className="bg-brand-purple-light rounded-3xl">
                            <AccordionTop label="Always included" pages="" price="" />
                        </AccordionTrigger>

                        <AccordionContent className="text-2xl bg-white rounded-3xl p-4 md:p-8">
                            {/* <p>No web project should go without: </p> */}
                            <ul className="md:columns-2">
                                <ListItem label="Business strategy call" />
                                <ListItem label="Basic SEO analysis" />
                                <ListItem label="Domain migration" />
                                <ListItem label="Mobile friendly design" />
                                <ListItem label="Social media integration" />
                                <ListItem label="Royalty free stock images" />
                                <ListItem label="GDPR/CCPA compliance" />
                                <ListItem label="WCAG level A compliance" />
                                <ListItem label="Minimum 1 set of revisions" />
                                <ListItem label="Launch day support" />
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* ===LANDING PAGE=== */}
                    <AccordionItem value="item-2" className="w-full m-auto bg-white rounded-3xl">
                        {/* <AccordionTrigger className="bg-brand-blue rounded-3xl"> */}
                        <AccordionTrigger className="bg-[#7f3f98] rounded-3xl">
                            <AccordionTop label="Landing Pages" pages="" price="" />
                        </AccordionTrigger>

                        <AccordionContent className="text-2xl bg-white rounded-3xl p-4 md:p-8">
                            <p className="pb-4"><span className="font-bold uppercase">Who it's for: </span> Landing pages are perfect for new businesses owners needing results on a budget.</p>
                            <p className="pb-4"><span className="font-bold uppercase">What it is:</span> A landing page is a simple one page website that organizes your most important content into a purposeful, results-driven design. These single page websites typically focus on a specific goal, such as capturing leads, promoting a product, or encouraging sign-ups.</p>
                            <div className="">
                                <p className="pb-4"><span className="font-bold uppercase">What's included:</span></p>
                                <ul className="md:columns-2">
                                    <ListItem label="The 'Always Included' services" />
                                    <ListItem label="Landing page custom design" />
                                    <ListItem label="Sales funnel strategy" />
                                    <ListItem label="2 Sets of revisions" />
                                    <ListItem label="1 Contact form" />
                                    <ListItem label="Not Included: Branding, Copywriting" ok={false} />
                                </ul>
                            </div>
                            <p className="pt-4"><span className="font-bold uppercase">Price:</span> Starting at $600</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* ===WEBSITES=== */}
                    <AccordionItem value="item-3" className="w-full m-auto bg-white rounded-3xl">
                        {/* <AccordionTrigger className="bg-brand-orange rounded-3xl"> */}
                        <AccordionTrigger className="bg-[#651abf] rounded-3xl">
                            <AccordionTop label="Websites" pages="" price="" />
                        </AccordionTrigger>

                        <AccordionContent className="text-2xl bg-white rounded-3xl p-4 md:p-8">
                            <h3 className="text-center pb-8">Core Website</h3>
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:basis-2/4">
                                    <p className="pb-4"><span className="font-bold uppercase">Who it's for: </span> A core website is great for just about any small business beginning to establish their online presence.</p>
                                    <p className="pb-4"><span className="font-bold uppercase">What it is:</span> Core websites are all business, no drama. They have all the essentials that a website needs to feel complete. Pages usually included are home page, services page, about us page, contact page and 1 business specific content page. </p>
                                    <p className="pt-4"><span className="font-bold uppercase">Price:</span> starting at $3500</p>
                                    {/* <img className="w-5/6 md:w-5/6 mx-auto mt-[2rem]" src={viewMoreWork} alt="sample of responsive web design work on a tablet and phone"></img> */}
                                </div>

                                <div className="md:basis-2/4 bg-gray-200 p-4 rounded-xl h-fit">
                                    {/* <div className="h-4 bg-gradient-to-r from-[#0ce14f] from-4% via-[#00cad0] via-50% to-[#2e50ff] to-96%"></div> */}
                                    <p className="pb-4"><span className="font-bold uppercase">What's included:</span></p>
                                    <ul>
                                        <ListItem label="The 'Always Included' services" />
                                        <ListItem label="2-5 page custom website design" />
                                        <ListItem label="Custom website strategy" />
                                        <ListItem label="3 Sets of revisions" />
                                        <ListItem label="Google Analytics integration" />
                                        <ListItem label="Personalized on-page SEO" />
                                        <ListItem label="1 Contact form" />
                                        <ListItem label="Privacy policy template page" />
                                        <ListItem label="1 Week follow up support" />
                                        <ListItem label="Not Included: branding, copywriting" ok={false} />
                                    </ul>

                                </div>
                            </div>

                            {/* <div className="mt-4 mb-4 h-2 bg-gradient-to-r from-[#0ce14f] from-4% via-[#00cad0] via-50% to-[#2e50ff] to-96%"></div> */}
                            <div className="mt-8 mb-8 h-2 bg-gradient-to-r from-[#8eda52] from-4% via-[#00cad0] via-50% to-[#651abf] to-96%"></div>

                            <h3 className="text-center pb-8">Deluxe Website</h3>
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:basis-2/4">
                                    <p className="pb-4"><span className="font-bold uppercase">Who it's for: </span> A deluxe website is perfect for any business looking to get found online.</p>
                                    <p className="pb-4"><span className="font-bold uppercase">What it is:</span> Deluxe websites are truely the whole package. They are full service websites tailored to your businesses services, products, and strategies. It's time to stand out from the herd!</p>
                                    <p className="pt-4"><span className="font-bold uppercase">Price:</span> starting at $5000</p>
                                </div>

                                <div className="md:basis-2/4  bg-gray-200 p-4 rounded-xl h-fit">
                                    {/* <div className="h-4 bg-gradient-to-r from-[#0ce14f] from-4% via-[#00cad0] via-50% to-[#2e50ff] to-96%"></div> */}
                                    <p className="pb-4"><span className="font-bold uppercase">What's included:</span></p>
                                    <ul className="">
                                        <ListItem label="The 'Always Included' services" />
                                        <ListItem label="The 'Core Website' services" />
                                        <ListItem label="5+ page custom website design" />
                                        <ListItem label="5 Sets of revisions" />
                                        <ListItem label="1 Additional form" />
                                        <ListItem label="Google maps integration" />
                                        <ListItem label="Not Included: branding, copywriting" ok={false} />
                                    </ul>
                                </div>

                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* ===HOSTING=== */}
                    <AccordionItem value="item-4" className="w-full m-auto bg-white rounded-3xl">
                        {/* <AccordionTrigger className="bg-brand-purple-light rounded-3xl"> */}
                        <AccordionTrigger className="bg-[#270d97] rounded-3xl">
                            <AccordionTop label="Hosting & features" pages="" price="" />
                        </AccordionTrigger>

                        <AccordionContent className="text-2xl bg-white rounded-3xl p-4 md:p-8">
                            <p className="pb-4 text-center"><span className="font-bold uppercase">$10/month HOSTING</span></p>
                            <p className="pb-4 text-center">Reliable website hosting along with domain registration and domain migration.</p>
                            <ul className="md:columns-3">
                                <ListItem label="99.9% uptime" />
                                <ListItem label="cPanel access" />
                                <ListItem label="Free SSL certificate" />
                            </ul>

                            <div className="mt-8 mb-8 h-2 bg-gradient-to-r from-[#8eda52] from-4% via-[#00cad0] via-50% to-[#651abf] to-96%"></div>

                            <p className="pt-8 pb-4 text-center"><span className="font-bold uppercase">WEBSITE FEATURES - OPTIONAL ADD ONS </span></p>
                            <ul className="md:columns-3">
                                <li className="text-sm">Interactive elements</li>
                                <li className="text-sm">Animations</li>
                                <li className="text-sm">Video Banners</li>
                                <li className="text-sm">Chatbot Setup</li>
                                <li className="text-sm">Newletter integration</li>
                                <li className="text-sm">Event Calendars</li>
                                <li className="text-sm">Appoitment booking integration</li>
                                <li className="text-sm">Menu integration</li>
                                <li className="text-sm">and more!</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default PricingSection;
