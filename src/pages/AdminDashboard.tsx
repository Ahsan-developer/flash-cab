import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Car, FileText, DollarSign, TrendingUp, Users } from "lucide-react";
import BookingsTable from "@/components/admin/BookingsTable";
import InvoicesTable from "@/components/admin/InvoicesTable";
import AnalyticsCards from "@/components/admin/AnalyticsCards";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Car className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">QuickHop Admin</h1>
                <p className="text-sm text-muted-foreground">Manage your ride booking business</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              Back to Main Site
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="bookings" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              Bookings
            </TabsTrigger>
            <TabsTrigger value="invoices" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Invoices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Analytics Overview</h2>
              <p className="text-muted-foreground">
                Track your business performance and key metrics.
              </p>
            </div>
            <AnalyticsCards />
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Bookings Management</h2>
              <p className="text-muted-foreground">
                View and manage all ride bookings.
              </p>
            </div>
            <BookingsTable />
          </TabsContent>

          <TabsContent value="invoices" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Invoice Records</h2>
              <p className="text-muted-foreground">
                Track payments and billing information.
              </p>
            </div>
            <InvoicesTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;