import { SEO } from "../../utils/seo";
import HeroBanner from "../4-library/herobanner";
import PriceSection from "../4-library/pricing-section";
import { WorkWithUs } from "../4-library/work-with-us";
import { PortfolioImgLeft } from "../4-library/portfolio-img-left";
import { PortfolioImgRight } from "../4-library/portfolio-img-right";
import s6Horses from "../../assets/placeholder-hero-img.webp";
import LlamaTech from "../4-library/llamatech";
import ServicesDescription from "../4-library/service-descriptions";
import ServiceTypes from "../4-library/services-types";

export function Home() {
    return (
        <>
            <SEO title="Home Page" description="This is the home page" href="/" />

            <div>Home</div>

            <HeroBanner />
            <ServicesDescription />
            <ServiceTypes />
            <LlamaTech />
            <PriceSection />
            <WorkWithUs />
            <PortfolioImgLeft
                projectImgSrc={s6Horses}
                projectImgAlt="s6 horses website"
                projectName="S6 Horses"
                projectQuickFacts="Website Design | Custom Development | Editable Content"
                projectDesc="This is a description - yay! We did so good!"
            />
            <PortfolioImgRight
                projectImgSrc={s6Horses}
                projectImgAlt="s6 horses website"
                projectName="S6 Horses"
                projectQuickFacts="Website Design | Custom Development | Editable Content"
                projectDesc="This is a description - yay! We did so good!"
            />
        </>
    );
}
