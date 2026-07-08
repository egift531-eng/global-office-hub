import { Link } from 'react-router-dom';
import { ArrowRight, Printer, BookOpen, PenTool, CheckCircle, Star, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const featuredServices = [
    { title: 'Document Typing', icon: <PenTool className="h-8 w-8 text-accent" />, desc: 'Professional typing services for all document types.' },
    { title: 'Printing & Photocopying', icon: <Printer className="h-8 w-8 text-accent" />, desc: 'High-quality color and B&W printing at affordable rates.' },
    { title: 'Document Binding', icon: <BookOpen className="h-8 w-8 text-accent" />, desc: 'Spiral and thermal binding to give your documents a professional finish.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ec9bbf8-ca85-4a07-a801-70c21092ca04/hero-banner-c14c5d7b-1783464737941.webp" 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your One-Stop Business & <span className="text-accent">Stationery</span> Centre
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professional business services and high-quality stationery products tailored to your needs. Fast, reliable, and accessible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Book a Service
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Featured Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <Link to="/services" className="text-primary font-semibold flex items-center justify-center hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Hope & John First Global?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Quality Assurance', desc: 'We use high-grade materials and equipment for all our services.' },
                  { title: 'Fast Turnaround', desc: 'Get your documents typed, printed, or bound in record time.' },
                  { title: 'Secure Handling', desc: 'Your documents and data are handled with the utmost confidentiality.' },
                  { title: 'Customer First', desc: 'Friendly support and personalized service for every client.' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ec9bbf8-ca85-4a07-a801-70c21092ca04/business-services-334603d2-1783464738554.webp" 
                alt="Why Choose Us" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Quality Stationery in Store</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sample Products */}
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square bg-muted">
                  <img 
                    src={`https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ec9bbf8-ca85-4a07-a801-70c21092ca04/stationery-collection-4a1b556f-1783464739754.webp`} 
                    alt="Product" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Premium Notebook Set</h4>
                  <p className="text-accent font-bold">₦12,990</p>
                  <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link to="/shop" className="inline-block mt-12">
            <Button size="lg">Explore Full Shop</Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', text: 'Amazing service! They typed my 50-page document overnight and the quality was perfect.' },
              { name: 'Michael Chen', text: 'The best place for high-quality printing. The colors are so vibrant and the staff is very professional.' },
              { name: 'Emily Brown', text: 'I love their stationery collection. Found some unique notebooks I couldnt find anywhere else.' },
            ].map((t, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <p className="italic mb-4 text-primary-foreground/90">"{t.text}"</p>
                <p className="font-bold text-accent">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-accent rounded-3xl p-12 text-center text-accent-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Book your business service or browse our stationery shop today for a professional and seamless experience.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/book">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
                  Book Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
