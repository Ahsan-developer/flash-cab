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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { apiClient } from "@/lib/api";
import { BookingApiResponse } from "@/types";
import { format } from "date-fns";
import { MoreVertical, CheckCircle2, UserCheck, Play, XCircle } from "lucide-react";


const BookingsTable = () => {
  const [bookings, setBookings] = useState<BookingApiResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await apiClient.bookings.getAll();
      const bookingsData = response.data || [];
      setBookings(bookingsData);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      await apiClient.bookings.updateStatus(id, status);

      // Refresh bookings
      fetchBookings();
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const normalizeStatus = (status: string): string => {
    return status.replace(/-/g, '_');
  };

  const getStatusBadge = (status: string) => {
    const normalizedStatus = normalizeStatus(status);
    const statusColors = {
      pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
      confirmed: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      driver_assigned: "bg-indigo-100 text-indigo-800 hover:bg-indigo-100",
      in_progress: "bg-purple-100 text-purple-800 hover:bg-purple-100",
      completed: "bg-green-100 text-green-800 hover:bg-green-100",
      cancelled: "bg-red-100 text-red-800 hover:bg-red-100",
    };

    return (
      <Badge className={statusColors[normalizedStatus as keyof typeof statusColors] || "bg-gray-100 text-gray-800"}>
        {status.replace(/[-_]/g, ' ').toUpperCase()}
      </Badge>
    );
  };

  const getAvailableActions = (currentStatus: string) => {
    const normalizedStatus = normalizeStatus(currentStatus);
    const actions: Array<{ label: string; value: string; icon?: React.ReactNode; variant?: "default" | "destructive"; disabled?: boolean }> = [];

    switch (normalizedStatus) {
      case 'pending':
        actions.push(
          { label: 'Confirm (After Payment)', value: 'confirmed', icon: <CheckCircle2 className="h-4 w-4" /> },
          { label: 'Cancel Booking', value: 'cancelled', icon: <XCircle className="h-4 w-4" />, variant: 'destructive' }
        );
        break;
      case 'confirmed':
        actions.push(
          { label: 'Assign Driver', value: 'driver-assigned', icon: <UserCheck className="h-4 w-4" /> },
          { label: 'Cancel Booking', value: 'cancelled', icon: <XCircle className="h-4 w-4" />, variant: 'destructive' }
        );
        break;
      case 'driver_assigned':
        actions.push(
          { label: 'Start Ride', value: 'in-progress', icon: <Play className="h-4 w-4" /> },
          { label: 'Cancel Booking', value: 'cancelled', icon: <XCircle className="h-4 w-4" />, variant: 'destructive' }
        );
        break;
      case 'in_progress':
        actions.push(
          { label: 'Complete Ride', value: 'completed', icon: <CheckCircle2 className="h-4 w-4" /> },
          { label: 'Cancel Booking', value: 'cancelled', icon: <XCircle className="h-4 w-4" />, variant: 'destructive' }
        );
        break;
      case 'completed':
        actions.push(
          { label: 'No actions available', value: '', disabled: true }
        );
        break;
      case 'cancelled':
        actions.push(
          { label: 'No actions available', value: '', disabled: true }
        );
        break;
      default:
        break;
    }

    return actions;
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
            {bookings.map((booking) => {
              const bookingId = booking._id;
              const customerName = booking.contactInfo?.fullName ||
                `${booking.passenger?.firstName || ''} ${booking.passenger?.lastName || ''}`.trim() ||
                'N/A';
              const customerEmail = booking.contactInfo?.email || booking.passenger?.email || 'N/A';
              const pickupLocation = booking.tripDetails.pickupLocation;
              const destinationLocation = booking.tripDetails.destinationLocation;
              const pickupDate = booking.tripDetails.pickupDate || booking.createdAt;
              const pickupTime = booking.tripDetails.pickupTime || booking.tripDetails.pickupDate;
              const journeyType = booking.journeyType;
              const fare = booking.fare;
              return (
                <TableRow key={bookingId}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{customerName}</div>
                      <div className="text-sm text-muted-foreground">{customerEmail}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium">{pickupLocation}</div>
                      <div className="text-muted-foreground">→ {destinationLocation}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{pickupDate ? format(new Date(pickupDate), 'MMM dd, yyyy') : 'N/A'}</div>
                      <div className="text-muted-foreground">
                        {pickupTime ? format(new Date(pickupTime), 'HH:mm') : 'N/A'}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="capitalize">{journeyType.replace(/-/g, ' ')}</TableCell>
                      <TableCell>€{fare
.toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {getAvailableActions(booking.status).map((action) => (
                          <DropdownMenuItem
                            key={action.value}
                            disabled={action.disabled || !action.value}
                            onClick={() => {
                              if (action.value && !action.disabled) {
                                updateBookingStatus(bookingId, action.value);
                              }
                            }}
                            className={action.variant === 'destructive' ? 'text-destructive focus:text-destructive' : ''}
                          >
                            {action.icon && <span className="mr-2">{action.icon}</span>}
                            {action.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
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
