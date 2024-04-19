import { SEO } from "../../utils/seo";
import HeroBanner from "../4-library/herobanner";
import PriceSection from "../4-library/pricing-section";
import ServicesSection from "../4-library/services-section";
import { WorkWithUs } from "../4-library/work-with-us";

export function Home() {
  return (
    <>
        <SEO title="Home Page" description="This is the home page" href="/" />

        <div>Home</div>

        <HeroBanner />
        <ServicesSection />
        <PriceSection />
        <WorkWithUs />
    </>
  )
}
