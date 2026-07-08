import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Star, ShieldCheck, Truck, RefreshCw, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/hooks/use-cart';

const products = [
  { id: '1', name: 'A4 Premium Notebook', category: 'Notebooks', price: 4500, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80', description: 'High-quality 80gsm ruled paper, 200 pages. Durable cover and professional binding.', features: ['80 GSM Paper', '200 Pages', 'Hardcover', 'Acid-free paper'], stock: 'In Stock' },
  // ... others
];

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Find product or use dummy
  const product = products.find(p => p.id === id) || {
    id: id || '1',
    name: 'Premium Stationery Item',
    category: 'Office Supplies',
    price: 12990,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80',
    description: 'A professional grade stationery item perfect for office and school use. Made with high-quality materials to ensure durability and a premium experience.',
    features: ['High quality', 'Durable', 'Professional', 'Eco-friendly'],
    stock: 'In Stock'
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="pb-20">
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden border">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden border cursor-pointer hover:border-primary transition-colors">
                  <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <Badge className="w-fit mb-4 bg-accent text-accent-foreground">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <span className="text-sm text-muted-foreground">(24 Customer Reviews)</span>
              <span className="text-sm text-green-600 font-semibold">{product.stock}</span>
            </div>

            <p className="text-3xl font-bold text-primary mb-8">₦{product.price.toLocaleString()}</p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <ul className="space-y-3 mb-8">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm font-medium">
                  <ShieldCheck className="h-5 w-5 mr-3 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10 pt-8 border-t">
              <div className="flex items-center border rounded-md px-2 bg-muted/50">
                <Button variant="ghost" size="icon" onClick={decrement} className="h-10 w-10"><Minus className="h-4 w-4" /></Button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={increment} className="h-10 w-10"><Plus className="h-4 w-4" /></Button>
              </div>
              <Button 
                size="lg" 
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => addToCart(product, quantity)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 py-8 border-t text-center">
              <div>
                <Truck className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs font-semibold">Fast Delivery</p>
              </div>
              <div>
                <ShieldCheck className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs font-semibold">Secure Payment</p>
              </div>
              <div>
                <RefreshCw className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs font-semibold">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4">Description</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4">Reviews (24)</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="py-8">
              <div className="max-w-3xl prose prose-sm">
                <p>This premium stationery item is designed for those who value quality and professionalism. Whether you are a student preparing for exams or a professional organizing an office, this product delivers exceptional performance.</p>
                <p className="mt-4">Made from sustainable materials and crafted with attention to detail, it stands out for its durability and aesthetic appeal. The ergonomic design ensures comfort during extended use.</p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-8">
              <div className="space-y-8 max-w-2xl">
                {[1, 2].map((i) => (
                  <div key={i} className="border-b pb-8">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="font-bold mr-4">User {i}</div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3 w-3 fill-accent text-accent" />)}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">Oct 24, 2023</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Great quality! Exactly what I was looking for. Fast delivery too.</p>
                  </div>
                ))}
                <Button variant="outline">Write a Review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
