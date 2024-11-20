import { SEO } from "../../utils/seo";
import { HeroBanner } from "../4-library/herobanner";
import PriceSection from "../4-library/pricing-section";
import { PortfolioFeatured } from "../4-library/portfolio-featured";
import { ContactForm } from "../4-library/contact-form";
import mascot from "../../assets/llama_mascot-form.webp";
import recentWork from "../../assets/recent-work.webp";
import s6Horses from "../../assets/portfolio1.webp";
import kcrafts from "../../assets/portfolio2.webp";
import bsf from "../../assets/portfolio3.webp";
import Growth from "../4-library/growth";
import Intro from "../4-library/intro";
import { LlamaTechnology } from "../4-library/llama-technology";
import Carousel from "../4-library/carousel";

export function Home() {
    return (
        <>
            <SEO title="Home | Sitellama" description="We build custom websites with fast speeds, great user experiences and that meet your business needs." href="https:www.sitellama.com/" />

            <HeroBanner />

            <Intro />

            <LlamaTechnology />

            {/* <LazyAnimation> */}
            <Growth />
            {/* </LazyAnimation> */}

            <PortfolioFeatured
                recentWork={recentWork}
                recentWorkAlt="example of responsive website on different screen sizes"

                projectOneImgSrc={s6Horses}
                projectOneImgAlt="screenshots from S6 Ranch website, designed and built by Sitellama"
                projectOneName="S6 Ranch"
                projectOneQuickFacts="Website Design &#x2022; Custom Development &#x2022; Editable Content"
                projectOneDesc="S6 Ranch combines elite horse training with the warmth of a family ranch. The owners wanted an elegant website that showscased their love for the community, and that's exactly what we delivered."
                projectOneDescSR="for S6 Ranch"

                // projectTwoImgSrc={kcrafts}
                // projectTwoImgAlt="screenshots from Kcrafts website, designed and built by Sitellama"
                // projectTwoName="Kcrafts"
                // projectTwoQuickFacts="Wordpress &#x2022; Branding &#x2022; E-commerce &#x2022; Blog"
                // projectTwoDesc="Kcrafts handmakes beautiful crystal jewelry. The owner was looking for a branded, sales-driven website. We dove deep into SEO and marketing strategy to deliver a complete branding suite and a top-notch e-commerce site."
                // projectTwoDescSR="for Kcrafts"

                projectTwoImgSrc={bsf}
                projectTwoImgAlt="screenshots from Kcrafts website, designed and built by Sitellama"
                projectTwoName="Blue Shamrock Farm"
                projectTwoQuickFacts="Website Design &#x2022; Custom Development &#x2022; Search & Filter"
                projectTwoDesc="Blue Shamrock Farm is a fast growing hobby farm that was struggling to highlight their many different services. By focusing on user experience (UX) design strategies we were able to provide a beautifully cohesive, easy to navigate website."
                projectTwoDescSR="for Kcrafts"
            />

            <Carousel />

            <PriceSection />

            <ContactForm
                mascot={mascot} mascotAlt="llama mascot for Sitellama LLC"
            />
        </>
    );
}
