import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import sofasImage from "@/assets/collection-sofas.jpg";
import chairsImage from "@/assets/collection-chairs.jpg";
import tablesImage from "@/assets/collection-tables.jpg";
import bedsImage from "@/assets/collection-beds.jpg";

// Mock product data
const products = [
  { id: 1, name: "Modern Beige Sofa", price: 1200, category: "sofas", image: sofasImage, material: "Fabric", color: "Beige" },
  { id: 2, name: "Elegant Dining Chair", price: 250, category: "chairs", image: chairsImage, material: "Wood", color: "Natural Oak" },
  { id: 3, name: "Live Edge Console Table", price: 800, category: "tables", image: tablesImage, material: "Wood", color: "Walnut" },
  { id: 4, name: "Luxury Upholstered Bed", price: 1500, category: "beds", image: bedsImage, material: "Fabric", color: "Beige" },
  { id: 5, name: "Modular Sectional Sofa", price: 2000, category: "sofas", image: sofasImage, material: "Leather", color: "Brown" },
  { id: 6, name: "Mid-Century Armchair", price: 450, category: "chairs", image: chairsImage, material: "Velvet", color: "Cream" },
];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-subtle py-12 border-b">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">Shop Furniture</h1>
            <p className="text-muted-foreground">Discover our complete collection of premium pieces</p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <aside className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Category</h3>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="sofas">Sofas</SelectItem>
                      <SelectItem value="chairs">Chairs</SelectItem>
                      <SelectItem value="tables">Tables</SelectItem>
                      <SelectItem value="beds">Beds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={2500}
                    step={50}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Sort By</h3>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </aside>

              {/* Product Grid */}
              <div className="lg:col-span-3">
                <div className="mb-4 flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredProducts.length} products
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-0">
                        <Link to={`/product/${product.id}`}>
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </Link>
                        <div className="p-4">
                          <Link to={`/product/${product.id}`}>
                            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mb-2">
                            {product.material} • {product.color}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">${product.price.toLocaleString()}</span>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => handleAddToCart(product.name)}
                            >
                              <ShoppingCart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
