import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Printer, Globe, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Printer className="mr-2 h-6 w-6 text-accent" />
              Hope & John First Global
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Your one-stop destination for all business services and stationery needs. Professional, reliable, and fast.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><FacebookIcon className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><TwitterIcon className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><InstagramIcon className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Stationery Shop</Link></li>
              <li><Link to="/tracking" className="hover:text-accent transition-colors">Order Tracking</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-accent shrink-0" />
                <span className="text-sm">123 Business Avenue, City Center, Main Street</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent shrink-0" />
                <span className="text-sm">+1 234 567 890 / +1 987 654 321</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent shrink-0" />
                <span className="text-sm">info@hopeandjohn.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Newsletter</h4>
            <p className="text-sm mb-4 text-primary-foreground/80">Subscribe to get updates on new services and products.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-accent-foreground font-semibold py-2 rounded-md hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Hope and John First Global Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FacebookIcon = ({ className }: { className?: string }) => <Globe className={className} />;
const TwitterIcon = ({ className }: { className?: string }) => <Send className={className} />;
const InstagramIcon = ({ className }: { className?: string }) => <MessageCircle className={className} />;

export default Footer;
