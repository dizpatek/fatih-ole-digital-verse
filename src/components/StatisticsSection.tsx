
import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-gray-400">Completed Projects</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-400">Technical Skills</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
