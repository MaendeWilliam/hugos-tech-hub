import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Wrench, Smartphone, Shield, HeadphonesIcon, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Computer & Laptop Repair",
      description: "Expert repair services for all makes and models",
      features: [
        "Hardware diagnostics and repair",
        "Software troubleshooting",
        "Virus removal and security",
        "Data recovery",
        "Performance optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Phone & Tablet Repair",
      description: "Fast, reliable repairs for mobile devices",
      features: [
        "Screen replacement",
        "Battery replacement",
        "Water damage repair",
        "Charging port repair",
        "Same-day service available",
      ],
    },
    {
      icon: Shield,
      title: "CCTV Installation & Maintenance",
      description: "Professional security camera systems",
      features: [
        "Site survey and consultation",
        "Custom system design",
        "Professional installation",
        "Remote monitoring setup",
        "Ongoing maintenance support",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "IT Support & Consultation",
      description: "Comprehensive IT solutions for businesses",
      features: [
        "Network setup and management",
        "Cloud solutions",
        "IT infrastructure planning",
        "Cybersecurity consulting",
        "24/7 support packages",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation cartItemCount={0} onCartClick={() => {}} />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-gradient py-20 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Tech Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              From repairs to installations, our expert technicians deliver quality service you can trust
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6">Request Service</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Hugo Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Certified Technicians</h3>
                <p className="text-muted-foreground">
                  Our team consists of certified professionals with years of experience
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Most repairs completed within 24-48 hours, with same-day service available
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Warranty Protection</h3>
                <p className="text-muted-foreground">
                  All repairs backed by our comprehensive warranty for your peace of mind
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
