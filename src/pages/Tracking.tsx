import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Package, Clock, CheckCircle2, Truck, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Tracking = () => {
  const [refNumber, setRefNumber] = useState('');
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setOrderData({
        number: refNumber || 'HJ-89423',
        status: 'Processing',
        date: 'Oct 24, 2023',
        type: 'Stationery Order',
        steps: [
          { name: 'Received', completed: true, date: 'Oct 24, 2023 09:12 AM' },
          { name: 'Processing', completed: true, date: 'Oct 24, 2023 11:45 AM' },
          { name: 'Printing/Typing', completed: false, date: null },
          { name: 'Completed', completed: false, date: null },
          { name: 'Ready for Pickup', completed: false, date: null },
          { name: 'Delivered', completed: false, date: null },
        ]
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pb-20">
      <div className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Order Tracking</h1>
          <p className="text-white/70">Check the real-time status of your booking or order.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-4xl">
        <Card className="shadow-lg border-none">
          <CardContent className="p-8">
            <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Enter Booking Reference or Order Number (e.g. HJ-89423)" 
                  className="pl-10 h-12"
                  value={refNumber}
                  onChange={(e) => setRefNumber(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-8" disabled={loading}>
                {loading ? 'Tracking...' : 'Track Status'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {orderData && (
          <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-muted/30 rounded-2xl border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tracking Number</p>
                <h3 className="text-xl font-bold text-primary">{orderData.number}</h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order Type</p>
                <p className="font-bold">{orderData.type}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <Badge className="bg-primary px-3 py-1">{orderData.status}</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Expected Date</p>
                <p className="font-bold">{orderData.date}</p>
              </div>
            </div>

            <div className="relative pt-10 pb-4 px-4 sm:px-10">
              <div className="absolute left-8 sm:left-14 top-10 bottom-10 w-1 bg-muted -z-10" />
              
              <div className="space-y-12">
                {orderData.steps.map((step: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${
                      step.completed ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white border-2 border-muted text-muted-foreground'
                    }`}>
                      {step.completed ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                    </div>
                    <div className="ml-6 sm:ml-10">
                      <h4 className={`font-bold text-lg ${step.completed ? 'text-primary' : 'text-muted-foreground'}`}>
                        {step.name}
                      </h4>
                      {step.date && <p className="text-sm text-muted-foreground">{step.date}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/5 p-8 rounded-2xl border border-accent/20">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-accent mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Need assistance?</h4>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about your order status or need to make changes, please contact our support team.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
