
import React from 'react';
import { Code, Computer, Settings, Music } from 'lucide-react';
import Layout from '../components/Layout';

const Projeler = () => {
  const projects = [
    {
      title: 'Çok Dilli Chatbot Sistemi',
      category: 'Yapay Zeka',
      description: 'Her dili konuşabilen, ülke bazlı otomatik ayarlamalı ve rezervasyon alabilen gelişmiş chatbot sistemi.',
      technologies: ['AI/ML', 'NLP', 'Multi-language', 'CRM Integration'],
      icon: Code,
      color: 'blue'
    },
    {
      title: 'Borsa Trading Botu',
      category: 'Fintech',
      description: 'Otomatik borsa işlemleri yapan, risk yönetimi içeren ve performans analizi sunan trading robotu.',
      technologies: ['Python', 'API Integration', 'Data Analysis', 'Algorithm Trading'],
      icon: Computer,
      color: 'green'
    },
    {
      title: 'CRM Otomasyon Sistemi',
      category: 'İş Süreçleri',
      description: 'Bitrix ve diğer CRM sistemleriyle entegre çalışan, veri akışını optimize eden otomasyon çözümü.',
      technologies: ['CRM API', 'Workflow Automation', 'Data Processing', 'Integration'],
      icon: Settings,
      color: 'purple'
    },
    {
      title: 'Beat Production Studio',
      category: 'Müzik',
      description: 'MIDI klavye ile beat üretimi, tekno müzik prodüksiyonu ve ses düzenleme projelerim.',
      technologies: ['MIDI', 'Audio Production', 'Techno', 'Beat Making'],
      icon: Music,
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-400 border-blue-500/50 hover:border-blue-400';
      case 'green':  
        return 'text-green-400 border-green-500/50 hover:border-green-400';
      case 'purple':
        return 'text-purple-400 border-purple-500/50 hover:border-purple-400';
      case 'pink':
        return 'text-pink-400 border-pink-500/50 hover:border-pink-400';
      default:
        return 'text-blue-400 border-blue-500/50 hover:border-blue-400';
    }
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projelerim
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Yapay zeka destekli sistemlerden müzik prodüksiyonuna, 
          finansal otomasyondan teknik çözümlere kadar geniş bir yelpazede projeler geliştiriyorum.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={index}
                className={`bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 ${colorClasses} transition-all duration-300 hover:transform hover:scale-105`}
              >
                <div className="flex items-center mb-6">
                  <IconComponent className={`${colorClasses.split(' ')[0]} mr-4`} size={40} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className={`text-sm ${colorClasses.split(' ')[0]} opacity-80`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <button className={`${colorClasses.split(' ')[0]} hover:underline font-medium`}>
                    Detayları İncele →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-300">Geliştirme Aşamasında</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <h4 className="font-semibold text-gray-400 mb-2">AI Voice Assistant</h4>
              <p className="text-gray-500 text-sm">Sesli komutlarla çalışan yapay zeka asistanı</p>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <h4 className="font-semibold text-gray-400 mb-2">IoT Smart Home</h4>
              <p className="text-gray-500 text-sm">Ev otomasyonu ve IoT cihaz kontrolü</p>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <h4 className="font-semibold text-gray-400 mb-2">Music Streaming App</h4>
              <p className="text-gray-500 text-sm">Kendi beat'lerimi paylaştığım platform</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projeler;
