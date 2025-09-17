import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Calendar, MapPin, Users, Star, Check, Plane, Hotel, Camera, Utensils } from "lucide-react";

const TravelPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Spiritual Discovery",
      duration: "3 Days / 2 Nights",
      price: "₹12,999",
      originalPrice: "₹15,999",
      rating: 4.9,
      reviews: 127,
      groupSize: "2-8 people",
      category: "Best Seller",
      image: "/api/placeholder/400/250",
      highlights: [
        "Visit 5 major monasteries",
        "Traditional accommodation",
        "Local guide included",
        "Cultural performances"
      ],
      includes: ["Transport", "Accommodation", "Meals", "Guide"],
      locations: ["Gangtok", "Rumtek", "Enchey"]
    },
    {
      id: 2,
      name: "Heritage Explorer",
      duration: "7 Days / 6 Nights",
      price: "₹28,999",
      originalPrice: "₹34,999",
      rating: 4.8,
      reviews: 89,
      groupSize: "4-12 people",
      category: "Premium",
      image: "/api/placeholder/400/250",
      highlights: [
        "Complete Sikkim circuit",
        "Luxury mountain resorts",
        "Photography workshops",
        "Meditation sessions"
      ],
      includes: ["Private Transport", "Luxury Stay", "All Meals", "Expert Guide"],
      locations: ["Gangtok", "Pelling", "Yuksom", "Lachung"]
    },
    {
      id: 3,
      name: "Monastery Retreat",
      duration: "5 Days / 4 Nights",
      price: "₹18,999",
      originalPrice: "₹22,999",
      rating: 4.7,
      reviews: 156,
      groupSize: "1-6 people",
      category: "Wellness",
      image: "/api/placeholder/400/250",
      highlights: [
        "Stay in monastery",
        "Meditation training",
        "Monk interactions",
        "Spiritual guidance"
      ],
      includes: ["Monastery Stay", "Vegetarian Meals", "Teachings", "Ceremonies"],
      locations: ["Rumtek", "Pemayangtse", "Tashiding"]
    }
  ];

  const features = [
    {
      icon: Hotel,
      title: "Handpicked Stays",
      description: "From traditional guesthouses to luxury mountain resorts"
    },
    {
      icon: Camera,
      title: "Expert Guides",
      description: "Local historians and cultural experts"
    },
    {
      icon: Utensils,
      title: "Authentic Cuisine",
      description: "Traditional Sikkimese and Tibetan meals"
    },
    {
      icon: Plane,
      title: "Seamless Travel",
      description: "Airport transfers and comfortable transport"
    }
  ];

  return (
    <section id="packages" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-monastery-gold/10 text-monastery-gold hover:bg-monastery-gold/20">
            <Package className="w-3 h-3 mr-2" />
            Curated Experiences
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Travel
            <span className="bg-gradient-to-r from-monastery-gold to-primary bg-clip-text text-transparent"> Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Immerse yourself in Sikkim's spiritual heritage with our carefully crafted travel packages. 
            Every detail is planned for your transformative journey through ancient monasteries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-monastery-gold/10 to-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-monastery-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="group hover:shadow-monastery transition-[var(--transition-monastery)] border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
              {pkg.category && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className={
                    pkg.category === 'Best Seller' ? 'bg-monastery-red text-primary-foreground' :
                    pkg.category === 'Premium' ? 'bg-monastery-gold text-primary-foreground' :
                    'bg-monastery-blue text-primary-foreground'
                  }>
                    {pkg.category}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={`${pkg.name} travel package`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{pkg.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-monastery-gold text-monastery-gold" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                    <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                    <Badge variant="secondary" className="text-xs">Save 19%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">per person (all inclusive)</p>
                </div>

                <div className="space-y-3 mb-4">
                  <h4 className="font-medium text-sm text-foreground">Highlights:</h4>
                  <div className="space-y-2">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <Check className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.includes.map((item, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {pkg.locations.join(" • ")}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 space-y-3">
                <Button className="w-full bg-gradient-to-r from-monastery-gold to-primary hover:shadow-lg transition-[var(--transition-monastery)]">
                  Book Now
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="border-0 bg-gradient-to-r from-monastery-gold/10 via-primary/10 to-monastery-blue/10 p-8">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Need a Custom Package?</h3>
              <p className="text-muted-foreground">
                Let our travel experts create a personalized monastery tour based on your interests and schedule.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-monastery-gold">
                  Customize Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  Talk to Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;