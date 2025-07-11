
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Music, Code, ArrowDown } from 'lucide-react';

const FeaturedProjectsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-blue-400 mb-3">
              <Settings size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Medical Device Systems</h3>
            <p className="text-gray-300 text-sm">Maintenance, repair and system integration of dental and medical devices</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-purple-400 mb-3">
              <Music size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-400">Techno Beat Production</h3>
            <p className="text-gray-300 text-sm">Original techno music productions and sound design works</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300">
            <div className="text-green-400 mb-3">
              <Code size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-green-400">Network & Security</h3>
            <p className="text-gray-300 text-sm">Corporate network systems and security infrastructure setup</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            to="/projeler"
            className="inline-flex items-center px-6 py-3 border border-blue-500 rounded-full font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
          >
            View All Projects
            <ArrowDown className="ml-2 rotate-[-90deg]" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
