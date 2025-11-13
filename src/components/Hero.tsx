import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wrench, Monitor } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted Tech Partner Since 2020
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
            Your One-Stop Tech & Security Solutions Partner
          </h1>
          
          <p className="mb-10 text-lg text-primary-foreground/90 sm:text-xl">
            From cutting-edge computers to professional CCTV installations, we deliver quality products and expert services for your home and business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Shop Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
              View Services
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-3 rounded-xl bg-background/10 p-6 backdrop-blur-sm">
              <Monitor className="h-8 w-8 text-primary-foreground" />
              <h3 className="font-semibold text-primary-foreground">Latest Tech</h3>
              <p className="text-sm text-primary-foreground/80">Premium computers & devices</p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-background/10 p-6 backdrop-blur-sm">
              <Wrench className="h-8 w-8 text-primary-foreground" />
              <h3 className="font-semibold text-primary-foreground">Expert Repairs</h3>
              <p className="text-sm text-primary-foreground/80">Fast, reliable service</p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-background/10 p-6 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-primary-foreground" />
              <h3 className="font-semibold text-primary-foreground">Security Systems</h3>
              <p className="text-sm text-primary-foreground/80">Professional CCTV setup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
