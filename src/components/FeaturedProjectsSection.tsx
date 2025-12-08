import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Music, Code, ArrowRight, Folder, ExternalLink } from 'lucide-react';

const FeaturedProjectsSection = () => {
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

  const projects = [
    {
      icon: Settings,
      title: 'Medical Device Systems',
      description: 'Maintenance, repair and system integration of dental and medical devices',
      color: 'primary',
      tags: ['Healthcare', 'Electronics', 'Calibration'],
    },
    {
      icon: Music,
      title: 'Techno Beat Production',
      description: 'Original techno music productions and sound design works',
      color: 'secondary',
      tags: ['Ableton', 'Sound Design', 'Mastering'],
    },
    {
      icon: Code,
      title: 'Network & Security',
      description: 'Corporate network systems and security infrastructure setup',
      color: 'accent',
      tags: ['Cisco', 'Firewall', 'VPN'],
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Folder className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Recent Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text-primary">
            Featured Projects
          </h2>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative glass rounded-2xl p-8 h-full card-hover shine overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-${project.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className={`w-7 h-7 text-${project.color}`} />
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-display font-semibold mb-3 text-${project.color} group-hover:gradient-text-primary transition-all`}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View project link */}
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            to="/projeler"
            className="group inline-flex items-center gap-3 px-8 py-4 glass rounded-full font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            <span className="text-foreground">View All Projects</span>
            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
