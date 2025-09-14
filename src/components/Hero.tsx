import React from "react";
import { Car, Shield, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import MultiStepBookingForm from "./MultiStepBookingForm";
import AnimatedNetworkBackground from "./AnimatedNetworkBackground";

const Hero = () => {

  const features = [
    {
      icon: Car,
      title: "Fast Booking",
      description: "Book your ride in seconds"
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description: "Licensed and insured drivers"
    },
    {
      icon: CreditCard,
      title: "Easy Payment",
      description: "Multiple payment options"
    }
  ];

  return (
    <section id="home" className="min-h-screen hero-gradient text-white relative overflow-hidden">
      {/* Network Style Animated Background */}
      <AnimatedNetworkBackground />

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-epilogue font-bold mb-6 leading-tight">
              Your Ride is Just a 
              <span className="text-primary"> Click Away</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the fastest, safest, and most reliable cab service in the city. 
              Available 24/7 with professional drivers and competitive rates.
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MultiStepBookingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;