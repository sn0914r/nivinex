import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function LandingPage() {
    return(
        <>
            <Header/>
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <PortfolioSection/>
            {/* <TestimonialsSection/> */}
            <ContactSection/>
            <Footer/>
        </>
    )
}