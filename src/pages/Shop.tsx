import { useState } from 'react';
import { Search, Filter, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';

const categories = [
  "All", "Exercise Books", "Notebooks", "Pens", "Pencils", "Markers", 
  "Rulers", "Erasers", "Files", "Envelopes", "Office Supplies", "School Supplies"
];

const products = [
  { id: '1', name: 'A4 Premium Notebook', category: 'Notebooks', price: 4500, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80', description: 'High-quality 80gsm ruled paper, 200 pages.' },
  { id: '2', name: 'Gel Pen Set (12 Pack)', category: 'Pens', price: 2400, image: 'https://images.unsplash.com/photo-1585336139118-132f507ad742?w=500&q=80', description: 'Smooth writing gel pens in assorted colors.' },
  { id: '3', name: 'Wooden Ruler 30cm', category: 'Rulers', price: 500, image: 'https://images.unsplash.com/photo-1610473068564-9552ca401244?w=500&q=80', description: 'Durable wooden ruler with metric and imperial scales.' },
  { id: '4', name: 'Lever Arch File', category: 'Files', price: 3500, image: 'https://images.unsplash.com/photo-1586075010620-22703f48a274?w=500&q=80', description: 'Sturdy file for document organization.' },
  { id: '5', name: 'Highlighter Pack (5 Pack)', category: 'Markers', price: 2500, image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&q=80', description: 'Bright fluorescent highlighters for studying.' },
  { id: '6', name: 'HB Pencil Box (12 Pack)', category: 'Pencils', price: 1800, image: 'https://images.unsplash.com/photo-1520032484190-e5ef81d87978?w=500&q=80', description: 'Standard HB pencils with eraser tips.' },
  { id: '7', name: 'Whiteboard Marker Set', category: 'Markers', price: 3500, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80', description: 'Dry-erase markers for whiteboards.' },
  { id: '8', name: 'Office Stapler', category: 'Office Supplies', price: 5000, image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=500&q=80', description: 'Heavy-duty stapler for office use.' },
];

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-20">
      <div className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Stationery Shop</h1>
          <p className="text-white/70">Quality supplies for school and office.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            <div>
              <h3 className="font-bold mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" /> Categories
              </h3>
              <div className="space-y-1">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="text-sm text-muted-foreground flex items-center">
                Showing {filteredProducts.length} products
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                      <Link to={`/shop/${product.id}`}>
                        <Button variant="secondary" size="icon" className="rounded-full">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        className="rounded-full"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                      {product.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <Link to={`/shop/${product.id}`} className="hover:text-primary transition-colors">
                      <h3 className="font-bold text-lg mb-1 truncate">{product.name}</h3>
                    </Link>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-3 h-10">
                      {product.description}
                    </p>
                    <p className="text-xl font-bold text-primary">₦{product.price.toLocaleString()}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-muted/30 rounded-2xl">
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-20" />
                <h3 className="text-xl font-bold mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
                <Button variant="link" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
