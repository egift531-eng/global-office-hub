import { useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Upload, FileText, Calendar, Truck, Package, 
  ArrowRight, ArrowLeft, CheckCircle2, FileUp, Info, Plus, Minus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { toast } from 'sonner';

const services = [
  { id: 'typing', title: 'Document Typing', basePrice: 500 },
  { id: 'printing', title: 'Printing', basePrice: 50 },
  { id: 'color-printing', title: 'Colour Printing', basePrice: 100 },
  { id: 'photocopying', title: 'Photocopying', basePrice: 20 },
  { id: 'scanning', title: 'Scanning', basePrice: 200 },
  { id: 'binding', title: 'Spiral Binding', basePrice: 1000 },
  { id: 'graphic-design', title: 'Graphic Design', basePrice: 5000 },
  { id: 'cv-writing', title: 'CV Writing', basePrice: 3000 },
];

const BookService = () => {
  const location = useLocation();
  const initialServiceId = location.state?.serviceId || 'typing';
  
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialServiceId);
  const [files, setFiles] = useState<File[]>([]);
  const [instructions, setInstructions] = useState('');
  const [completionDate, setCompletionDate] = useState<Date>();
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [pages, setPages] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentService = services.find(s => s.id === selectedService) || services[0];
  const estimatedCost = (currentService.basePrice * pages) + (deliveryMethod === 'delivery' ? 2500 : 0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      toast.success(`Uploaded ${newFiles.length} file(s)`);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    toast.success("Service booked successfully!");
  };

  if (bookingConfirmed) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-2xl">
        <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">Booking Received!</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Your booking reference is <span className="font-bold text-foreground">#REF-49210</span>
        </p>
        <p className="text-muted-foreground mb-12">
          We have received your files and instructions. An administrator will review them and send a confirmation email shortly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/tracking">
            <Button size="lg" className="w-full sm:w-auto px-10">Track Status</Button>
          </Link>
          <Link to="/">
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Book a Service</h1>
          <p className="text-white/70">Easy 3-step process to get your documents ready.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 -z-10" />
            <div className={`absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 -z-10 transition-all duration-500`} style={{ width: `${((step - 1) / 2) * 100}%` }} />
            
            {[1, 2, 3].map((s) => (
              <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors border-4 bg-white ${step >= s ? 'border-primary text-primary' : 'border-muted text-muted-foreground'}`}>
                {s}
              </div>
            ))}
          </div>

          <form onSubmit={handleBooking}>
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <section>
                  <h2 className="text-2xl font-bold mb-6">Select Service & Upload</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Label htmlFor="service">Choose Service</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map(s => (
                            <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="bg-accent/5 p-4 rounded-xl border border-accent/20 flex items-start">
                        <Info className="h-5 w-5 text-accent mr-3 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          Base price for {currentService.title} starts from ₦{currentService.basePrice.toLocaleString()}. Final cost depends on pages and options.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Label>Number of Pages / Units</Label>
                      <div className="flex items-center border rounded-md h-12 px-4 bg-white">
                        <Button type="button" variant="ghost" size="icon" onClick={() => setPages(p => Math.max(1, p - 1))}><Minus className="h-4 w-4" /></Button>
                        <span className="flex-1 text-center font-bold">{pages}</span>
                        <Button type="button" variant="ghost" size="icon" onClick={() => setPages(p => p + 1)}><Plus className="h-4 w-4" /></Button>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <Label>Upload Documents / Notes</Label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-4 border-2 border-dashed border-muted-foreground/20 rounded-2xl p-12 text-center hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <FileUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-30" />
                    <p className="font-semibold text-lg mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">JPG, PNG, PDF, or Word documents. Max file size: 20MB.</p>
                    <Input 
                      type="file" 
                      multiple 
                      className="hidden" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                  </div>

                  {files.length > 0 && (
                    <div className="mt-6 space-y-3">
                      {files.map((file, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white border rounded-xl">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 mr-3 text-primary" />
                            <span className="text-sm font-medium">{file.name}</span>
                            <span className="text-xs text-muted-foreground ml-3">({(file.size / 1024).toFixed(1)} KB)</span>
                          </div>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            className="text-destructive"
                            onClick={() => removeFile(i)}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                <div className="flex justify-end pt-8">
                  <Button type="button" size="lg" className="px-10" onClick={nextStep}>
                    Next Step <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <section>
                  <h2 className="text-2xl font-bold mb-6">Details & Instructions</h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="instructions">Special Instructions</Label>
                      <Textarea 
                        id="instructions" 
                        placeholder="E.g., Font size 12, Double spacing, Color cover page only..." 
                        className="min-h-[150px]"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <Label>Preferred Completion Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className={`w-full h-12 justify-start text-left font-normal ${!completionDate && "text-muted-foreground"}`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              {completionDate ? format(completionDate, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <CalendarComponent
                              mode="single"
                              selected={completionDate}
                              onSelect={setCompletionDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label>Delivery / Pickup Method</Label>
                        <RadioGroup defaultValue="pickup" className="flex space-x-4 h-12" onValueChange={setDeliveryMethod}>
                          <div className="flex items-center space-x-2 border rounded-md px-4 flex-1">
                            <RadioGroupItem value="pickup" id="pickup" />
                            <Label htmlFor="pickup" className="cursor-pointer">Store Pickup</Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md px-4 flex-1">
                            <RadioGroupItem value="delivery" id="delivery" />
                            <Label htmlFor="delivery" className="cursor-pointer">Delivery</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="flex justify-between pt-8">
                  <Button type="button" variant="outline" size="lg" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button type="button" size="lg" className="px-10" onClick={nextStep}>
                    Review & Pay <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <section>
                  <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
                  <Card className="bg-muted/30 border-none">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Service</p>
                            <p className="font-bold text-lg">{currentService.title}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Documents</p>
                            <p className="font-bold">{files.length} file(s) uploaded</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Pages/Units</p>
                            <p className="font-bold">{pages}</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Completion Date</p>
                            <p className="font-bold">{completionDate ? format(completionDate, "PPP") : "Flexible"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Delivery Method</p>
                            <p className="font-bold uppercase">{deliveryMethod}</p>
                          </div>
                          <div className="pt-4 border-t">
                            <p className="text-sm text-muted-foreground">Estimated Cost</p>
                            <p className="text-3xl font-bold text-primary">₦{estimatedCost.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                  <RadioGroup defaultValue="card" className="space-y-4">
                    <div className="flex items-center space-x-4 border p-4 rounded-xl">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center flex-1 cursor-pointer">
                        <span className="font-bold">Credit / Debit Card</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4 border p-4 rounded-xl">
                      <RadioGroupItem value="transfer" id="transfer" />
                      <Label htmlFor="transfer" className="flex items-center flex-1 cursor-pointer">
                        <span className="font-bold">Bank Transfer</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </section>

                <div className="flex justify-between pt-8">
                  <Button type="button" variant="outline" size="lg" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button type="submit" size="lg" className="px-10 bg-accent text-accent-foreground hover:bg-accent/90">
                    Confirm & Pay Now
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookService;
