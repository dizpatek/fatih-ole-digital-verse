import React, { useEffect, useRef, useState } from 'react';
import { Award, Star, Zap, GraduationCap, Medal, Shield } from 'lucide-react';

const EducationSection = () => {
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

  const education = [
    { school: 'Şişli Vocational High School', degree: 'Electronic Products Apprenticeship, Mastery, Master Instructor', year: '2024', color: 'primary' },
    { school: 'Istanbul University', degree: 'Civil Air Transportation', year: '2015', color: 'secondary' },
    { school: 'Anadolu University', degree: 'Public Administration', year: '2014', color: 'accent' },
    { school: 'Kasımpaşa Anatolian Science High School', degree: 'Science-Mathematics (GPA: 4.00)', year: '2009', color: 'warning' },
  ];

  const certificates = [
    { icon: Award, name: 'Electronic Products Apprenticeship Certificate', color: 'warning' },
    { icon: Medal, name: 'Electronic Products Mastery Certificate', color: 'warning' },
    { icon: Shield, name: 'Electronic Products Master Instructor Certificate', color: 'warning' },
    { icon: Award, name: 'Press Photography Certificate', color: 'primary' },
    { icon: Award, name: 'Documentary Photography Certificate', color: 'secondary' },
    { icon: Award, name: 'Screenplay Certificate', color: 'accent' },
    { icon: Star, name: 'IFSAK Member (Istanbul Photography and Cinema Foundation)', color: 'info' },
    { icon: Zap, name: 'A1, A2, B, D, F Driver\'s License', color: 'success' },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text-primary">
            Education & Certificates
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass rounded-2xl p-8 h-full shine">
              <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                Education Background
              </h3>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative pl-6 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline dot and line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5">
                      <div className={`absolute top-1.5 -left-1 w-3 h-3 rounded-full bg-${item.color} group-hover:scale-125 transition-transform`} />
                      {index < education.length - 1 && (
                        <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-${item.color} to-transparent`} />
                      )}
                    </div>
                    
                    <div className="pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-semibold text-${item.color} group-hover:text-foreground transition-colors`}>
                          {item.school}
                        </h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {item.degree}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Certificates */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass rounded-2xl p-8 h-full shine">
              <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-secondary" />
                </div>
                Certificates & Memberships
              </h3>
              
              <div className="space-y-3">
                {certificates.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-${cert.color}/10 flex items-center justify-center shrink-0`}>
                      <cert.icon className={`w-4 h-4 text-${cert.color}`} />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
