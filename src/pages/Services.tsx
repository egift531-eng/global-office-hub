import { Link } from 'react-router-dom';
import { FileText, Printer, Palette, Shield, BookOpen, Camera, ScanLine, PenTool, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    id: 'document-typing',
    name: 'Document Typing',
    description: 'Professional typing services for documents, letters, and manuscripts. We handle printed or handwritten content with accuracy.',
    basePrice: 500,
    category: 'typing',
    estimatedTime: '1-2 hours',
    icon: FileText,
    features: ['Handwritten to digital', 'PDF & Word formats', 'Proofreading included'],
  },
  {
    id: 'printing',
    name: 'Photocopying & Printing',
    description: 'High-quality black & white and color printing. Bulk discounts available for large orders.',
    basePrice: 50,
    category: 'printing',
    estimatedTime: '30 minutes',
    icon: Printer,
    features: ['B&W and color options', 'Bulk discounts', 'Multiple paper sizes'],
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    description: 'Custom logo design, flyers, banners, business cards, and social media graphics.',
    basePrice: 5000,
    category: 'design',
    estimatedTime: '2-5 days',
    icon: Palette,
    features: ['Logo design', 'Flyers & banners', 'Business cards'],
  },
  {
    id: 'lamination',
    name: 'Lamination',
    description: 'Professional document lamination in various sizes. Protect your important documents.',
    basePrice: 200,
    category: 'printing',
    estimatedTime: '15 minutes',
    icon: Shield,
    features: ['Multiple sizes', 'Glossy & matte finish', 'Instant service'],
  },
  {
    id: 'binding',
    name: 'Binding & Spiral',
    description: 'Thermal binding, spiral binding, and hard cover binding for reports and theses.',
    basePrice: 1000,
    category: 'printing',
    estimatedTime: '1 hour',
    icon: BookOpen,
    features: ['Thermal binding', 'Spiral binding', 'Hard cover options'],
  },
  {
    id: 'passport-photo',
    name: 'Passport Photography',
    description: 'Professional passport and ID photographs meeting official requirements.',
    basePrice: 1000,
    category: 'photography',
    estimatedTime: '10 minutes',
    icon: Camera,
    features: ['Official standards', 'Multiple copies', 'Digital delivery'],
  },
  {
    id: 'scanning',
    name: 'Scanning Services',
    description: 'High-resolution document scanning with digital delivery via email or USB.',
    basePrice: 200,
    category: 'printing',
    estimatedTime: '30 minutes',
    icon: ScanLine,
    features: ['High resolution', 'Email or USB delivery', 'Batch scanning'],
  },
  {
    id: 'cv-writing',
    name: 'CV/Resume Writing',
    description: 'Professional CV and resume writing services tailored to your career goals.',
    basePrice: 3000,
    category: 'typing',
    estimatedTime: '1-3 days',
    icon: PenTool,
    features: ['Tailored content', 'ATS-friendly format', 'Cover letter add-on'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/90">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Business Services
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            From document typing to graphic design, we provide comprehensive business solutions 
            to help you succeed. Quality service, competitive prices, fast turnaround.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
            >
              <Link to="/book">Book a Service <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our range of professional services designed to meet all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="group hover:shadow-xl transition-all duration-300 border hover:border-accent/50 flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-primary">{service.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Starting from</p>
                        <p className="text-xl font-bold text-primary">
                          ₦{service.basePrice.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.estimatedTime}
                      </div>
                    </div>
                    <Button 
                      asChild 
                      className="mt-4 w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      <Link to={`/book?service=${service.id}`}>
                        Book Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-white/80 mb-8 text-lg">
            We also offer tailored services for businesses and organizations. 
            Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
            >
              <Link to="/book">Get a Quote</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
