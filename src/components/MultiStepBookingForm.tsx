import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Plane, Calendar, Clock, Users, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiClient } from "@/lib/api";
import LocationSearchInput from "./LocationSearchInput";

interface BookingData {
  journeyType: 'from-airport' | 'to-airport' | 'point-to-point';
  pickupLocation: string;
  destinationLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnJourney: boolean;
  returnDate: string;
  returnTime: string;
  flightNumber: string;
  noteForDriver: string;
  passengerCount: number;
  luggageCount: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  vehicleType: 'standard' | 'executive' | 'minivan' | 'luxury';
}


const MultiStepBookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [bookingData, setBookingData] = useState<BookingData>({
    journeyType: "from-airport",
    pickupLocation: "Barcelona-El Prat Airport",
    destinationLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnJourney: false,
    returnDate: "",
    returnTime: "",
    flightNumber: "",
    noteForDriver: "",
    passengerCount: 1,
    luggageCount: 1,
    fullName: "",
    email: "",
    phoneNumber: "",
    vehicleType: "standard",
  });

  const updateBookingData = (field: keyof BookingData, value: string | boolean | number) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceTypeChange = (journeyType: 'from-airport' | 'to-airport' | 'point-to-point') => {
    setBookingData(prev => {
      if (journeyType === 'from-airport') {
        return {
          ...prev,
          journeyType,
          pickupLocation: 'Barcelona-El Prat Airport',
          destinationLocation: ''
        };
      } else if (journeyType === 'to-airport') {
        return {
          ...prev,
          journeyType,
          pickupLocation: '',
          destinationLocation: 'Barcelona-El Prat Airport'
        };
      } else {
        return {
          ...prev,
          journeyType,
          pickupLocation: '',
          destinationLocation: ''
        };
      }
    });
  };

  const validateStep1 = () => {
    if (!bookingData.destinationLocation || !bookingData.pickupDate || !bookingData.pickupTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const calculateTotal = () => {
    const baseFare = 55;
    const additionalPassengers = Math.max(0, bookingData.passengerCount - 1);
    const passengerFee = additionalPassengers * 5;
    const additionalLuggage = Math.max(0, bookingData.luggageCount - 1);
    const luggageFee = additionalLuggage * 3;
    return baseFare + passengerFee + luggageFee;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  const processPayment = async () => {
    setLoading(true);

    try {
      const amountEuros = calculateTotal();

      const metadata = {
        journeyType: bookingData.journeyType,
        pickupLocation: bookingData.pickupLocation,
        destinationLocation: bookingData.destinationLocation,
        pickupDate: bookingData.pickupDate,
        pickupTime: bookingData.pickupTime,
        returnJourney: String(bookingData.returnJourney),
        returnDate: bookingData.returnDate || '',
        returnTime: bookingData.returnTime || '',
        flightNumber: bookingData.flightNumber || '',
        noteForDriver: bookingData.noteForDriver || '',
        passengerCount: String(bookingData.passengerCount),
        luggageCount: String(bookingData.luggageCount),
        fullName: bookingData.fullName,
        email: bookingData.email,
        phoneNumber: bookingData.phoneNumber,
        vehicleType: bookingData.vehicleType,
      };

      const result = await apiClient.payments.createIntent({
        amount: amountEuros,
        currency: 'eur',
        metadata,
      });

      if (result.data?.success && result.data?.data?.url) {
        window.location.href = result.data.data.url;
      } else {
        throw new Error('Failed to create checkout session');
      }

    } catch (error: any) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: error?.response?.data?.message || error?.message || "There was an error processing your payment.",
        variant: "destructive",
      });
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
                  value={bookingData.journeyType}
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
                  value={bookingData.destinationLocation}
                  onChange={(value) => updateBookingData('destinationLocation', value)}
                  placeholder="Destination"
                  icon="mappin"
                />
              </div>

              {/* Date Field */}
              <div className="relative">
                <Calendar className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                <Input
                  type="date"
                  value={bookingData.pickupDate}
                  onChange={(e) => updateBookingData('pickupDate', e.target.value)}
                  min={getTodayDateString()}
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
                  <Select value={bookingData.passengerCount.toString()} onValueChange={(value) => updateBookingData('passengerCount', parseInt(value))}>
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
                  <Select value={bookingData.luggageCount.toString()} onValueChange={(value) => updateBookingData('luggageCount', parseInt(value))}>
                    <SelectTrigger className="pl-10 h-12 bg-muted/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
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

              {/* Return Date Field - Only show if return journey is selected */}
              {bookingData.returnJourney && (
                <div className="relative">
                  <Calendar className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={bookingData.returnDate}
                    onChange={(e) => updateBookingData('returnDate', e.target.value)}
                    min={bookingData.pickupDate || getTodayDateString()}
                    className="pl-10 h-12 bg-muted/50"
                    placeholder="Return date"
                  />
                </div>
              )}

              {/* Flight Number Field - Only show for airport journeys */}
              {(bookingData.journeyType === 'from-airport' || bookingData.journeyType === 'to-airport') && (
                <div className="relative">
                  <Plane className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                  <Input
                    value={bookingData.flightNumber}
                    onChange={(e) => updateBookingData('flightNumber', e.target.value)}
                    className="pl-10 h-12 bg-muted/50"
                    placeholder="Flight number (optional)"
                  />
                </div>
              )}

              {/* Vehicle Type Selection */}
              <div className="space-y-2">
                <Label>Vehicle Type</Label>
                <Select value={bookingData.vehicleType} onValueChange={(value) => updateBookingData('vehicleType', value as 'standard' | 'executive' | 'minivan' | 'luxury')}>
                  <SelectTrigger className="h-12 bg-muted/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                    <SelectItem value="minivan">Minivan</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Note for Driver */}
              <div className="space-y-2">
                <Label htmlFor="noteForDriver">Note for Driver (Optional)</Label>
                <Input
                  id="noteForDriver"
                  value={bookingData.noteForDriver}
                  onChange={(e) => updateBookingData('noteForDriver', e.target.value)}
                  className="h-12"
                  placeholder="Any special instructions for the driver..."
                />
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold text-lg">Contact Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={bookingData.fullName}
                      onChange={(e) => updateBookingData('fullName', e.target.value)}
                      className="h-12"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => updateBookingData('email', e.target.value)}
                      className="h-12"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={bookingData.phoneNumber}
                    onChange={(e) => updateBookingData('phoneNumber', e.target.value)}
                    className="h-12"
                    placeholder="+34 123 456 789"
                    required
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
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="font-semibold text-lg">Review & Payment</h3>

              {/* Booking Summary */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Booking Summary</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="capitalize">{bookingData.journeyType.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Route:</span>
                    <span>{bookingData.pickupLocation} → {bookingData.destinationLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span>{bookingData.pickupDate} at {bookingData.pickupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Passengers:</span>
                    <span>{bookingData.passengerCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Luggage:</span>
                    <span>{bookingData.luggageCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vehicle:</span>
                    <span className="capitalize">{bookingData.vehicleType}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total:</span>
                    <span>€{calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePreviousStep}
                  disabled={loading}
                  className="h-12 text-lg font-semibold flex-1"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>

                <Button
                  type="button"
                  onClick={processPayment}
                  disabled={loading}
                  className="h-12 text-lg font-semibold flex-1 bg-primary hover:bg-primary/90"
                >
                  {loading ? "Processing..." : "Proceed to Payment"}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default MultiStepBookingForm;
