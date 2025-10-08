import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Project Phoenix</h3>
            <p className="text-sm text-primary-foreground/80">
              Crafting spaces that inspire. Premium furniture and bespoke interior design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/shop?category=sofas" className="hover:text-accent transition-colors">Sofas</Link></li>
              <li><Link to="/shop?category=chairs" className="hover:text-accent transition-colors">Chairs</Link></li>
              <li><Link to="/shop?category=tables" className="hover:text-accent transition-colors">Tables</Link></li>
              <li><Link to="/shop?category=beds" className="hover:text-accent transition-colors">Beds</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Join the Phoenix Tribe</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe for exclusive offers and design inspiration.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Project Phoenix. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Currency: ₦ NGN</span>
            <span>|</span>
            <span>$ USD</span>
            <span>|</span>
            <span>€ EUR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
