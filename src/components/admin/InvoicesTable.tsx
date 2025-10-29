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
import { apiClient } from "@/lib/api";
import { Invoice } from "@/types";
import { format } from "date-fns";


const InvoicesTable = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await apiClient.invoices.getAll();
      setInvoices(response.data.data || []);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    } finally {
      setLoading(false);
    }
  };

  const updatePaymentStatus = async (id: string, status: string) => {
    try {
      await apiClient.invoices.updatePaymentStatus(id, status);

      // Refresh invoices
      fetchInvoices();
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    const statusColors = {
      pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
      paid: "bg-green-100 text-green-800 hover:bg-green-100",
      failed: "bg-red-100 text-red-800 hover:bg-red-100",
      refunded: "bg-gray-100 text-gray-800 hover:bg-gray-100",
    };

    return (
      <Badge className={statusColors[status as keyof typeof statusColors] || "bg-gray-100 text-gray-800"}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading Invoices...</CardTitle>
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
        <CardTitle>Invoice Records</CardTitle>
        <CardDescription>
          Track payments and billing information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice #</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Base Fare</TableHead>
              <TableHead>Additional</TableHead>
              <TableHead>Tax</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">
                  {invoice.invoice_number}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{invoice.customer_name}</div>
                    <div className="text-sm text-muted-foreground">{invoice.customer_email}</div>
                  </div>
                </TableCell>
                <TableCell>€{invoice.base_fare?.toFixed(2) || '0.00'}</TableCell>
                <TableCell>€{invoice.additional_charges?.toFixed(2) || '0.00'}</TableCell>
                <TableCell>€{invoice.tax_amount?.toFixed(2) || '0.00'}</TableCell>
                <TableCell className="font-medium">
                  €{invoice.total_amount?.toFixed(2) || '0.00'}
                </TableCell>
                <TableCell>{getPaymentStatusBadge(invoice.payment_status)}</TableCell>
                <TableCell>
                  {format(new Date(invoice.created_at), 'MMM dd, yyyy')}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {invoice.payment_status === 'pending' && (
                      <Button
                        size="sm"
                        onClick={() => updatePaymentStatus(invoice.id, 'paid')}
                      >
                        Mark Paid
                      </Button>
                    )}
                    {invoice.payment_status === 'paid' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updatePaymentStatus(invoice.id, 'refunded')}
                      >
                        Refund
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {invoices.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No invoices found. Invoice records will appear here.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InvoicesTable;
