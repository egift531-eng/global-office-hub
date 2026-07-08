import { CheckCircle2, Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-20">
      <div className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover the story, mission, and values behind Hope and John First Global Services.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded with a vision to bridge the gap in professional business services and high-quality stationery, Hope and John First Global Services has grown from a small local shop to a comprehensive business hub.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We understood that small businesses and students needed a reliable partner for their document needs—someone who could provide everything from simple printing to complex business documentation and premium stationery in one place.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve hundreds of clients daily, delivering excellence through our state-of-the-art equipment and a dedicated team of professionals who take pride in their work.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20">
                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                <p className="text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="text-4xl font-bold text-primary mb-2">50k+</h3>
                <p className="text-muted-foreground font-medium">Clients Served</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                <p className="text-muted-foreground font-medium">Quality Focus</p>
              </div>
              <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20">
                <h3 className="text-4xl font-bold text-primary mb-2">24h</h3>
                <p className="text-muted-foreground font-medium">Average Turnaround</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 border rounded-2xl hover:border-accent transition-colors">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide accessible, high-quality business services and stationery products that empower individuals and businesses to achieve their goals.
            </p>
          </div>
          <div className="text-center p-8 border rounded-2xl hover:border-accent transition-colors">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the most trusted and preferred business services and stationery provider in the region, known for innovation and excellence.
            </p>
          </div>
          <div className="text-center p-8 border rounded-2xl hover:border-accent transition-colors">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Core Values</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" /> Integrity & Trust</li>
              <li className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" /> Customer Satisfaction</li>
              <li className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" /> Continuous Innovation</li>
              <li className="flex items-center justify-center"><CheckCircle2 className="h-4 w-4 mr-2 text-accent" /> Professionalism</li>
            </ul>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet the Team</h2>
            <p className="text-muted-foreground">The dedicated professionals behind our success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', role: 'Founder & CEO' },
              { name: 'Hope Smith', role: 'Co-Founder & Operations' },
              { name: 'Jane Wilson', role: 'Head of Graphics' },
              { name: 'Robert Brown', role: 'Customer Success' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square bg-muted rounded-2xl mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-primary/10">
                    <Users className="h-20 w-20 text-primary/20" />
                  </div>
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-accent font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
