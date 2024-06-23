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
                <img src={recentWork} alt={recentWorkAlt} className="-mb-12 mx-auto max-w-[1200px]" />
            </div>


            <div className="bg-gradient-to-br from-grad-blue-top to-grad-blue-bottom pt-24">
                <div>
                    <div className="mx-auto flex">
                        <img src={projectOneImgSrc} alt={projectOneImgAlt} />
                        <div className="p-5">
                            <h3>{projectOneName}</h3>
                            <p className="uppercase">{projectOneQuickFacts}</p>
                            <p>{projectOneDesc}</p>
                            <a className="bg-brand-green  btn">Visit Live Site<span className="sr-only">{projectOneDescSR}</span></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-auto max-w-6xl grid grid-cols-2">
                        <div className="header3 p-5">
                            <h3>{projectTwoName}</h3>
                            <p className="uppercase">{projectTwoQuickFacts}</p>
                            <p>{projectTwoDesc}</p>
                            <a className="bg-brand-green-light btn">Visit Live Site<span className="sr-only">{projectTwoDescSR}</span></a>
                        </div>
                        <img src={projectTwoImgSrc} alt={projectTwoImgAlt} />
                    </div>
                </div>
            </div>

        </section>
    );
}