import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Settings, Users, Calendar, ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      icon: Briefcase,
      company: 'Siya Health Services - CityDent',
      role: 'Social Media, System & Network Specialist, Technical Manager and Photographer',
      duration: '2022 - Present',
      color: 'primary',
      current: true,
    },
    {
      icon: Settings,
      company: 'Repair Hospital',
      role: 'Own Business - Electronic repair and maintenance service',
      duration: '2019 - 2022',
      color: 'secondary',
      current: false,
    },
    {
      icon: Users,
      company: 'Venus Hotel',
      role: 'Sales and Personnel Manager - HVAC and electrical systems',
      duration: '2015 - 2017',
      color: 'accent',
      current: false,
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary bg-primary/10 border-primary/50';
      case 'secondary': return 'text-secondary bg-secondary/10 border-secondary/50';
      case 'accent': return 'text-accent bg-accent/10 border-accent/50';
      default: return 'text-primary bg-primary/10 border-primary/50';
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-transparent to-muted/10 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text-primary">
            Professional Experience
          </h2>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass rounded-2xl p-6 card-hover shine group relative overflow-hidden">
                      {/* Current badge */}
                      {exp.current && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-success/20 text-success text-xs font-medium rounded-full flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                            Current
                          </span>
                        </div>
                      )}
                      
                      {/* Icon for mobile */}
                      <div className={`md:hidden w-12 h-12 rounded-xl ${getColorClasses(exp.color)} flex items-center justify-center mb-4`}>
                        <exp.icon size={24} />
                      </div>
                      
                      {/* Duration */}
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar size={14} />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      
                      {/* Company */}
                      <h3 className={`text-xl font-display font-semibold mb-2 text-${exp.color} group-hover:gradient-text-primary transition-all`}>
                        {exp.company}
                      </h3>
                      
                      {/* Role */}
                      <p className="text-muted-foreground">
                        {exp.role}
                      </p>
                      
                      {/* Decorative arrow */}
                      <div className={`absolute ${index % 2 === 0 ? '-right-3' : '-left-3'} top-1/2 -translate-y-1/2 hidden md:block`}>
                        <ArrowRight className={`w-6 h-6 text-${exp.color} ${index % 2 === 0 ? '' : 'rotate-180'}`} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Center icon (desktop) */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-2xl ${getColorClasses(exp.color)} border-2 flex items-center justify-center shadow-lg z-10 bg-card`}>
                      <exp.icon size={24} />
                    </div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
