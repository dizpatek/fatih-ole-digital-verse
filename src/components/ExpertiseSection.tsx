import React, { useEffect, useRef, useState } from 'react';
import { Settings, Code, Music, Sparkles } from 'lucide-react';

const ExpertiseSection = () => {
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

  const expertiseAreas = [
    {
      icon: Settings,
      title: 'Technical Service & Electronics',
      description: 'I provide expert-level technical service in electronic device repair, electrical work, medical devices and industrial systems.',
      skills: ['Electronic & Electrical Systems', 'Medical & Dental Devices', 'Industrial Machinery', 'Network & Security Systems'],
      gradient: 'from-primary to-primary/50',
      delay: 0,
    },
    {
      icon: Code,
      title: 'Software & System Expert',
      description: 'I have experience in web design, network systems, chatbot development and various software solutions.',
      skills: ['Web Design & Development', 'AI Chatbot Systems', 'CAD-CAM Software', 'Social Media Management'],
      gradient: 'from-secondary to-secondary/50',
      delay: 100,
    },
    {
      icon: Music,
      title: 'Creative Production',
      description: 'I develop creative projects in beat production, photography and graphic design.',
      skills: ['Techno Beat Production', 'Press & Documentary Photography', 'Graphic & Animation Design', 'Screenplay Writing'],
      gradient: 'from-accent to-accent/50',
      delay: 200,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">What I Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text-primary">
            Areas of Expertise
          </h2>
        </div>
        
        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${area.delay}ms` }}
            >
              {/* Card */}
              <div className="relative h-full glass rounded-2xl p-8 card-hover shine overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-[14px] flex items-center justify-center">
                      <area.icon className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-display font-semibold mb-4 text-foreground group-hover:gradient-text-primary transition-all">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {area.description}
                </p>
                
                {/* Skills list */}
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.gradient}`} />
                      {skill}
                    </li>
                  ))}
                </ul>
                
                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${area.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
