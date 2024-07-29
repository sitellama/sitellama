import techLeft from '../../../src/assets/tech-bg-left-m.webp';

const cardClasses = "\
relative \
p-8 \
bg-gray-50 \
hover:bg-brand-purple \
hover:text-white \
hover:transform \
hover:scale-110 \
transition-transform \
rounded-3xl \
shadow-md \
";

const headerClasses = "\
text-lg font-bold \
mb-2 \
text-zinc-600 \
before:content-empty \
before:block \
before:inset-0 \
before:absolute \
hover:text-white";

function Body() {
    return (
        <div className="max-w-[1000px] mx-auto w-[90%] md:w-full mt-8 mb-8">
            <div className="text-center">
                <h2 className="text-brand-teal mb-8">Llama Technology</h2>
                <p className="text-zinc-700 mt-2 font-semibold">Not sure what you need? Send us a message and we'll help you figure it out!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-16 text-center">
                <div className={cardClasses}>
                    <h3 className={headerClasses}>Branding</h3>
                    <p>From logos to establishing new brand identities, our graphic design team does it all.</p>
                </div>
                <div className={cardClasses}>
                    <h3 className={headerClasses}>Web Development</h3>
                    <p>We specialize in building the backend bells and whistles that result in superior site performance.</p>
                </div>
                <div className={cardClasses}>
                    <h3 className={headerClasses}>Web Design</h3>
                    <p>All projects are made using best practices for accessibility and user experience.</p>
                </div>
                <div className={cardClasses}>
                    <h3 className={headerClasses}>Web Hosting</h3>
                    <p>We offer fast, reliable hosting plans to boost your site's performance.</p>
                </div>
                <div className={cardClasses}>
                    <h3 className={headerClasses}>Maintenance</h3>
                    <p>Create a custom maintenance package and pass off those time-sinking tasks.</p>
                </div>
                <div className={cardClasses}>
                    <h3 className={headerClasses}>Site Redesign</h3>
                    <p>Have a website already? It's time for an update! Let us help!</p>
                </div>
            </div>
        </div>
    );
}

const sectionClasses = "\
relative \
m-auto \
mt-4 \
md:-mb-4 \
\
pt-12 pb-16 md:px-0 md:pb-20 \
\
bg-zinc-100";

export function LlamaTechnology() {
    return (
        <section className={sectionClasses} id="services">
            <img src={techLeft} alt="" className="absolute left-0 top-0 w-1/3 md:w-[10%]" />
            <img src={techLeft} alt="" className="absolute right-0 bottom-0 w-1/3 md:w-[10%] rotate-180" />
            <Body />
        </section>
    );
}
