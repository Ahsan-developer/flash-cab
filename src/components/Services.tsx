import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Truck, Users, Crown, MapPin, Clock, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "City Rides",
      description: "Quick and comfortable rides around the city",
      features: ["4 Passengers", "AC Available", "GPS Tracking"],
      price: "Starting from $8",
      popular: false
    },
    {
      icon: Crown,
      title: "Premium",
      description: "Luxury vehicles for special occasions",
      features: ["Premium Comfort", "Professional Driver", "VIP Service"],
      price: "Starting from $25",
      popular: true
    },
    {
      icon: Users,
      title: "Group Rides",
      description: "Perfect for group travel and events",
      features: ["Up to 8 Passengers", "Extra Space", "Group Discounts"],
      price: "Starting from $15",
      popular: false
    },
    {
      icon: Truck,
      title: "Cargo Service",
      description: "Moving packages and small deliveries",
      features: ["Secure Transport", "Real-time Tracking", "Insurance Covered"],
      price: "Starting from $12",
      popular: false
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your ride in real-time with GPS"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Average pickup time under 5 minutes"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All drivers are background checked"
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Rated #1 cab service in the city"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-epilogue font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of transportation services designed to meet all your travel needs
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`card-elevated h-full relative overflow-hidden ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-epilogue">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="font-bold text-primary text-lg">{service.price}</p>
                    <Button className="btn-primary w-full mt-3 rounded-full">
                      Choose Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-epilogue font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;