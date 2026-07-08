import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <div className="pb-20">
      <div className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent/20 p-3 rounded-xl mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-muted-foreground">+1 234 567 890</p>
                  <p className="text-muted-foreground">+1 987 654 321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/20 p-3 rounded-xl mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-muted-foreground">info@hopeandjohn.com</p>
                  <p className="text-muted-foreground">support@hopeandjohn.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/20 p-3 rounded-xl mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Location</h4>
                  <p className="text-muted-foreground">123 Business Avenue, City Center, Main Street</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/20 p-3 rounded-xl mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Business Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-accent font-semibold">Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full"><Globe className="h-5 w-5" /></Button>
                <Button variant="outline" size="icon" className="rounded-full"><Send className="h-5 w-5" /></Button>
                <Button variant="outline" size="icon" className="rounded-full"><MessageCircle className="h-5 w-5" /></Button>
                <Button variant="outline" size="icon" className="rounded-full bg-[#25D366] border-[#25D366] text-white hover:bg-[#128C7E] hover:border-[#128C7E]"><MessageSquare className="h-5 w-5" /></Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-xl border-none">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="How can we help you?" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Write your message here..." className="min-h-[150px]" required />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-12 rounded-2xl overflow-hidden h-[300px] bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="h-10 w-10 mx-auto mb-2 opacity-20" />
                  <p>Google Map Placeholder</p>
                </div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1530114008169" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0 }} 
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
