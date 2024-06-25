import { IconCheck, IconCross } from "@/ui";

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
        <div className={`text-center ${bgColor} rounded-3xl py-24`}>
            <h3 className="text-2xl font-semibold tracking-widest uppercase text-white">{label}</h3>
            {/* <p className="text-5xl font-semibold pt-8 pb-4">{pages}</p> */}
            <p className="text-2xl text-zinc-100">{price}</p>
        </div>
    );
}

const cardClasses = "flex-1 lg:max-w-96 bg-white rounded-3xl md:hover:scale-105 transition-transform shadow-xl";


function PricingSection() {
    return (
        <section className="bg-gray-100 flex flex-col items-center justify-center">

            <h2 className="mb-24 mt-24">
                <span className="text-brand-purple uppercase">SiteLlama</span> Packages
            </h2>

            <div className="px-12 w-full flex flex-col md:flex-row items-center justify-center gap-4">

                {/* Basic Card */}
                <div className={cardClasses}>
                    <PriceTag label="Basic" pages="1 Page" bgColor="bg-brand-green" price="starting at $600" />
                    <div className="text-2xl bg-white rounded-3xl p-8">
                        <ListItem label="Single Page Website" />
                        <ListItem label="Domain migration" />
                        <ListItem label="Social Media Integration" />
                        <ListItem label="Mobile Friendly Design" />
                        <ListItem label="1 Contact Form" />
                        <ListItem label="GDPR/CCPA Compliance" />
                        <ListItem label="WCAG level A Compliance" />
                        <ListItem label="Launch Day Support" />
                        <ListItem label="1 Week Follow Up" />
                        <ListItem label="3 Design Revisions" ok={false} />
                        <ListItem label="Google Analytics" ok={false} />
                        <ListItem label="Strategy - Sale Funnel" ok={false} />
                        <ListItem label="Strategy - SEO" ok={false} />
                        <ListItem label="Strategy - KPI's" ok={false} />
                    </div>
                </div>

                {/* Startup Card */}
                <div className={cardClasses}>
                    <PriceTag label="Standard" pages="2-5 Pages" bgColor="bg-brand-purple" price="starting at $3500" />
                    <div className="text-2xl bg-white rounded-3xl p-8">
                        <ListItem label="Single Page Website" />
                        <ListItem label="Domain migration" />
                        <ListItem label="Social Media Integration" />
                        <ListItem label="Mobile Friendly Design" />
                        <ListItem label="1 Contact Form" />
                        <ListItem label="GDPR/CCPA Compliance" />
                        <ListItem label="WCAG level A Compliance" />
                        <ListItem label="Launch Day Support" />
                        <ListItem label="1 Week Follow Up" />
                        <ListItem label="3 Design Revisions" ok={false} />
                        <ListItem label="Google Analytics" ok={false} />
                        <ListItem label="Strategy - Sale Funnel" />
                        <ListItem label="Strategy - SEO" />
                        <ListItem label="Strategy - KPI's" />
                    </div>
                </div>

                {/* Enterprise Card */}
                <div className={cardClasses}>
                    <PriceTag label="Premium" pages="5+ Pages" bgColor="bg-brand-teal" price="starting at $5000" />
                    <div className="text-2xl bg-white rounded-3xl p-8">
                        <ListItem label="Single Page Website" />
                        <ListItem label="Domain migration" />
                        <ListItem label="Social Media Integration" />
                        <ListItem label="Mobile Friendly Design" />
                        <ListItem label="1 Contact Form" />
                        <ListItem label="GDPR/CCPA Compliance" />
                        <ListItem label="WCAG level A Compliance" />
                        <ListItem label="Launch Day Support" />
                        <ListItem label="1 Week Follow Up" />
                        <ListItem label="3 Design Revisions" />
                        <ListItem label="Google Analytics" />
                        <ListItem label="Strategy - Sale Funnel" />
                        <ListItem label="Strategy - SEO" />
                        <ListItem label="Strategy - KPI's" />
                    </div>
                </div>

            </div>

            {/* 11 */}
        </section>
    );
}

export default PricingSection;
