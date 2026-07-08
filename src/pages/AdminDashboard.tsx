import { useState } from 'react';
import { 
  LayoutDashboard, ShoppingBag, FileText, Users, 
  BarChart3, Settings, Bell, Search, Plus, 
  Download, CheckCircle, XCircle, MoreVertical, Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Revenue', value: '₦12,450,000', trend: '+12.5%', icon: <BarChart3 className="h-4 w-4" /> },
    { title: 'Active Bookings', value: '24', trend: '+4', icon: <FileText className="h-4 w-4" /> },
    { title: 'New Orders', value: '18', trend: '+2', icon: <ShoppingBag className="h-4 w-4" /> },
    { title: 'Active Customers', value: '1,240', trend: '+45', icon: <Users className="h-4 w-4" /> },
  ];

  const recentBookings = [
    { id: '#REF-49210', customer: 'Sarah Johnson', service: 'Document Typing', status: 'Pending', date: '2 mins ago' },
    { id: '#REF-49211', customer: 'Michael Chen', service: 'Color Printing', status: 'In Progress', date: '15 mins ago' },
    { id: '#REF-49212', customer: 'Emma Wilson', service: 'Graphic Design', status: 'Completed', date: '1 hour ago' },
  ];

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-primary text-primary-foreground p-6 flex flex-col">
        <div className="mb-10 px-2">
          <h2 className="text-xl font-bold flex items-center">
            <LayoutDashboard className="mr-2 h-5 w-5 text-accent" />
            Admin Panel
          </h2>
        </div>
        <nav className="space-y-2 flex-1">
          {[
            { id: 'overview', name: 'Dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
            { id: 'orders', name: 'Orders', icon: <ShoppingBag className="h-4 w-4" /> },
            { id: 'bookings', name: 'Bookings', icon: <FileText className="h-4 w-4" /> },
            { id: 'products', name: 'Products', icon: <Package className="h-4 w-4" /> },
            { id: 'customers', name: 'Customers', icon: <Users className="h-4 w-4" /> },
            { id: 'reports', name: 'Reports', icon: <BarChart3 className="h-4 w-4" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-xl text-sm transition-all ${
                activeTab === item.id ? 'bg-accent text-accent-foreground font-bold' : 'hover:bg-white/10'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
        <div className="mt-10 pt-6 border-t border-white/10">
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
            <Settings className="mr-3 h-4 w-4" /> Settings
          </Button>
        </div>
      </aside>

      {/* Admin Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold capitalize">{activeTab}</h1>
            <p className="text-sm text-muted-foreground">Manage your business operations efficiently.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search records..." className="pl-10 bg-white" />
            </div>
            <Button size="icon" variant="outline" className="rounded-full bg-white relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-accent rounded-full border-2 border-white" />
            </Button>
            <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground">
              AD
            </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <Card key={i} className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-primary/5 p-2 rounded-lg text-primary">{stat.icon}</div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">{stat.trend}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity Table */}
              <Card className="border-none shadow-sm overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between border-b bg-white">
                  <CardTitle className="text-lg">Recent Bookings</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted/30">
                      <tr>
                        <th className="px-6 py-4">Customer</th>
                        <th className="px-6 py-4">Service</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {recentBookings.map((b) => (
                        <tr key={b.id} className="hover:bg-muted/10 transition-colors">
                          <td className="px-6 py-4">
                            <p className="font-bold">{b.customer}</p>
                            <p className="text-xs text-muted-foreground">{b.id}</p>
                          </td>
                          <td className="px-6 py-4">{b.service}</td>
                          <td className="px-6 py-4">
                            <Badge variant={b.status === 'Completed' ? 'secondary' : 'default'} className="text-[10px]">
                              {b.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Task/Quick Actions */}
              <div className="space-y-6">
                <Card className="border-none shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Management</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <Button className="h-20 flex flex-col space-y-2 bg-primary">
                      <Plus className="h-5 w-5" />
                      <span>Add Product</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col space-y-2 border-primary text-primary">
                      <Download className="h-5 w-5" />
                      <span>Sales Report</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col space-y-2">
                      <CheckCircle className="h-5 w-5" />
                      <span>Confirm Payments</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col space-y-2">
                      <XCircle className="h-5 w-5 text-destructive" />
                      <span>Low Stock Items</span>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-accent/10 border border-accent/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Check our admin documentation or contact technical support for system assistance.
                    </p>
                    <Button size="sm" className="bg-primary">Technical Support</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'overview' && (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-primary/20 animate-in fade-in zoom-in-95 duration-500">
            <LayoutDashboard className="h-16 w-16 text-primary opacity-20 mb-6" />
            <h3 className="text-xl font-bold mb-2">Manage {activeTab}</h3>
            <p className="text-muted-foreground text-center max-w-md">
              The {activeTab} management interface allows you to view, edit, and update all records related to this section.
            </p>
            <Button className="mt-8 bg-primary">Load Full Data Table</Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
