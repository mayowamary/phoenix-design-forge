import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-subtle py-16 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or ready to start your design journey? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Our team is available to answer your questions and schedule consultations.
                  </p>
                </div>

                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground">+234 123 456 7890</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 9AM - 6PM</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">hello@projectphoenix.com</p>
                      <p className="text-sm text-muted-foreground">info@projectphoenix.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Showroom</h3>
                      <p className="text-sm text-muted-foreground">123 Design Street</p>
                      <p className="text-sm text-muted-foreground">Victoria Island, Lagos</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-accent/5 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Request a Design Consultation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a personalized consultation with our design experts to discuss your vision.
                  </p>
                  <Button variant="default" className="w-full">
                    Book Consultation
                  </Button>
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

export default Contact;
