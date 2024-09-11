import techIcon1 from '../../../src/assets/tech-icon1.webp';
import techIcon2 from '../../../src/assets/tech-icon2.webp';
import hexGridImg from '../../../src/assets/intro-hex-grid.webp';
import cyverLinesImg from '../../../src/assets/intro-cyber-lines.webp';

// const bgLeft = `url(${hexGridImg})`;
const bgRight = `url(${cyverLinesImg})`;

// const imgClasses = `[background-image:var(--this-image)]`;

// const inlineClasses = {
//     "--this-image": `url(${hexGridImg})`
// };

function Intro() {
    return (
        <section className="flex flex-col">

            {/* row 1 */}
            <div className='flex justify-end'>
                <div className="w-[95%] 3xl:w-full flex 2xl:justify-end gap-8">
                    <div className="bg-brand-blue p-10 rounded-3xl hidden md:flex items-center justify-center">
                        <img src={techIcon1} alt="" className="max-w-[150px]" />
                    </div>

                    <div
                        className={"p-8 bg-brand-blue rounded-l-3xl bg-no-repeat bg-cover md:bg-contain md:bg-right bg-intro-left bg-this-image"}
                        style={{ "--this-image": `url(${hexGridImg})` }}
                    >
                    {/* <div
                        className={"p-8 bg-brand-blue rounded-l-3xl "}
                    > */}
                        <div className="lg:max-w-[95%]">
                            <h2 className="text-white text-3xl">Time To Stand Out From The Herd</h2>
                            <div className="lg:max-w-[75%]">
                                <p className="text-white">We make small businesses look good. Sure, you could grab a template and sprinkle in some keywords, but what about site speed? Mobile-friendly design? SEO? Sitellama takes care of the details so you can focus on what you do best - running your business!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="flex mt-16 justify-start">
                <div className="flex w-[95%]">
                    <div className="!bg-brand-blue !bg-contain !bg-no-repeat p-8 rounded-r-3xl flex justify-end" style={{ background: bgRight }}>
                    {/* <div className="!bg-brand-blue  p-8 rounded-r-3xl flex justify-end" > */}
                        <div className="lg:max-w-[75%]">
                            <h2 className="text-white text-3xl" >All Business, No Drama</h2>
                            <p className="text-white">There's no drama with Sitellama. Our clients' sites are built with purpose. Whether you need a simple landing page or a jaw-dropping, multi-page masterpiece to showcase your work, Sitellama creates custom websites that prioritize your business's needs.</p>
                        </div>
                    </div>

                    <div className="bg-brand-blue ml-8 p-10 rounded-3xl hidden md:flex items-center justify-center">
                        <img src={techIcon2} alt="" className="max-w-[150px]" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Intro;
