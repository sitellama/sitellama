import { IconCheck, IconCross } from "@/ui";
import pricingBackground from '../../../src/assets/llama-pricing-background-v2.webp';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";


const bgImg = `url(${pricingBackground})`;

// list items with icon
function ListItem({ label, ok = true }: { label: string; ok?: boolean; }) {
    return (
        <div className="1w-max truncate flex items-center gap-x-4">
            {ok ? <IconCheck className="shrink-0 size-6 text-brand-green" /> : <IconCross className="shrink-0 size-6 text-brand-red" />}
            <div className="text-sm">{label}</div>
        </div>
    );
}

// colored top half
function PriceTag({ label, pages, bgColor, price }: { label: string; pages: string; bgColor: string; price: string; }) {
    return (
        <div className={`text-center ${bgColor} rounded-3xl py-12`}>
            <h3 className="text-4xl font-semibold uppercase text-white">{label}</h3>
            <p className="text-2xl text-zinc-100">{price}</p>
            <p className="text-2xl text-zinc-100 font-semibold pt-8 pb-4">{pages}</p>
        </div>
    );
}

// colored top half
function AccordionTop({ label, pages, price }: { label: string; pages: string; price: string; }) {
    return (
        <div className="w-full flex flex-col justify-center">
            <h3 className="text-4xl font-semibold uppercase text-white">{label}</h3>
            <p className="text-2xl text-zinc-100">{price}</p>
            <p className="text-2xl text-zinc-100 font-semibold">{pages}</p>
        </div>
    );
}

const cardClasses = "flex-1 md:max-w-96 bg-white rounded-3xl md:hover:scale-105 transition-transform shadow-xl";


function PricingSection() {
    return (
        <section className="flex flex-col items-center justify-center pt-32 mt-8 !bg-no-repeat" id="pricing" style={{ background: bgImg }}>
            <h2 className="bgImg text-center">
                <span className="text-brand-purple">Website</span> Packages
            </h2>

            <p className="text-zinc-700 mt-8 mb-8 w-[90%] text-center font-semibold">
                We offer hosting, branding and maintenance but we specialize in web development. Here are our most popular website packages. Please
                <a href="#contact" className="underline"> contact us </a>
                for prcing on other services or websites beyond 5 pages.
            </p>

            <div className="w-full bg-brand-blue flex flex-col md:flex-row items-center justify-center">
                <div className="md:max-w-5xl w-full">
                    {/* Basic Card */}
                    {/* <div className={cardClasses}>
                        <PriceTag label="Standard" pages="1 Page" bgColor="bg-brand-green" price="starting at $600" />
                        <div className="text-2xl bg-white rounded-3xl p-8">
                            <ListItem label="Domain migration" />
                            <ListItem label="Social Media Integration" />
                            <ListItem label="Mobile Friendly Design" />
                            <ListItem label="GDPR/CCPA Compliance" />
                            <ListItem label="WCAG level A Compliance" />
                            <ListItem label="Basic SEO" />
                            <ListItem label="1 Set of Revisions" />
                            <ListItem label="Launch Day Support" />
                        </div>
                    </div> */}
                    {/* Startup Card */}
                    {/* <div className={cardClasses}>
                        <PriceTag label="Premium" pages="2-5 Pages" bgColor="bg-brand-purple" price="starting at $3500" />
                        <div className="text-2xl bg-white rounded-3xl p-8">
                            <ListItem label="BASIC package plus..." />
                            <ListItem label="Google Analytics" />
                            <ListItem label="Custom Website Strategy" />
                            <ListItem label="Interactive Elements" />
                            <ListItem label="1 Contact Form" />
                            <ListItem label="Personalized SEO" />
                            <ListItem label="3 Design Revisions" />
                            <ListItem label="1 Week Follow Up" />
                        </div>
                    </div> */}

                    {/* <Accordion type="single" collapsible className="w-half"> */}
                    <Accordion type="single" collapsible className="w-half bg-brand-green">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <AccordionTop label="Standard" pages="1 Page" price="starting at $600" />
                            </AccordionTrigger>

                            <AccordionContent className="text-2xl bg-white rounded-3xl p-8">
                                <ListItem label="Domain migration" />
                                <ListItem label="Social Media Integration" />
                                <ListItem label="Mobile Friendly Design" />
                                <ListItem label="GDPR/CCPA Compliance" />
                                <ListItem label="WCAG level A Compliance" />
                                <ListItem label="Basic SEO" />
                                <ListItem label="1 Set of Revisions" />
                                <ListItem label="Launch Day Support" />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you
                                prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>


        </section>
    );
}

export default PricingSection;
