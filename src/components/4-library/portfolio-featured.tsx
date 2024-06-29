import { ArrowLeft, ArrowRight } from "@/ui";

export function PortfolioFeatured(
    {
        recentWork,
        recentWorkAlt,
        projectOneImgSrc,
        projectOneImgAlt,
        projectOneName,
        projectOneQuickFacts,
        projectOneDesc,
        projectOneDescSR,
        projectTwoImgSrc,
        projectTwoImgAlt,
        projectTwoName,
        projectTwoQuickFacts,
        projectTwoDesc,
        projectTwoDescSR
    }
        :
        {
            recentWork: string;
            recentWorkAlt: string;
            projectOneImgSrc: string;
            projectOneImgAlt: string;
            projectOneName: string;
            projectOneQuickFacts: string;
            projectOneDesc: string;
            projectOneDescSR: string;
            projectTwoImgSrc: string;
            projectTwoImgAlt: string;
            projectTwoName: string;
            projectTwoQuickFacts: string;
            projectTwoDesc: string;
            projectTwoDescSR: string;
        }) {
    return (
        <section className="">

            <div>
                <h2 className="text-center my-8">Recent Work</h2>
                <img src={recentWork} alt={recentWorkAlt} className="-mb-12 mx-auto w-full max-w-[1200px]" />
            </div>


            <div className="bg-gradient-to-br from-grad-blue-top to-brand-teal pt-24 pb-12">
                <div>
                    <div className="mx-auto flex flex-col md:flex-row items-center max-w-[1200px]">
                        <img src={projectOneImgSrc} alt={projectOneImgAlt} className="w-11/12 md:w-3/6" />
                        <div className="p-5 text-center md:text-left">
                            <p className="uppercase text-white text-sm">{projectOneQuickFacts}</p>
                            <h3 className="text-white font-headings text-xl  py-4">{projectOneName}</h3>
                            <p className="text-white">{projectOneDesc}</p>
                            <a className="flex justify-center leading-light bg-brand-green btn" target="_blank" href="https://s6horses.com/">
                                Visit Live Site
                                <span className="sr-only">{projectOneDescSR}</span>
                                <ArrowRight className="inline-block ml-3 stroke-3 text-brand-purple size-4" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-auto flex flex-col md:flex-row items-center max-w-[1200px]">
                        <img src={projectTwoImgSrc} alt={projectTwoImgAlt} className="w-11/12 md:w-3/6 md:order-2 mt-[100px] md:mt-[0px]" />
                        <div className="p-5 text-center md:text-left">
                            <p className="uppercase text-white text-sm">{projectTwoQuickFacts}</p>
                            <h3 className="text-white font-headings text-xl  py-4">{projectTwoName}</h3>
                            <p className="text-white">{projectTwoDesc}</p>
                            <a className="flex justify-center leading-light bg-brand-green-light btn" target="_blank" href="https://kcrafts.net/">
                                Visit Live Site
                                <span className="sr-only">{projectTwoDescSR}</span>
                                <ArrowRight className="inline-block ml-3 stroke-3 text-brand-purple size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}