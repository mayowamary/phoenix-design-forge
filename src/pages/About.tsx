import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-subtle py-16 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              About Project Phoenix
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Crafting exceptional spaces through timeless design and premium furniture.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for exceptional design, Project Phoenix emerged from a vision to transform how people experience their living spaces. We believe that every home tells a story, and furniture is the language through which that story unfolds.
                </p>
                <p>
                  Our journey began with a simple mission: to curate and create furniture pieces that marry timeless elegance with contemporary functionality. Each piece in our collection is carefully selected or crafted to meet the highest standards of quality and aesthetic appeal.
                </p>
                <p>
                  Today, Project Phoenix stands as a testament to our commitment to excellence. From our humble beginnings to becoming a trusted name in furniture and interior design, we've never wavered from our core values of quality, authenticity, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Quality First</h3>
                  <p className="text-sm text-muted-foreground">
                    We source and create only the finest pieces, ensuring durability and timeless beauty in every product.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Customer Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our priority. We're dedicated to providing exceptional service and personalized experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Design Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team brings years of expertise to create spaces that inspire and delight, balancing form and function.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To elevate everyday living through exceptional furniture and thoughtful interior design. 
                We strive to make luxury accessible, quality unwavering, and beauty attainable for every home. 
                Project Phoenix is more than furniture—it's a commitment to transforming spaces into sanctuaries.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
