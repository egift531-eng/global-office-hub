import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, CreditCard, Landmark, Wallet, ArrowLeft, Truck, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';
import { toast } from 'sonner';

const Checkout = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  
  const deliveryFee = deliveryMethod === 'delivery' ? 2500 : 0;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-2xl">
        <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">Order Confirmed!</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Thank you for your purchase. Your order number is <span className="font-bold text-foreground">#HJ-89423</span>
        </p>
        <p className="text-muted-foreground mb-12">
          We've sent a confirmation email with all the details and tracking information.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/tracking">
            <Button size="lg" className="w-full sm:w-auto px-10">Track Your Order</Button>
          </Link>
          <Link to="/">
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">No items to checkout</h2>
        <Link to="/shop"><Button>Go to Shop</Button></Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Checkout</h1>
            <p className="text-white/70">Complete your information to place order.</p>
          </div>
          <Link to="/cart">
            <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Customer Information */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 234 567 890" required />
                </div>
              </div>
            </section>

            {/* Delivery Method */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                Delivery Method
              </h2>
              <RadioGroup defaultValue="delivery" className="grid grid-cols-1 md:grid-cols-2 gap-4" onValueChange={setDeliveryMethod}>
                <div>
                  <RadioGroupItem value="delivery" id="delivery" className="peer sr-only" />
                  <Label
                    htmlFor="delivery"
                    className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-6 hover:bg-accent/5 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                  >
                    <Truck className="mb-3 h-6 w-6" />
                    <div className="text-center">
                      <p className="font-bold">Home Delivery</p>
                      <p className="text-sm text-muted-foreground">Standard delivery (₦2,500)</p>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="pickup" id="pickup" className="peer sr-only" />
                  <Label
                    htmlFor="pickup"
                    className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-6 hover:bg-accent/5 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                  >
                    <Package className="mb-3 h-6 w-6" />
                    <div className="text-center">
                      <p className="font-bold">Store Pickup</p>
                      <p className="text-sm text-muted-foreground">Collect from business centre (Free)</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
              
              {deliveryMethod === 'delivery' && (
                <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main St, Apartment 4B" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Central City" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State / Province</Label>
                      <Input id="state" placeholder="State Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">Zip / Postal Code</Label>
                      <Input id="zip" placeholder="10001" required />
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                Payment Method
              </h2>
              <RadioGroup defaultValue="card" className="space-y-4">
                <div className="flex items-center space-x-4 border p-4 rounded-xl cursor-pointer hover:bg-muted/30 transition-colors">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center flex-1 cursor-pointer">
                    <CreditCard className="mr-4 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-bold">Credit / Debit Card</p>
                      <p className="text-xs text-muted-foreground">Visa, Mastercard, American Express</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-4 border p-4 rounded-xl cursor-pointer hover:bg-muted/30 transition-colors">
                  <RadioGroupItem value="transfer" id="transfer" />
                  <Label htmlFor="transfer" className="flex items-center flex-1 cursor-pointer">
                    <Landmark className="mr-4 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-bold">Bank Transfer</p>
                      <p className="text-xs text-muted-foreground">Direct transfer to our business account</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-4 border p-4 rounded-xl cursor-pointer hover:bg-muted/30 transition-colors">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile" className="flex items-center flex-1 cursor-pointer">
                    <Wallet className="mr-4 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-bold">Mobile Payment</p>
                      <p className="text-xs text-muted-foreground">M-Pesa, PayPal, or Google Pay</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </section>

            <div className="flex items-start space-x-3 pt-6 border-t">
              <Checkbox id="terms" required />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
                <p className="text-xs text-muted-foreground">
                  By checking this box, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-28 shadow-lg border-none bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                <div className="space-y-4 mb-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} <span className="text-xs">x{item.quantity}</span>
                      </span>
                      <span className="font-medium">₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Delivery Fee</span>
                    <span>₦{deliveryFee.toLocaleString()}</span>
                  </div>
                  <Separator className="my-6" />
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">₦{total.toLocaleString()}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-10 bg-primary py-6 text-lg font-bold">
                  Place Order
                </Button>
                
                <p className="text-center text-xs text-muted-foreground mt-6">
                  You will receive an order confirmation email shortly after placing your order.
                </p>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
