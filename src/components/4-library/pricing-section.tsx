import { IconCheck, IconCross } from "@/ui";

// list items with icon
function ListItem({ label, ok = true }: { label: string; ok?: boolean; }) {
    return (
        <div className="1w-max truncate flex items-center gap-x-4">
            {ok ? <IconCheck className="shrink-0 size-6 text-brand-green" /> : <IconCross className="shrink-0 size-6 text-brand-red" />}
            <div className="">{label}</div>
        </div>
    );
}

// colored top half
function PriceTag({ label, pages, price }: { label: string; pages: string; price: string; }) {
    return (
        <div className="py-16 text-center text-white bg-brand-green rounded-3xl">
            <h1 className="text-2xl font-semibold tracking-widest uppercase">{label}</h1>
            <p><span className="text-4xl font-semibold">{pages}</span></p>
            <div className="font-medium">{price}</div>
        </div>
    );
}

const cardClasses = "flex-1 lg:max-w-96 bg-white rounded-3xl md:hover:scale-105 transition-transform shadow-xl";


function PricingSection() {
    return (
        <section className="bg-gray-100 flex flex-col items-center justify-center">

            <h2 className="mb-24">
                <span className="text-brand-purple uppercase">SiteLlama</span> Packages
            </h2>

            <div className="px-12 w-full flex flex-col md:flex-row items-center justify-center gap-4">

                {/* Basic Card */}
                <div className={cardClasses}>
                    <PriceTag label="Basic" pages="1 Page" price="starting at $600" />
                    <div className="text-2xl bg-white rounded-3xl p-8">
                        <ListItem label="Domain migration" />
                        <ListItem label="Single Page Website" />
                        <ListItem label="3 Design Revisions" ok={false} />
                        <ListItem label="Social Media Integration" />
                        <ListItem label="Mobile Friendly Design" />
                        <ListItem label="1 Contact Form" />
                        <ListItem label="Integrated Google Analytics" />
                        <ListItem label="Web Strategy - Sale Funnel" />
                        <ListItem label="Web Strategy - SEO" />
                        <ListItem label="Web Strategy - KPI's" />
                        <ListItem label="GDPR/CCPA Compliance" />
                        <ListItem label="WCAG level A Compliance" />
                        <ListItem label="Launch Day Support" />
                        <ListItem label="1 Week Follow Up" ok={false} />
                    </div>
                </div>

                {/* Startup Card */}
                <div className={cardClasses}>
                    <PriceTag label="Standard" pages="2-5 Pages" price="starting at $3500" />
                    <div className="text-2xl bg-white rounded-3xl p-8">
                        <ListItem label="Hosting & Domain migration" />
                        <ListItem label="Single Page Website" />
                        <ListItem label="3 Design Revisions" ok={false} />
                        <ListItem label="Social Media Integration" />
                        <ListItem label="Mobile Friendly Design" />
                        <ListItem label="1 Contact Form" />
                        <ListItem label="Integrated Google Analytics" />
                        <ListItem label="Web Strategy - Sale Funnel" />
                        <ListItem label="Web Strategy - SEO" />
                        <ListItem label="Web Strategy - KPI's" />
                        <ListItem label="GDPR/CCPA Compliance" />
                        <ListItem label="WCAG level A Compliance" />
                        <ListItem label="Launch Day Support" />
                        <ListItem label="1 Week Follow Up" ok={false} />
                    </div>
                </div>

                {/* Enterprise Card */}
                <div className={cardClasses}>
                    <PriceTag label="Premium" pages="5+ Pages" price="starting at $5000" />
                    <div className="text-2xl bg-white rounded-3xl p-8">
                        <ListItem label="Hosting & Domain migration" />
                        <ListItem label="Single Page Website" />
                        <ListItem label="3 Design Revisions" ok={false} />
                        <ListItem label="Social Media Integration" />
                        <ListItem label="Mobile Friendly Design" />
                        <ListItem label="1 Contact Form" />
                        <ListItem label="Integrated Google Analytics" />
                        <ListItem label="Web Strategy - Sale Funnel" />
                        <ListItem label="Web Strategy - SEO" />
                        <ListItem label="Web Strategy - KPI's" />
                        <ListItem label="GDPR/CCPA Compliance" />
                        <ListItem label="WCAG level A Compliance" />
                        <ListItem label="Launch Day Support" />
                        <ListItem label="1 Week Follow Up" ok={false} />
                    </div>
                </div>

            </div>

            {/* 11 */}
        </section>
    );
}

export default PricingSection;
