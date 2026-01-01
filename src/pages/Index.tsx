import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Import images
import heroImage from "@/assets/hero-photography.jpg";
import aboutImage from "@/assets/about-photographer.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import contactImage from "@/assets/contact-image.jpg";

const Index = () => {
  const portfolioImages = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero heroImage={heroImage} />
      <Portfolio images={portfolioImages} />
      <About aboutImage={aboutImage} />
      <Services />
      <Contact contactImage={contactImage} />
      <Footer />
    </div>
  );
};

export default Index;
