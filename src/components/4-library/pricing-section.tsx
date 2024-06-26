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
        <div className={`text-center ${bgColor} rounded-3xl py-12`}>
            <h3 className="text-4xl font-semibold uppercase text-white">{label}</h3>
            <p className="text-2xl text-zinc-100">{price}</p>
            <p className="text-2xl text-zinc-100 font-semibold pt-8 pb-4">{pages}</p>
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

            <div className="px-12 w-full flex flex-col md:flex-row items-center justify-center gap-8">

                {/* Basic Card */}
                <div className={cardClasses}>
                    <PriceTag label="Standard Website" pages="1 Page" bgColor="bg-brand-green" price="starting at $600" />
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
                </div>

                {/* Startup Card */}
                <div className={cardClasses}>
                    <PriceTag label="Premium" pages="2-5 Pages" bgColor="bg-brand-purple" price="starting at $3500" />
                    <div className="text-2xl bg-white rounded-3xl p-8">
                        <ListItem label="BASIC package plus..." />
                        {/* update 'basic' color */}
                        <ListItem label="Google Analytics" />
                        <ListItem label="Personalized Website Strategy" />
                        <ListItem label="Interactive Elements" />
                        <ListItem label="1 Contact Form" />
                        <ListItem label="Personalized SEO" />
                        <ListItem label="3 Design Revisions" />
                        <ListItem label="1 Week Follow Up" />
                    </div>
                </div>

                <div>
                    <p className="text-black">* Inquire for custom pricing for sites above 5 pages</p>
                </div>

            </div>

            {/* 11 */}
        </section>
    );
}

export default PricingSection;
