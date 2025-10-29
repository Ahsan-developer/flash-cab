import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin, Clock, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { apiClient } from "@/lib/api";
import logoTransparent from "@/assets/logo-transparent.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const token = sessionStorage.getItem('auth_token') || localStorage.getItem('auth_token');
  const userEmail = token ? (localStorage.getItem('user_data') ? JSON.parse(localStorage.getItem('user_data') || '{}').email : null) : null;
  const isAdmin = !!sessionStorage.getItem('auth_token');

  const handleSignOut = async () => {
    try {
      await apiClient.auth.signOut();
      sessionStorage.removeItem('auth_token');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
      window.location.href = '/';
    } catch (error) {
      sessionStorage.removeItem('auth_token');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
      window.location.href = '/';
    }
  };

  const handleBookNowClick = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
      // Focus on the booking form after a short delay
      setTimeout(() => {
        const bookingForm = document.getElementById('booking-form');
        if (bookingForm) {
          bookingForm.focus();
        }
      }, 800);
    }
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    ...(isAdmin ? [{ label: "Admin", href: "/admin" }] : []),
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      {/* Top Info Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Available in Your City</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>24/7 Service</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoTransparent} alt="Quick Hop Logo" className="h-10 w-auto object-contain" />
            <h1 className="text-2xl font-epilogue font-bold text-primary">
              Quick<span className="text-secondary">Hop</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            {token ? (
              <div className="flex items-center gap-3">
                {userEmail && (
                  <span className="text-sm text-muted-foreground">
                    Welcome, {userEmail}
                  </span>
                )}
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                className="btn-primary px-6 py-2 rounded-full"
                onClick={handleBookNowClick}
              >
                Book Now
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) => (
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                ))}

                {token ? (
                  <div className="mt-6 space-y-4 pt-4 border-t">
                    {userEmail && (
                      <div className="text-sm text-muted-foreground">
                        {userEmail}
                      </div>
                    )}
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        handleSignOut();
                        setIsOpen(false);
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="mt-6 space-y-3 pt-4 border-t">
                    <Button
                      className="btn-primary w-full rounded-full"
                      onClick={() => {
                        handleBookNowClick();
                        setIsOpen(false);
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
