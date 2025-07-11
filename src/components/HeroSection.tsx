
import React from 'react';
import { ArrowDown, Calendar, MapPin, Phone, Mail, Award, Zap, Music, Settings, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Fatih SONTÜRK
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-lg text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>33 Years Old</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Istanbul, Turkey</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={16} />
              <span>Technical Expert</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Multi-Skilled Technical Expert • Beat Producer • System Developer • Photographer
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
            <span className="text-blue-400 font-semibold">With 10+ years of experience</span> as a versatile technical expert, 
            I develop innovative solutions in <span className="text-purple-400">mechatronics and system integration</span> fields. 
            From <span className="text-green-400">electronic device repair</span> to <span className="text-yellow-400">network systems</span>, 
            from <span className="text-pink-400">music production</span> to <span className="text-cyan-400">photography</span>, I provide 
            professional services across a wide spectrum. With my <span className="text-orange-400">Technical English</span> proficiency, 
            I develop international projects and specialize in <span className="text-red-400">reverse engineering</span> and 
            <span className="text-indigo-400">system integration</span>.
          </p>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-2 text-blue-400">
              <Zap size={20} />
              <span className="text-sm font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Music size={20} />
              <span className="text-sm font-medium">Beat Producer</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Settings size={20} />
              <span className="text-sm font-medium">50+ Technical Skills</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <Globe size={20} />
              <span className="text-sm font-medium">Technical English</span>
            </div>
          </div>

          {/* Hızlı İletişim */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <Phone size={16} className="text-green-400" />
              <span className="text-gray-300">0538 22 444 88</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <Mail size={16} className="text-blue-400" />
              <span className="text-gray-300">dizpatek@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/projeler"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
          </Link>
          <Link
            to="/portfolio"
            className="px-8 py-3 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
          >
            View Portfolio
          </Link>
          <Link
            to="/iletisim"
            className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-500" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
