import Hero from "../components/Hero";
import CompanyIntro from "../components/CompanyIntro";
import FeaturedServices from "../components/FeaturedServices";
import ProjectHighlights from "../components/ProjectHighlights";
import Testimonials from "../components/Testimonials";

function Home() {
    return (
        <>
            <Hero />
            <CompanyIntro />
            <FeaturedServices />
            {/* <ProjectHighlights /> */}
            {/* <Testimonials /> */}
        </>
    );
}

export default Home;