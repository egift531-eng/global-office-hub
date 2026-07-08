import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const deliveryFee = cart.length > 0 ? 2500 : 0;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any stationery items yet.</p>
        <Link to="/shop">
          <Button size="lg" className="bg-primary px-8">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-white/70">Review your items before checkout.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <Card key={item.id} className="overflow-hidden border-none shadow-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-primary font-bold text-lg">₦{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{item.category}</p>
                      
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                        <div className="flex items-center border rounded-md bg-muted/50 h-9">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" /> Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-between pt-4">
              <Link to="/shop">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-28 shadow-lg border-none bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery Fee</span>
                    <span>₦{deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className="pt-4 space-y-2">
                    <p className="text-sm font-medium">Coupon Code</p>
                    <div className="flex space-x-2">
                      <Input placeholder="Enter code" className="bg-white" />
                      <Button variant="secondary">Apply</Button>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">₦{total.toLocaleString()}</span>
                  </div>
                  
                  <Link to="/checkout" className="block w-full pt-6">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg">
                      Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <div className="mt-8 pt-8 border-t border-white/10 text-xs text-center text-muted-foreground space-y-2">
                    <p>Secure payment processed by Hope & John First Global.</p>
                    <p>Taxes included where applicable.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
