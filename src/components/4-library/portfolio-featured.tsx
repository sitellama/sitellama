export function PortfolioFeatured(
    {
        recentWork,
        recentWorkAlt,
        projectOneImgSrc,
        projectOneImgAlt,
        projectOneName,
        projectOneQuickFacts,
        projectOneDesc,
        projectTwoImgSrc,
        projectTwoImgAlt,
        projectTwoName,
        projectTwoQuickFacts,
        projectTwoDesc
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
            projectTwoImgSrc: string;
            projectTwoImgAlt: string;
            projectTwoName: string;
            projectTwoQuickFacts: string;
            projectTwoDesc: string;
        }) {
    return (
        <section className="">

            <div>
                <img src={recentWork} alt={recentWorkAlt} className="-mb-12 mx-auto max-w-[1200px]" />
            </div>


            <div className="bg-gradient-to-br from-grad-blue-top to-grad-blue-bottom pt-24">
                <div>
                    <div className="mx-auto max-w-6xl grid grid-cols-2">
                        <img src={projectOneImgSrc} alt={projectOneImgAlt} />
                        <div className="p-5">
                            <h3>{projectOneName}</h3>
                            <p className="uppercase">{projectOneQuickFacts}</p>
                            <p>{projectOneDesc}</p>
                            <a className="inline-block bg-brand-green p-4 rounded-md">Visit Live Site</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mx-auto max-w-6xl grid grid-cols-2">
                        <div className="p-5">
                            <h3>{projectTwoName}</h3>
                            <p className="uppercase">{projectTwoQuickFacts}</p>
                            <p>{projectTwoDesc}</p>
                            <a className="inline-block bg-brand-green-light p-4 rounded-md">Visit Live Site</a>
                        </div>
                        <img src={projectTwoImgSrc} alt={projectTwoImgAlt} />
                    </div>
                </div>
            </div>

        </section>
    );
}