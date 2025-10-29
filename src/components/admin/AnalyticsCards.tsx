import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, TrendingUp, Users, Car } from "lucide-react";
import { apiClient } from "@/lib/api";
import { AnalyticsData } from "@/types";


const AnalyticsCards = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalBookings: 0,
    totalRevenue: 0,
    completedRides: 0,
    pendingBookings: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await apiClient.analytics.getDashboard();
      setAnalytics(response.data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Total Bookings",
      value: analytics.totalBookings,
      description: "All time bookings",
      icon: Users,
      trend: "+12% from last month",
    },
    {
      title: "Total Revenue",
      value: `€${analytics.totalRevenue.toFixed(2)}`,
      description: "Paid invoices",
      icon: Coins,
      trend: "+8% from last month",
    },
    {
      title: "Completed Rides",
      value: analytics.completedRides,
      description: "Successfully completed",
      icon: Car,
      trend: "+15% from last month",
    },
    {
      title: "Pending Bookings",
      value: analytics.pendingBookings,
      description: "Awaiting confirmation",
      icon: TrendingUp,
      trend: "3 new today",
    },
  ];

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array(4).fill(0).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 bg-muted rounded w-24"></div>
              <div className="h-4 w-4 bg-muted rounded"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-16 mb-2"></div>
              <div className="h-3 bg-muted rounded w-32"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Card key={card.title} className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
              <p className="text-xs text-green-600 mt-1">
                {card.trend}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default AnalyticsCards;
