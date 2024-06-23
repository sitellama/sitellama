import { SEO } from "../../utils/seo";
import HeroBanner from "../4-library/herobanner";
import PriceSection from "../4-library/pricing-section";
import { WorkWithUs } from "../4-library/work-with-us";
import { PortfolioFeatured } from "../4-library/portfolio-featured";
import recentWork from "../../assets/recent-work.png";
import s6Horses from "../../assets/portfolio1.png";
import kcrafts from "../../assets/portfolio2.png";
import LlamaTech from "../4-library/llamatech";
import ServicesDescription from "../4-library/service-descriptions";
import ServiceTypes from "../4-library/services-types";

export function Home() {
    return (
        <>
            <SEO title="Home Page" description="This is the home page" href="/" />

            <HeroBanner />
            <ServicesDescription />
            <ServiceTypes />
            <LlamaTech />
            <PriceSection />
            <WorkWithUs />

            <PortfolioFeatured
                recentWork={recentWork}
                recentWorkAlt="example of website on different media"

                projectOneImgSrc={s6Horses}
                projectOneImgAlt="S6 Ranch website"
                projectOneName="S6 Ranch"
                projectOneQuickFacts="Website Design | Custom Development | Editable Content"
                projectOneDesc="This is a description - yay! We did so good!"
                projectOneDescSR="for S6 Ranch"

                projectTwoImgSrc={kcrafts}
                projectTwoImgAlt="s6 horses website"
                projectTwoName="S6 Horses"
                projectTwoQuickFacts="Website Design | Custom Development | Editable Content"
                projectTwoDesc="This is a description - yay! We did so good!"
                projectTwoDescSR="for Kcrafts"
            />
        </>
    );
}
