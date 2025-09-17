import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mountain, Camera, Map, Archive, Calendar, Package, UtensilsCrossed, Users, Headphones, Wifi, Heart } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Mountain },
    { name: "Virtual Tours", href: "#tours", icon: Camera },
    { name: "Interactive Map", href: "#map", icon: Map },
    { name: "Digital Archives", href: "#archives", icon: Archive },
    { name: "Cultural Calendar", href: "#calendar", icon: Calendar },
    { name: "Travel Packages", href: "#packages", icon: Package },
    { name: "AI Food Guide", href: "#food", icon: UtensilsCrossed },
    { name: "Local Guides", href: "#guides", icon: Users },
    { name: "Audio Tours", href: "#audio", icon: Headphones },
    { name: "Offline Mode", href: "#offline", icon: Wifi },
    { name: "Community", href: "#community", icon: Heart },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border shadow-gentle transition-[var(--transition-monastery)]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-monastery-gold rounded-lg flex items-center justify-center shadow-monastery">
              <Mountain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Monastery360</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Sikkim's Digital Heritage</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 6).map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-[var(--transition-gentle)]"
                  asChild
                >
                  <a href={item.href} className="flex items-center space-x-2 px-3 py-2">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </a>
                </Button>
              );
            })}
            <Button className="ml-4 bg-gradient-to-r from-primary to-monastery-gold shadow-monastery hover:shadow-lg transition-[var(--transition-monastery)]">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="grid grid-cols-2 gap-2 pt-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="justify-start text-muted-foreground hover:text-foreground hover:bg-secondary/80 h-auto py-3"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <a href={item.href} className="flex items-center space-x-3">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-primary to-monastery-gold shadow-monastery">
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;