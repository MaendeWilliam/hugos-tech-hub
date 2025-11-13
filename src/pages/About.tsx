import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every product and service we deliver",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our top priority in everything we do",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead with the latest technology and solutions",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through honest, transparent service",
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
              About Hugo Solutions Ltd
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your trusted technology and security solutions partner since 2020
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Hugo Solutions Ltd began with a simple mission: to provide high-quality 
                  technology products and expert services to individuals and businesses in our community.
                </p>
                <p>
                  What started as a small computer repair shop has grown into a comprehensive technology 
                  and security solutions provider. Today, we offer everything from the latest laptops and 
                  smartphones to professional CCTV installation and IT support services.
                </p>
                <p>
                  Our success is built on a foundation of technical expertise, customer service excellence, 
                  and a genuine commitment to helping our clients leverage technology to improve their lives 
                  and businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center shadow-card hover:shadow-elevated transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10000+</div>
                <div className="text-muted-foreground">Repairs Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">CCTV Installations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-tech-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower individuals and businesses with cutting-edge technology solutions 
                and expert services that enhance productivity, security, and peace of mind. 
                We're committed to building lasting relationships through exceptional quality, 
                reliable service, and unwavering support.
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
