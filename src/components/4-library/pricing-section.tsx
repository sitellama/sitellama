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

            <h1 className="mb-24 bg-blue text-5xl font-semibold font-headings">
                <span className="text-brand-purple tracking-wide uppercase">SiteLlama </span>
                <span>Plans</span>
            </h1>

            {/* <div className="px-12 w-full grid place-content-center grid-cols-1 md:grid-cols-3 gap-4"> */}
            <div className="px-12 w-full flex flex-col md:flex-row items-center justify-center gap-4">

                {/* Basic Card */}
                <div className={cardClasses}>
                    <PriceTag label="Basic" price={10} />
                    <div className="text-2xl bg-white rounded-3xl">
                        <ListItem label="You get this" />
                        <ListItem label="You also get this!" />
                        <ListItem label="But also this too!!!!!!!!!!!!" ok={false} />
                    </div>
                </div>

                {/* Startup Card */}
                <div className={cardClasses}>
                    <PriceTag label="Enterprise" price={10} />
                    <div className="text-2xl bg-white rounded-3xl">
                        <ListItem label="You get this" />
                        <ListItem label="You also get this!" />
                        <ListItem label="But also this too!!!!!!!!!!!!" ok={false} />
                    </div>
                </div>

                {/* Enterprise Card */}
                <div className={cardClasses}>
                    <PriceTag label="Business" price={10} />
                    <div className="text-2xl bg-white rounded-3xl">
                        <ListItem label="You get this" />
                        <ListItem label="You also get this!" />
                        <ListItem label="But also this too!!!!!!!!!!!!" ok={false} />
                    </div>
                </div>

            </div>

            {/* 11 */}
        </section>
    );
}

export default PricingSection;
