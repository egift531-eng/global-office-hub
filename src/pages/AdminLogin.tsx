import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Admin login successful. Redirecting to dashboard...");
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border">
        <div className="text-center mb-10">
          <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">Admin Portal</h1>
          <p className="text-muted-foreground">Hope & John First Global Services</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="admin-email">Admin Email</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="admin-email" type="email" placeholder="admin@hopeandjohn.com" className="pl-10 h-12" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="admin-password" type="password" className="pl-10 h-12" required />
            </div>
          </div>
          <Button type="submit" className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90">
            Secure Login <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-xs text-muted-foreground">
            This is a secure administrative area. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
