import { Button } from "@/components/ui/button";
import { Play, MapPin, Camera, Calendar } from "lucide-react";
import heroImage from "@/assets/monastery-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful Sikkim monastery in Himalayan mountains at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-gentle">
            <MapPin className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-muted-foreground">200+ Monasteries • Sikkim, India</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Explore Sikkim's
              <br />
              <span className="bg-gradient-to-r from-primary via-monastery-gold to-monastery-blue bg-clip-text text-transparent">
                Sacred Heritage
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in 3D virtual tours of ancient monasteries, discover rich cultural traditions, 
              and plan your spiritual journey through the mystical lands of Sikkim.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-monastery-gold shadow-monastery hover:shadow-lg transition-[var(--transition-monastery)] group px-8"
            >
              <Camera className="w-5 h-5 mr-2 group-hover:rotate-6 transition-transform" />
              Start Virtual Tour
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:border-primary hover:bg-primary/5 backdrop-blur-sm bg-card/80 px-8"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Preview
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Monasteries</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-monastery-gold">3D</div>
              <div className="text-sm text-muted-foreground">Virtual Tours</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-monastery-blue">500+</div>
              <div className="text-sm text-muted-foreground">Years History</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-monastery-red">24/7</div>
              <div className="text-sm text-muted-foreground">Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;