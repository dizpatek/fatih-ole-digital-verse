import React, { useEffect, useState } from 'react';
import { ArrowDown, Calendar, MapPin, Phone, Mail, Award, Zap, Music, Settings, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Zap, label: '10+ Years Experience', color: 'text-primary' },
    { icon: Music, label: 'Beat Producer', color: 'text-secondary' },
    { icon: Settings, label: '50+ Technical Skills', color: 'text-accent' },
    { icon: Globe, label: 'Technical English', color: 'text-warning' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="text-center max-w-5xl mx-auto">
        {/* Status badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for new opportunities</span>
        </div>

        {/* Main heading */}
        <div className={`mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="gradient-text">Fatih</span>
            <br />
            <span className="text-foreground">SONTÜRK</span>
          </h1>
          
          {/* Personal details */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { icon: Calendar, text: '33 Years Old' },
              { icon: MapPin, text: 'Istanbul, Turkey' },
              { icon: Award, text: 'Technical Expert' },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <item.icon size={16} className="group-hover:text-primary transition-colors" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-muted-foreground mb-6 font-display transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Multi-Skilled Technical Expert • Beat Producer • System Developer • Photographer
        </p>

        {/* Description */}
        <div className={`max-w-4xl mx-auto mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">With 10+ years of experience</span> as a versatile technical expert, 
            I develop innovative solutions in <span className="text-secondary font-medium">mechatronics and system integration</span> fields. 
            From <span className="text-accent font-medium">electronic device repair</span> to <span className="text-warning font-medium">network systems</span>, 
            from <span className="text-secondary font-medium">music production</span> to <span className="text-info font-medium">photography</span>, I provide 
            professional services across a wide spectrum.
          </p>
        </div>
        
        {/* Key Features */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-4 card-hover shine group"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <feature.icon className={`${feature.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} size={24} />
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="tel:+905382244488" className="flex items-center gap-2 glass px-5 py-3 rounded-full hover:bg-success/10 hover:border-success/50 transition-all group">
            <Phone size={18} className="text-success group-hover:animate-bounce-subtle" />
            <span className="text-foreground font-medium">0538 22 444 88</span>
          </a>
          <a href="mailto:dizpatek@gmail.com" className="flex items-center gap-2 glass px-5 py-3 rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all group">
            <Mail size={18} className="text-primary group-hover:animate-bounce-subtle" />
            <span className="text-foreground font-medium">dizpatek@gmail.com</span>
          </a>
        </div>

        {/* CTA buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            to="/projeler"
            className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 text-primary-foreground">
              View My Projects
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </span>
          </Link>
          
          <Link
            to="/portfolio"
            className="group px-8 py-4 border-2 border-secondary/50 rounded-full font-semibold hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
          >
            <span className="flex items-center gap-2 text-secondary">
              View Portfolio
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </span>
          </Link>
          
          <Link
            to="/iletisim"
            className="group px-8 py-4 border-2 border-border rounded-full font-semibold hover:border-primary hover:text-primary transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Get In Touch
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
