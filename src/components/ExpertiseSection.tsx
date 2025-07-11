import React from 'react';
import { Settings, Code, Music } from 'lucide-react';

const ExpertiseSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Areas of Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <Settings className="text-blue-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Technical Service & Electronics</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I provide expert-level technical service in electronic device repair, electrical work, 
              medical devices and industrial systems.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Electronic & Electrical Systems</li>
              <li>• Medical & Dental Devices</li>
              <li>• Industrial Machinery</li>
              <li>• Network & Security Systems</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <Code className="text-purple-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Software & System Expert</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I have experience in web design, network systems, chatbot development 
              and various software solutions.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Web Design & Development</li>
              <li>• AI Chatbot Systems</li>
              <li>• CAD-CAM Software</li>
              <li>• Social Media Management</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <Music className="text-green-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-4 text-green-400">Creative Production</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I develop creative projects in beat production, photography 
              and graphic design.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Techno Beat Production</li>
              <li>• Press & Documentary Photography</li>
              <li>• Graphic & Animation Design</li>
              <li>• Screenplay Writing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;