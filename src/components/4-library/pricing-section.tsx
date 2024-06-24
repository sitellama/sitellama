import { IconCheck, IconCross } from "@/ui";

function ListItem({ label, ok = true }: { label: string; ok?: boolean; }) {
    return (
        <div className="1w-max truncate flex items-center gap-x-4">
            {ok ? <IconCheck className="shrink-0 size-6 text-brand-green" /> : <IconCross className="shrink-0 size-6 text-brand-red" />}
            <div className="">{label}</div>
        </div>
    );
}

function PriceTag({ label, price }: { label: string; price: number; }) {
    return (
        <div className="py-8 text-center text-white bg-brand-green rounded-3xl">
            <h1 className="text-2xl font-semibold tracking-widest uppercase">{label}</h1>
            <p>
                <span className="text-4xl leading-loose text-gray-200 align-top">$ </span>
                <span className="text-8xl font-semibold">{price}</span>
            </p>
            <div className="font-medium">per month</div>
        </div>
    );
}

const cardClasses = "flex-1 lg:max-w-96 bg-white rounded-3xl md:hover:scale-105 transition-transform shadow-xl";

function PricingSection() {
    return (
        <section className="bg-gray-100 flex flex-col items-center justify-center">

            <h2 className="mb-24 bg-blue text-5xl font-semibold font-headings">
                <span className="text-brand-purple tracking-wide uppercase">SiteLlama </span>
                <span>Plans</span>
            </h2>

            {/* <div className="px-12 w-full grid place-content-center grid-cols-1 md:grid-cols-3 gap-4"> */}
            <div className="px-12 w-full flex flex-col md:flex-row items-center justify-center gap-4">

                {/* Basic Card */}
                <div className={cardClasses}>
                    <PriceTag label="Basic" price={10} />
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

                {/* Startup Card */}
                <div className={cardClasses}>
                    <PriceTag label="Enterprise" price={10} />
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
                    <PriceTag label="Business" price={10} />
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
