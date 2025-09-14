-- Create bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  pickup_location TEXT NOT NULL,
  destination TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  customer_name TEXT,
  customer_email TEXT,
  customer_phone TEXT,
  service_type TEXT DEFAULT 'City Rides',
  fare_amount DECIMAL(10,2),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  driver_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create invoices table
CREATE TABLE public.invoices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id UUID REFERENCES public.bookings(id) ON DELETE CASCADE,
  invoice_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT,
  base_fare DECIMAL(10,2) NOT NULL,
  additional_charges DECIMAL(10,2) DEFAULT 0,
  tax_amount DECIMAL(10,2) DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  payment_method TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;

-- Create policies for bookings (public read for now, will add auth later)
CREATE POLICY "Anyone can view bookings" 
ON public.bookings 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create bookings" 
ON public.bookings 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update bookings" 
ON public.bookings 
FOR UPDATE 
USING (true);

-- Create policies for invoices (public read for now, will add auth later)
CREATE POLICY "Anyone can view invoices" 
ON public.invoices 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create invoices" 
ON public.invoices 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update invoices" 
ON public.invoices 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_bookings_updated_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_invoices_updated_at
BEFORE UPDATE ON public.invoices
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to generate invoice numbers
CREATE OR REPLACE FUNCTION public.generate_invoice_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.invoice_number = 'INV-' || to_char(NEW.created_at, 'YYYYMMDD') || '-' || LPAD(NEXTVAL('invoice_sequence')::TEXT, 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create sequence for invoice numbers
CREATE SEQUENCE IF NOT EXISTS public.invoice_sequence START 1;

-- Create trigger to auto-generate invoice numbers
CREATE TRIGGER generate_invoice_number_trigger
BEFORE INSERT ON public.invoices
FOR EACH ROW
EXECUTE FUNCTION public.generate_invoice_number();

-- Insert sample data
INSERT INTO public.bookings (pickup_location, destination, booking_date, booking_time, customer_name, customer_email, customer_phone, service_type, fare_amount, status) VALUES
('Downtown Plaza', 'Airport Terminal 1', '2024-01-15', '14:30:00', 'John Smith', 'john@example.com', '+1234567890', 'City Rides', 45.00, 'completed'),
('Hotel Grand', 'Shopping Mall', '2024-01-15', '16:45:00', 'Sarah Johnson', 'sarah@example.com', '+1987654321', 'Premium', 25.00, 'confirmed'),
('Business District', 'University Campus', '2024-01-16', '09:15:00', 'Mike Davis', 'mike@example.com', '+1122334455', 'City Rides', 18.50, 'in_progress'),
('Residential Area', 'Train Station', '2024-01-16', '11:20:00', 'Emma Wilson', 'emma@example.com', '+1555666777', 'Group Rides', 15.00, 'pending');

INSERT INTO public.invoices (booking_id, customer_name, customer_email, base_fare, additional_charges, tax_amount, total_amount, payment_status, payment_method) 
SELECT 
  id,
  customer_name,
  customer_email,
  fare_amount,
  2.00,
  fare_amount * 0.1,
  fare_amount + 2.00 + (fare_amount * 0.1),
  CASE status 
    WHEN 'completed' THEN 'paid'
    WHEN 'confirmed' THEN 'pending'
    ELSE 'pending'
  END,
  'credit_card'
FROM public.bookings;