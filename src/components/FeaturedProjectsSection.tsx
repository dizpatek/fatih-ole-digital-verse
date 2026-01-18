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
      icon: Code,
      title: 'Mexc Ultimate Trading Bot',
      description: 'Advanced automated trading bot for Mexc exchange with real-time analysis.',
      color: 'primary',
      tags: ['Trading', 'Automation', 'Crypto'],
      url: 'https://mexc-ultimate-trading-bot.vercel.app'
    },
    {
      icon: Settings,
      title: 'Hydro Flower Machine',
      description: 'Automated hydroponic farming system for optimal plant growth control.',
      color: 'secondary',
      tags: ['IoT', 'Agriculture', 'Automation'],
      url: 'https://hydroflowermachime.vercel.app/'
    },
    {
      icon: Folder,
      title: 'Hospital Management',
      description: 'Comprehensive management system for hospital operations and patient data.',
      color: 'accent',
      tags: ['Healthcare', 'Management', 'System'],
      url: 'https://hospital-two-rouge.vercel.app/'
    },
    {
      icon: Code,
      title: 'SigNeedProv2',
      description: 'Digital signature and identity verification provider service.',
      color: 'primary',
      tags: ['Security', 'Identity', 'Web'],
      url: 'https://sig-need-prov2.vercel.app/'
    },
    {
      icon: Settings,
      title: 'Drop Machine',
      description: 'Automated drop distribution system for simplified logistics.',
      color: 'secondary',
      tags: ['Automation', 'Logistics', 'System'],
      url: 'https://dizpatek.github.io/Drop-Machine/'
    },
    {
      icon: Settings,
      title: 'Venus Hotel Portal',
      description: 'Modern hotel management and booking portal.',
      color: 'accent',
      tags: ['Tourism', 'Booking', 'Portal'],
      url: 'https://venus-hotel-portal.lovable.app'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Folder className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">GitHub Repositories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text-primary">
            Featured Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
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

                <p className="text-muted-foreground mb-6 line-clamp-3">
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
                  <span>View Repository</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
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
