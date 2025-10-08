import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Living",
    description: "A serene living space with Scandinavian influences",
    image: project1,
  },
  {
    id: 2,
    title: "Luxury Dining Experience",
    description: "Contemporary dining room with statement pieces",
    image: project2,
  },
  {
    id: 3,
    title: "Warm Contemporary Bedroom",
    description: "Cozy bedroom retreat with natural materials",
    image: project3,
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Interior Design Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we've transformed spaces into stunning works of art. Each project tells a unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button size="lg" variant="default">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
