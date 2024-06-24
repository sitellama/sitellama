import { SEO } from "../../utils/seo";
import HeroBanner from "../4-library/herobanner";
import PriceSection from "../4-library/pricing-section";
import { WorkWithUs } from "../4-library/work-with-us";
import { PortfolioFeatured } from "../4-library/portfolio-featured";
import { ContactForm } from "../4-library/contact-form";
import mascot from "../../assets/llama_mascot-form.png";
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
                projectOneImgAlt="screenshots from S6 Ranch website"
                projectOneName="S6 Ranch"
                projectOneQuickFacts="Website Design &#x2022; Custom Development &#x2022; Editable Content"
                projectOneDesc="S6 Ranch combines elite horse training with the warmth of a family ranch. The owners wanted an elegant website that showscased their love for the community, and that's exactly what we delivered."
                projectOneDescSR="for S6 Ranch"

                projectTwoImgSrc={kcrafts}
                projectTwoImgAlt="screenshots from Kcrafts website"
                projectTwoName="Kcrafts"
                projectTwoQuickFacts="Wordpress &#x2022; Branding &#x2022; E-commerce &#x2022; Blog"
                projectTwoDesc="Kcrafts handcrafts beautiful crystal jewelry and the owner wanted a branded, sales-driven website. We dove deep into SEO and marketing strategy to deliver a complete branding suite and a top-notch e-commerce site."
                projectTwoDescSR="for Kcrafts"
            />

            <ContactForm
                mascot={mascot} mascotAlt="anything"
            />
        </>
    );
}
