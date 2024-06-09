import { SEO } from "../../utils/seo";
import HeroBanner from "../4-library/herobanner";
import PriceSection from "../4-library/pricing-section";
import ServicesSection from "../4-library/services-section";
import { WorkWithUs } from "../4-library/work-with-us";
import { PortfolioImgLeft } from "../4-library/portfolio-img-left";
import { PortfolioImgRight } from "../4-library/portfolio-img-right";
import s6Horses from "../../assets/placeholder-hero-img.webp";

export function Home() {
    return (
        <>
            <SEO title="Home Page" description="This is the home page" href="/" />

            <HeroBanner />
            <ServicesSection />
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
