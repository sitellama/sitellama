export function PortfolioImgLeft({
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
        <div className="flex flex-col items-center w-screen sm:flex-row bg-gray-400">
            <img src={projectImgSrc} alt={projectImgAlt} className="w-1/2 max-h-[500px] object-cover" />
            <div className="w-1/2 p-5 bg-gray-400" >
                <h3>{projectName}</h3>
                <p className="uppercase">{projectQuickFacts}</p>
                <p>{projectDesc}</p>
                <a className="inline-block bg-purple-500 p-4 rounded-md">Visit Live Site</a>
            </div>
        </div>
    );
}