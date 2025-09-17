import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Clock, Users, Star, MapPin, Box } from "lucide-react";
import MonasteryModel from "@/components/3d/MonasteryModel";

const VirtualTours = () => {
  const tours = [
    {
      id: 1,
      name: "Rumtek Monastery",
      description: "Explore the most significant monastery in Sikkim, seat of the Karmapa lineage",
      duration: "45 min",
      rating: 4.9,
      visitors: "12.5k",
      era: "1960s",
      location: "Gangtok",
      image: "/api/placeholder/400/250",
      features: ["3D Interior", "Audio Guide", "Historical Timeline", "Prayer Wheel Simulation"]
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      description: "One of the oldest monasteries in Sikkim with stunning mountain views",
      duration: "35 min",
      rating: 4.8,
      visitors: "8.2k",
      era: "1705",
      location: "Pelling",
      image: "/api/placeholder/400/250",
      features: ["Mountain Views", "Ancient Murals", "Sacred Relics", "Meditation Hall"]
    },
    {
      id: 3,
      name: "Enchey Monastery",
      description: "A peaceful retreat with beautiful architecture and spiritual ambiance",
      duration: "30 min",
      rating: 4.7,
      visitors: "6.8k",
      era: "1909",
      location: "Gangtok",
      image: "/api/placeholder/400/250",
      features: ["Sacred Sculptures", "Prayer Flags", "Peaceful Gardens", "Traditional Architecture"]
    }
  ];

  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Camera className="w-3 h-3 mr-2" />
            Virtual Reality Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Immersive 3D
            <span className="bg-gradient-to-r from-primary to-monastery-gold bg-clip-text text-transparent"> Virtual Tours</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Step inside ancient monasteries from anywhere in the world. Experience the sacred atmosphere, 
            explore intricate details, and learn about centuries of spiritual tradition through cutting-edge technology.
          </p>
        </div>

        {/* Featured 3D Model */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-monastery-gold/10 text-monastery-gold hover:bg-monastery-gold/20">
              <Box className="w-3 h-3 mr-2" />
              Interactive 3D Experience
            </Badge>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Explore in Full 3D
            </h3>
            <p className="text-muted-foreground">
              Interact with our detailed 3D monastery model. Click and drag to explore every angle.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <MonasteryModel 
              title="Sacred Architecture in 3D"
              description="Click and drag to explore • Scroll to zoom • Interactive hotspots"
              className="shadow-monastery"
            />
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="group hover:shadow-monastery transition-[var(--transition-monastery)] border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={`Virtual tour of ${tour.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {tour.era}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-monastery-gold text-monastery-gold" />
                    <span className="text-xs font-medium">{tour.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">{tour.name}</CardTitle>
                <CardDescription className="text-sm mb-4 line-clamp-2">{tour.description}</CardDescription>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{tour.visitors}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tour.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {tour.features.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{tour.features.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6">
                <Button className="w-full bg-gradient-to-r from-primary to-monastery-gold hover:shadow-lg transition-[var(--transition-monastery)]">
                  <Camera className="w-4 h-4 mr-2" />
                  Start Virtual Tour
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/5"
          >
            View All 200+ Monasteries
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VirtualTours;