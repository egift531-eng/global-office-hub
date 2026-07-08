import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Package, FileText, Settings, LogOut, 
  ChevronRight, ArrowRight, Download, Receipt
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/use-auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const bookings = [
    { id: '#REF-49210', service: 'Document Typing', date: 'Oct 24, 2023', status: 'Processing', cost: '₦5,000' },
    { id: '#REF-38412', service: 'Spiral Binding', date: 'Oct 15, 2023', status: 'Completed', cost: '₦2,000' },
  ];

  const orders = [
    { id: '#HJ-89423', date: 'Oct 24, 2023', status: 'In Transit', total: '₦24,990' },
    { id: '#HJ-77212', date: 'Sep 30, 2023', status: 'Delivered', total: '₦12,500' },
  ];

  return (
    <div className="pb-20">
      <div className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mr-6 border-2 border-accent/20">
              <User className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user?.firstName || 'John'}!</h1>
              <p className="text-white/70">Manage your orders and account settings.</p>
            </div>
          </div>
          <Button variant="outline" className="text-white border-white/30 hover:bg-white/10" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { name: 'Dashboard', icon: <User className="h-4 w-4" /> },
              { name: 'My Bookings', icon: <FileText className="h-4 w-4" /> },
              { name: 'My Orders', icon: <Package className="h-4 w-4" /> },
              { name: 'Invoices', icon: <Receipt className="h-4 w-4" /> },
              { name: 'Profile Settings', icon: <Settings className="h-4 w-4" /> },
            ].map((item, i) => (
              <Button 
                key={i} 
                variant={i === 0 ? "secondary" : "ghost"} 
                className="w-full justify-start text-sm"
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Button>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Active Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">1</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Active Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">1</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">₦55,990</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Bookings */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg">Recent Bookings</CardTitle>
                      <Button variant="link" size="sm" className="text-accent">View All</Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {bookings.map((b) => (
                        <div key={b.id} className="flex items-center justify-between p-3 border rounded-xl bg-card">
                          <div>
                            <p className="font-bold text-sm">{b.service}</p>
                            <p className="text-xs text-muted-foreground">{b.id} • {b.date}</p>
                          </div>
                          <Badge variant={b.status === 'Completed' ? 'secondary' : 'default'} className="bg-primary/10 text-primary border-none text-[10px]">
                            {b.status}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Recent Orders */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg">Recent Orders</CardTitle>
                      <Button variant="link" size="sm" className="text-accent">View All</Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {orders.map((o) => (
                        <div key={o.id} className="flex items-center justify-between p-3 border rounded-xl bg-card">
                          <div>
                            <p className="font-bold text-sm">Order {o.id}</p>
                            <p className="text-xs text-muted-foreground">{o.date} • {o.total}</p>
                          </div>
                          <Badge variant="outline" className="text-[10px]">
                            {o.status}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="bookings" className="animate-in fade-in duration-500">
                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs uppercase bg-muted/50">
                          <tr>
                            <th className="px-6 py-4">Reference</th>
                            <th className="px-6 py-4">Service</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {bookings.map((b) => (
                            <tr key={b.id} className="hover:bg-muted/30 transition-colors">
                              <td className="px-6 py-4 font-medium">{b.id}</td>
                              <td className="px-6 py-4">{b.service}</td>
                              <td className="px-6 py-4">
                                <Badge className="bg-primary/10 text-primary border-none">{b.status}</Badge>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8"><Receipt className="h-4 w-4" /></Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="orders" className="animate-in fade-in duration-500">
                <div className="text-center py-20 bg-muted/30 rounded-3xl">
                  <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-20" />
                  <h3 className="text-xl font-bold mb-2">No orders to show</h3>
                  <p className="text-muted-foreground mb-8">You haven't placed any stationery orders yet.</p>
                  <Link to="/shop"><Button>Go to Shop</Button></Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
