import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Happy Customers",
      description: "Served across the city"
    },
    {
      icon: Award,
      number: "5 Years",
      label: "Experience",
      description: "In transportation service"
    },
    {
      icon: MapPin,
      number: "100+",
      label: "Areas Covered",
      description: "Throughout the metropolitan"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Service",
      description: "Available round the clock"
    }
  ];

  const achievements = [
    "Best Cab Service Award 2023",
    "5-Star Customer Rating",
    "ISO Certified Operations",
    "Green Transport Initiative"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                About Quick Hop
              </Badge>
              <h2 className="text-4xl font-epilogue font-bold text-secondary mb-4">
                Your Trusted Transportation Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Since 2019, Quick Hop has been revolutionizing urban transportation with 
                our commitment to safety, reliability, and customer satisfaction. We pride 
                ourselves on providing premium cab services that you can trust.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Professional Drivers</h4>
                  <p className="text-muted-foreground">All our drivers are licensed, trained, and background-checked for your safety.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Modern Fleet</h4>
                  <p className="text-muted-foreground">Well-maintained vehicles equipped with GPS tracking and safety features.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">24/7 Support</h4>
                  <p className="text-muted-foreground">Round-the-clock customer support to assist you whenever you need help.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold mb-4">Our Achievements</h4>
              <div className="flex flex-wrap gap-2">
                {achievements.map((achievement) => (
                  <Badge key={achievement} variant="outline" className="text-sm">
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="btn-primary px-8 py-3 rounded-full group">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-elevated text-center p-6">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-epilogue font-bold text-secondary mb-2">
                        {stat.number}
                      </h3>
                      <p className="font-semibold mb-1">{stat.label}</p>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="card-elevated bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-epilogue font-bold text-secondary mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide safe, reliable, and affordable transportation services that 
                    connect people to their destinations while contributing to a sustainable 
                    and connected community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;