import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Living",
    description: "A serene living space featuring clean lines, neutral tones, and Scandinavian influences. Natural materials and ample lighting create a peaceful atmosphere.",
    client: "Private Residence, Lagos",
    image: project1,
  },
  {
    id: 2,
    title: "Luxury Dining Experience",
    description: "Contemporary dining room showcasing a stunning live-edge table, designer pendant lights, and custom seating arrangements perfect for entertaining.",
    client: "Urban Apartment, Abuja",
    image: project2,
  },
  {
    id: 3,
    title: "Warm Contemporary Bedroom",
    description: "Cozy bedroom retreat combining natural wood elements with modern luxury. Features custom built-ins and carefully curated decor.",
    client: "Family Home, Port Harcourt",
    image: project3,
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-subtle py-16 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Interior Design Portfolio
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of thoughtfully designed spaces. Each project reflects our commitment to excellence and attention to detail.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="overflow-hidden border-0 shadow-large">
                      <CardContent className="p-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[400px] object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                      {project.title}
                    </h2>
                    <p className="text-sm text-accent font-medium mb-4">
                      {project.client}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
