import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedCollections />
        <PortfolioPreview />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
