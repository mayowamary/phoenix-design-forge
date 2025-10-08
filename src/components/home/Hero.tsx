import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Elevate Your Space
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-up opacity-90">
          Discover handcrafted furniture and bespoke interior design that transforms houses into homes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Link to="/shop">
            <Button size="lg" variant="secondary" className="text-base px-8 shadow-gold">
              Shop Now
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              View Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
