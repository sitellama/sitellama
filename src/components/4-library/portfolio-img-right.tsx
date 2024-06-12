export function PortfolioImgRight({
    projectImgSrc,
    projectImgAlt,
    projectName,
    projectQuickFacts,
    projectDesc }: {
        projectImgSrc: string;
        projectImgAlt: string;
        projectName: string;
        projectQuickFacts: string;
        projectDesc: string;
    }) {
    return (
        <div className="mx-auto max-w-6xl grid grid-cols-2">
            <div className="p-5 bg-gray-400">
                <h3>{projectName}</h3>
                <p className="uppercase">{projectQuickFacts}</p>
                <p>{projectDesc}</p>
                <a className="inline-block bg-purple-500 p-4 rounded-md">Visit Live Site</a>
            </div>
            <img src={projectImgSrc} alt={projectImgAlt} />
        </div>
    );
}