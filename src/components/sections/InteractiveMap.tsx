import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Map, MapPin, Route, Compass, Navigation, Camera, Clock } from "lucide-react";

const InteractiveMap = () => {
  const mapFeatures = [
    {
      icon: MapPin,
      title: "Geo-tagged Monasteries",
      description: "Precise locations of all 200+ monasteries with detailed information"
    },
    {
      icon: Route,
      title: "Optimized Routes",
      description: "Smart travel planning with suggested itineraries and transport options"
    },
    {
      icon: Compass,
      title: "Nearby Attractions",
      description: "Discover cultural sites, viewpoints, and local experiences around each monastery"
    },
    {
      icon: Navigation,
      title: "Real-time Navigation",
      description: "GPS-enabled directions with offline capability for remote locations"
    }
  ];

  const popularRoutes = [
    {
      name: "Golden Triangle",
      monasteries: 3,
      duration: "2 days",
      difficulty: "Easy",
      highlights: ["Rumtek", "Enchey", "Do Drul Chorten"]
    },
    {
      name: "West Sikkim Heritage",
      monasteries: 5,
      duration: "4 days",
      difficulty: "Moderate",
      highlights: ["Pemayangtse", "Sanga Choeling", "Khecheopalri"]
    },
    {
      name: "Complete Circuit",
      monasteries: 12,
      duration: "10 days",
      difficulty: "Challenging",
      highlights: ["All major monasteries", "Hidden gems", "Cultural immersion"]
    }
  ];

  return (
    <section id="map" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-monastery-blue/10 text-monastery-blue hover:bg-monastery-blue/20">
            <Map className="w-3 h-3 mr-2" />
            Smart Navigation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interactive
            <span className="bg-gradient-to-r from-monastery-blue to-primary bg-clip-text text-transparent"> Heritage Map</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Navigate through Sikkim's spiritual landscape with our intelligent mapping system. 
            Plan your journey, discover hidden gems, and create unforgettable experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Preview */}
          <div className="relative">
            <Card className="border-0 bg-gradient-to-br from-monastery-blue/10 to-primary/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 relative bg-gradient-to-br from-monastery-blue/20 to-primary/20 flex items-center justify-center">
                  {/* Placeholder for interactive map */}
                  <div className="text-center space-y-4">
                    <Map className="w-16 h-16 text-monastery-blue mx-auto" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">Interactive Map Loading...</h3>
                      <p className="text-muted-foreground">Explore 200+ monasteries across Sikkim</p>
                    </div>
                    <Button className="bg-monastery-blue hover:bg-monastery-blue/90">
                      <Camera className="w-4 h-4 mr-2" />
                      Launch Full Map
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              {mapFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-monastery-blue/10 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-monastery-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Popular Heritage Routes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <Card key={index} className="hover:shadow-monastery transition-[var(--transition-monastery)] border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{route.name}</CardTitle>
                  <CardDescription>
                    {route.monasteries} monasteries • {route.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant={route.difficulty === 'Easy' ? 'secondary' : route.difficulty === 'Moderate' ? 'default' : 'destructive'}>
                      {route.difficulty}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {route.duration}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {route.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    View Route Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;