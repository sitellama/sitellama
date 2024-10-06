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
                We offer hosting, branding and maintenance but we specialize in web development. Here are our most popular website packages. Please
                <a href="#contact" className="underline"> contact us </a>
                for prcing on other services or websites beyond 5 pages.
            </p>

            <div className="w-full mx-4 pt-6 pb-8">
                {/* <div className="flex flex-col md:flex-row items-center justify-center"> */}
                <Accordion type="multiple" className="flex flex-col items-center justify-center gap-6 w-full max-w-[90%] xl:max-w-5xl m-auto">
                    <AccordionItem value="item-1" className="w-full m-auto bg-white rounded-3xl">
                        {/* <AccordionTrigger className="bg-brand-green rounded-3xl"> */}
                        <AccordionTrigger className="bg-brand-purple-light rounded-3xl">
                            <AccordionTop label="Always included" pages="" price="" />
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

                    <AccordionItem value="item-2" className="w-full m-auto bg-white rounded-3xl">
                        {/* <AccordionTrigger className="bg-brand-blue rounded-3xl"> */}
                        <AccordionTrigger className="bg-[#7f3f98] rounded-3xl">
                            <AccordionTop label="Landing Pages" pages="" price="" />
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

                    <AccordionItem value="item-3" className="w-full m-auto bg-white rounded-3xl">
                        {/* <AccordionTrigger className="bg-brand-orange rounded-3xl"> */}
                        <AccordionTrigger className="bg-[#651abf] rounded-3xl">
                            <AccordionTop label="Premium Websites" pages="" price="" />
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

                    <AccordionItem value="item-4" className="w-full m-auto bg-white rounded-3xl">
                        {/* <AccordionTrigger className="bg-brand-purple-light rounded-3xl"> */}
                        <AccordionTrigger className="bg-[#270d97] rounded-3xl">
                            <AccordionTop label="Hosting & features" pages="" price="" />
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
                </Accordion>
            </div>
        </section>
    );
}

export default PricingSection;
