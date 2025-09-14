import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface Booking {
  id: string;
  pickup_location: string;
  destination: string;
  booking_date: string;
  booking_time: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  service_type: string;
  fare_amount: number;
  status: string;
  created_at: string;
}

const BookingsTable = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      // Refresh bookings
      fetchBookings();
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
      confirmed: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      in_progress: "bg-purple-100 text-purple-800 hover:bg-purple-100",
      completed: "bg-green-100 text-green-800 hover:bg-green-100",
      cancelled: "bg-red-100 text-red-800 hover:bg-red-100",
    };

    return (
      <Badge className={statusColors[status as keyof typeof statusColors] || "bg-gray-100 text-gray-800"}>
        {status.replace('_', ' ').toUpperCase()}
      </Badge>
    );
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading Bookings...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="h-12 bg-muted rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Bookings</CardTitle>
        <CardDescription>
          Manage and track all ride bookings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Fare</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{booking.customer_name}</div>
                    <div className="text-sm text-muted-foreground">{booking.customer_email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div className="font-medium">{booking.pickup_location}</div>
                    <div className="text-muted-foreground">→ {booking.destination}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div>{format(new Date(booking.booking_date), 'MMM dd, yyyy')}</div>
                    <div className="text-muted-foreground">{booking.booking_time}</div>
                  </div>
                </TableCell>
                <TableCell>{booking.service_type}</TableCell>
                <TableCell>${booking.fare_amount?.toFixed(2) || '0.00'}</TableCell>
                <TableCell>{getStatusBadge(booking.status)}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {booking.status === 'pending' && (
                      <Button
                        size="sm"
                        onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                      >
                        Confirm
                      </Button>
                    )}
                    {booking.status === 'confirmed' && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => updateBookingStatus(booking.id, 'in_progress')}
                      >
                        Start
                      </Button>
                    )}
                    {booking.status === 'in_progress' && (
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => updateBookingStatus(booking.id, 'completed')}
                      >
                        Complete
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {bookings.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No bookings found. New bookings will appear here.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingsTable;