import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProductSection from "@/components/ProductSection";
import OtherProductsSection from "@/components/OtherProductsSection";
import NematodesSection from "@/components/NematodesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import LogisticsSection from "@/components/LogisticsSection";
import SupportSection from "@/components/SupportSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AuthoritySection />
        <ProductSection />
        <NematodesSection />
        <DifferentialsSection />
        <LogisticsSection />
        <SupportSection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection />
        <GallerySection />
        <OtherProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
