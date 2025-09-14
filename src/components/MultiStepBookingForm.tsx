import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Plane, MapPin, Calendar, Clock, Users, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LocationSearchInput from "./LocationSearchInput";

interface BookingData {
  serviceType: string;
  pickupLocation: string;
  destination: string;
  date: string;
  pickupTime: string;
  returnTime: string;
  passengers: string;
  luggage: string;
  returnJourney: boolean;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  billingAddress: string;
  city: string;
  zipCode: string;
}

const MultiStepBookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [bookingData, setBookingData] = useState<BookingData>({
    serviceType: "from-airport",
    pickupLocation: "Barcelona-El Prat Airport",
    destination: "",
    date: "",
    pickupTime: "",
    returnTime: "",
    passengers: "1",
    luggage: "1",
    returnJourney: false,
    customerName: "",
    customerEmail: "",
    customerPhone: "",
  });

  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    zipCode: "",
  });

  const updateBookingData = (field: keyof BookingData, value: string | boolean) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceTypeChange = (serviceType: string) => {
    setBookingData(prev => {
      if (serviceType === 'from-airport') {
        return {
          ...prev,
          serviceType,
          pickupLocation: 'Barcelona-El Prat Airport',
          destination: ''
        };
      } else if (serviceType === 'to-airport') {
        return {
          ...prev,
          serviceType,
          pickupLocation: '',
          destination: 'Barcelona-El Prat Airport'
        };
      } else {
        return {
          ...prev,
          serviceType,
          pickupLocation: '',
          destination: ''
        };
      }
    });
  };

  const updatePaymentData = (field: keyof PaymentData, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep1 = () => {
    if (!bookingData.destination || !bookingData.date || !bookingData.pickupTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardholderName) {
      toast({
        title: "Missing Payment Information",
        description: "Please fill in all payment fields.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) return;

    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('bookings')
        .insert({
          pickup_location: bookingData.pickupLocation,
          destination: bookingData.destination,
          booking_date: bookingData.date,
          booking_time: bookingData.pickupTime,
          customer_name: bookingData.customerName || 'Guest',
          customer_email: bookingData.customerEmail,
          customer_phone: bookingData.customerPhone,
          service_type: bookingData.serviceType === 'from-airport' ? 'From Airport' : 
                       bookingData.serviceType === 'to-airport' ? 'To Airport' : 'Point to Point',
          fare_amount: 45.00,
          status: 'confirmed'
        });

      if (error) throw error;

      toast({
        title: "Booking Confirmed!",
        description: "Your ride has been booked and payment processed successfully.",
      });

      // Reset form
      setCurrentStep(1);
      setBookingData({
        serviceType: "from-airport",
        pickupLocation: "Barcelona-El Prat Airport",
        destination: "",
        date: "",
        pickupTime: "",
        returnTime: "",
        passengers: "1",
        luggage: "1",
        returnJourney: false,
        customerName: "",
        customerEmail: "",
        customerPhone: "",
      });
      setPaymentData({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: "",
        billingAddress: "",
        city: "",
        zipCode: "",
      });
      
    } catch (error) {
      console.error('Error creating booking:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card 
      id="booking-form" 
      className="w-full max-w-2xl mx-auto bg-card/95 backdrop-blur-sm border-0 shadow-2xl" 
      tabIndex={-1}
    >
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-bold text-primary mb-2">
          Book Your Ride Instantly
        </CardTitle>
        <p className="text-muted-foreground text-lg">Barcelona airport transfers</p>
        
        {/* Step Indicator */}
        <div className="flex justify-center mt-6 mb-4">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              1
            </div>
            <div className={`w-12 h-0.5 ${currentStep >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              2
            </div>
          </div>
        </div>
        
        <div className="flex justify-center text-sm text-muted-foreground">
          <span className={currentStep === 1 ? 'font-semibold text-primary' : ''}>
            Booking Details
          </span>
          <span className="mx-4">•</span>
          <span className={currentStep === 2 ? 'font-semibold text-primary' : ''}>
            Payment
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.form
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Service Type Selection */}
              <div className="space-y-3">
                <RadioGroup 
                  value={bookingData.serviceType} 
                  onValueChange={handleServiceTypeChange}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="from-airport" id="from-airport" />
                    <Label htmlFor="from-airport">From airport</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="to-airport" id="to-airport" />
                    <Label htmlFor="to-airport">To airport</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="point-to-point" id="point-to-point" />
                    <Label htmlFor="point-to-point">Point to point</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Location Fields */}
              <div className="space-y-4">
                <LocationSearchInput
                  value={bookingData.pickupLocation}
                  onChange={(value) => updateBookingData('pickupLocation', value)}
                  placeholder="Pickup location"
                  icon="plane"
                />
                
                <LocationSearchInput
                  value={bookingData.destination}
                  onChange={(value) => updateBookingData('destination', value)}
                  placeholder="Destination"
                  icon="mappin"
                />
              </div>

              {/* Date Field */}
              <div className="relative">
                <Calendar className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                <Input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => updateBookingData('date', e.target.value)}
                  className="pl-10 h-12 bg-muted/50"
                  required
                />
              </div>

              {/* Time Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Clock className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                  <Select value={bookingData.pickupTime} onValueChange={(value) => updateBookingData('pickupTime', value)}>
                    <SelectTrigger className="pl-10 h-12 bg-muted/50">
                      <SelectValue placeholder="Pickup time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => (
                        <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                          {i.toString().padStart(2, '0')}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {bookingData.returnJourney && (
                  <div className="relative">
                    <Clock className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                    <Select value={bookingData.returnTime} onValueChange={(value) => updateBookingData('returnTime', value)}>
                      <SelectTrigger className="pl-10 h-12 bg-muted/50">
                        <SelectValue placeholder="Return time" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }, (_, i) => (
                          <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                            {i.toString().padStart(2, '0')}:00
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Passengers and Luggage */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Users className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                  <Select value={bookingData.passengers} onValueChange={(value) => updateBookingData('passengers', value)}>
                    <SelectTrigger className="pl-10 h-12 bg-muted/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num} Passenger{num > 1 ? 's' : ''}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="relative">
                  <Briefcase className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                  <Select value={bookingData.luggage} onValueChange={(value) => updateBookingData('luggage', value)}>
                    <SelectTrigger className="pl-10 h-12 bg-muted/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5, 6].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num} Luggage{num !== 1 ? 's' : ''}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Return Journey Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="return-journey"
                  checked={bookingData.returnJourney}
                  onCheckedChange={(checked) => updateBookingData('returnJourney', checked as boolean)}
                />
                <Label htmlFor="return-journey">Return Journey?</Label>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold text-lg">Contact Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={bookingData.customerName}
                      onChange={(e) => updateBookingData('customerName', e.target.value)}
                      className="h-12"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingData.customerEmail}
                      onChange={(e) => updateBookingData('customerEmail', e.target.value)}
                      className="h-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={bookingData.customerPhone}
                    onChange={(e) => updateBookingData('customerPhone', e.target.value)}
                    className="h-12"
                    placeholder="+34 123 456 789"
                  />
                </div>
              </div>

              <Button
                type="button"
                onClick={handleNextStep}
                className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90"
              >
                Continue to Payment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.form>
          )}

          {currentStep === 2 && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <h3 className="font-semibold text-lg">Payment Information</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={(e) => updatePaymentData('cardNumber', e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    className="h-12"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      value={paymentData.expiryDate}
                      onChange={(e) => updatePaymentData('expiryDate', e.target.value)}
                      placeholder="MM/YY"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={paymentData.cvv}
                      onChange={(e) => updatePaymentData('cvv', e.target.value)}
                      placeholder="123"
                      className="h-12"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="cardholderName">Cardholder Name</Label>
                  <Input
                    id="cardholderName"
                    value={paymentData.cardholderName}
                    onChange={(e) => updatePaymentData('cardholderName', e.target.value)}
                    placeholder="John Doe"
                    className="h-12"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="billingAddress">Billing Address</Label>
                  <Input
                    id="billingAddress"
                    value={paymentData.billingAddress}
                    onChange={(e) => updatePaymentData('billingAddress', e.target.value)}
                    placeholder="123 Main Street"
                    className="h-12"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={paymentData.city}
                      onChange={(e) => updatePaymentData('city', e.target.value)}
                      placeholder="Barcelona"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input
                      id="zipCode"
                      value={paymentData.zipCode}
                      onChange={(e) => updatePaymentData('zipCode', e.target.value)}
                      placeholder="08001"
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Booking Summary</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="capitalize">{bookingData.serviceType.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Route:</span>
                    <span>{bookingData.pickupLocation} → {bookingData.destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span>{bookingData.date} at {bookingData.pickupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Passengers:</span>
                    <span>{bookingData.passengers}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total:</span>
                    <span>€45.00</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePreviousStep}
                  className="h-12 text-lg font-semibold flex-1"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 text-lg font-semibold flex-1 bg-primary hover:bg-primary/90"
                >
                  {loading ? "Processing..." : "Complete Booking"}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default MultiStepBookingForm;