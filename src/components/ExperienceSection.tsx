
import React from 'react';
import { Briefcase, Settings, Users } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-blue-400" size={24} />
              <span className="text-blue-400 font-semibold">Siya Health Services - CityDent</span>
            </div>
            <div className="text-sm text-gray-400 mb-2">2022-Present</div>
            <p className="text-gray-300 text-sm">Social Media, System & Network Specialist, Technical Manager and Photographer</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="text-purple-400" size={24} />
              <span className="text-purple-400 font-semibold">Repair Hospital</span>
            </div>
            <div className="text-sm text-gray-400 mb-2">2019-2022</div>
            <p className="text-gray-300 text-sm">Own Business - Electronic repair and maintenance service</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-green-400" size={24} />
              <span className="text-green-400 font-semibold">Venus Hotel</span>
            </div>
            <div className="text-sm text-gray-400 mb-2">2015-2017</div>
            <p className="text-gray-300 text-sm">Sales and Personnel Manager - HVAC and electrical systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
