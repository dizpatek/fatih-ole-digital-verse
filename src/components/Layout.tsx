import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" />
      
      {/* Starry particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />
        {/* Animated stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <Navigation />
      
      <main className="relative z-10 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display font-bold gradient-text-primary mb-2">Fatih Sontürk</h3>
              <p className="text-muted-foreground text-sm">Technical Expert • Beat Producer • Photographer</p>
            </div>
            <div className="flex items-center gap-6 text-muted-foreground text-sm">
              <span>© 2024 All rights reserved</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
