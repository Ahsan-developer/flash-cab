// User and Auth types
export interface User {
  id: string;
  email: string;
  full_name?: string;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  message?: string;
}

// Booking types
export interface Booking {
  id: string;
  journeyType: 'from-airport' | 'to-airport' | 'point-to-point';
  tripDetails: {
    pickupLocation: string;
    destinationLocation: string;
    pickupDate: string;
    pickupTime: string;
    returnJourney: boolean;
    returnDate?: string;
    returnTime?: string;
    flightNumber?: string;
    noteForDriver?: string;
  };
  passengerDetails: {
    passengerCount: number;
    luggageCount: number;
  };
  contactInfo: {
    fullName: string;
    email: string;
    phoneNumber: string;
  };
  vehicleType: 'standard' | 'executive' | 'minivan' | 'luxury';
  status: 'pending' | 'confirmed' | 'driver-assigned' | 'in-progress' | 'completed' | 'cancelled';
  driverNotes?: string;
  cancellationTime?: string;
  created_at: string;
  updated_at: string;
}

export interface BookingApiResponse {
  _id: string;
  journeyType: 'from-airport' | 'to-airport' | 'point-to-point';
  tripDetails: {
    pickupLocation: string;
    destinationLocation: string;
    pickupDate: string;
    pickupTime: string;
    returnJourney: boolean;
    returnDate?: string;
    returnTime?: string;
    flightNumber?: string;
    noteForDriver?: string;
  };
  passenger?: {
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  passengerDetails: {
    passengerCount: number;
    luggageCount: number;
  };
  contactInfo: {
    fullName: string;
    email: string;
    phoneNumber: string;
  };
  vehicleType: 'standard' | 'executive' | 'minivan' | 'luxury';
  status: 'pending' | 'confirmed' | 'driver-assigned' | 'in-progress' | 'completed' | 'cancelled';
  driverNotes?: string;
  fare:number;
  cancellationTime?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBookingData {
  journeyType: 'from-airport' | 'to-airport' | 'point-to-point';
  tripDetails: {
    pickupLocation: string;
    destinationLocation: string;
    pickupDate: string;
    pickupTime: string;
    returnJourney: boolean;
    returnDate?: string;
    returnTime?: string;
    flightNumber?: string;
    noteForDriver?: string;
  };
  passengerDetails: {
    passengerCount: number;
    luggageCount: number;
  };
  contactInfo: {
    fullName: string;
    email: string;
    phoneNumber: string;
  };
  vehicleType?: 'standard' | 'executive' | 'minivan' | 'luxury';
  status?: 'pending' | 'confirmed' | 'driver-assigned' | 'in-progress' | 'completed' | 'cancelled';
  driverNotes?: string;
  cancellationTime?: string;
}

export interface UpdateBookingData {
  journeyType?: 'from-airport' | 'to-airport' | 'point-to-point';
  tripDetails?: {
    pickupLocation?: string;
    destinationLocation?: string;
    pickupDate?: string;
    pickupTime?: string;
    returnJourney?: boolean;
    returnDate?: string;
    returnTime?: string;
    flightNumber?: string;
    noteForDriver?: string;
  };
  passengerDetails?: {
    passengerCount?: number;
    luggageCount?: number;
  };
  contactInfo?: {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
  };
  vehicleType?: 'standard' | 'executive' | 'minivan' | 'luxury';
  status?: 'pending' | 'confirmed' | 'driver-assigned' | 'in-progress' | 'completed' | 'cancelled';
  driverNotes?: string;
  cancellationTime?: string;
}

// Invoice types
export interface Invoice {
  id: string;
  invoice_number: string;
  customer_name: string;
  customer_email: string | null;
  base_fare: number;
  additional_charges: number | null;
  tax_amount: number | null;
  total_amount: number;
  payment_status: string | null;
  payment_method: string | null;
  booking_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateInvoiceData {
  invoice_number: string;
  customer_name: string;
  customer_email?: string | null;
  base_fare: number;
  additional_charges?: number | null;
  tax_amount?: number | null;
  total_amount: number;
  payment_status?: string | null;
  payment_method?: string | null;
  booking_id?: string | null;
}

export interface UpdateInvoiceData {
  invoice_number?: string;
  customer_name?: string;
  customer_email?: string | null;
  base_fare?: number;
  additional_charges?: number | null;
  tax_amount?: number | null;
  total_amount?: number;
  payment_status?: string | null;
  payment_method?: string | null;
  booking_id?: string | null;
}

// Analytics types
export interface AnalyticsData {
  totalBookings: number;
  totalRevenue: number;
  completedRides: number;
  pendingBookings: number;
}

// User Role types
export type UserRole = 'admin' | 'user';

export interface UserRoleData {
  id: string;
  user_id: string;
  role: UserRole;
}

// API Response types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Error types
export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}
