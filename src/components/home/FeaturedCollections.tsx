import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import sofasImage from "@/assets/collection-sofas.jpg";
import chairsImage from "@/assets/collection-chairs.jpg";
import tablesImage from "@/assets/collection-tables.jpg";
import bedsImage from "@/assets/collection-beds.jpg";

const collections = [
  { name: "Sofas", image: sofasImage, category: "sofas" },
  { name: "Chairs", image: chairsImage, category: "chairs" },
  { name: "Tables", image: tablesImage, category: "tables" },
  { name: "Beds", image: bedsImage, category: "beds" },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Featured Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of premium furniture, crafted with precision and designed for timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.category}
              to={`/shop?category=${collection.category}`}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex items-end justify-center pb-6">
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                      {collection.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
