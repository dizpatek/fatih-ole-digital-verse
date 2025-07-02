
import React, { useState } from 'react';
import { Code, Computer, Settings, Music, X, ExternalLink, Github } from 'lucide-react';
import Layout from '../components/Layout';

const Projeler = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Çok Dilli Chatbot Sistemi',
      category: 'Yapay Zeka',
      description: 'Her dili konuşabilen, ülke bazlı otomatik ayarlamalı ve rezervasyon alabilen gelişmiş chatbot sistemi.',
      detailedDescription: 'OpenAI GPT-4 API kullanarak geliştirdiğim bu chatbot sistemi, 40+ dilde konuşabilmekte ve kullanıcının IP adresine göre otomatik olarak ülke ayarlaması yapmaktadır. Sistem, otel rezervasyonlarından restoran ayırma işlemlerine kadar geniş bir hizmet yelpazesi sunmaktadır. Redis cache ile hızlı yanıt süresi sağlarken, MongoDB ile konuşma geçmişini saklamaktadır.',
      technologies: ['Python', 'OpenAI GPT-4', 'Flask', 'Redis', 'MongoDB', 'Docker'],
      features: ['40+ Dil Desteği', 'Otomatik Ülke Tespiti', 'Rezervasyon Sistemi', 'Sentiment Analysis', 'Voice Integration'],
      status: 'Aktif',
      github: 'https://github.com/fatihsonturk/multilingual-chatbot',
      demo: 'https://chatbot-demo.fatihsonturk.com',
      icon: Code,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Borsa Trading Botu',
      category: 'Fintech',
      description: 'Otomatik borsa işlemleri yapan, risk yönetimi içeren ve performans analizi sunan trading robotu.',
      detailedDescription: 'Binance ve Coinbase API\'leri kullanarak geliştirdiğim bu trading bot, teknik analiz göstergelerini (RSI, MACD, Bollinger Bands) kullanarak otomatik alım-satım işlemleri gerçekleştirmektedir. Stop-loss ve take-profit mekanizmaları ile risk yönetimi sağlarken, backtesting özelliği ile stratejilerin geçmiş verilerle test edilmesini mümkün kılmaktadır.',
      technologies: ['Python', 'Binance API', 'Pandas', 'TA-Lib', 'PostgreSQL', 'Docker', 'Grafana'],
      features: ['Otomatik Trading', 'Risk Yönetimi', 'Backtesting', 'Portfolio Tracking', 'Real-time Alerts'],
      status: 'Geliştiriliyor',
      github: 'https://github.com/fatihsonturk/crypto-trading-bot',
      demo: 'https://trading-dashboard.fatihsonturk.com',
      icon: Computer,
      color: 'green'
    },
    {
      id: 3,
      title: 'CRM Otomasyon Sistemi',
      category: 'İş Süreçleri',
      description: 'Bitrix ve diğer CRM sistemleriyle entegre çalışan, veri akışını optimize eden otomasyon çözümü.',
      detailedDescription: 'Bitrix24, HubSpot ve Salesforce gibi popüler CRM sistemleri ile entegre çalışan bu otomasyon platformu, müşteri verilerini senkronize ederek iş süreçlerini optimize etmektedir. Webhook\'ler kullanarak real-time veri akışı sağlarken, özel raporlama ve analitik özellikleri sunmaktadır.',
      technologies: ['Node.js', 'Express', 'Bitrix24 API', 'HubSpot API', 'MySQL', 'React', 'Chart.js'],
      features: ['Multi-CRM Entegrasyon', 'Webhook Integration', 'Custom Reports', 'Data Synchronization', 'Automated Workflows'],
      status: 'Tamamlandı',
      github: 'https://github.com/fatihsonturk/crm-automation',
      demo: 'https://crm-automation.fatihsonturk.com',
      icon: Settings,
      color: 'purple'
    },
    {
      id: 4,
      title: 'Beat Production Studio',
      category: 'Müzik',
      description: 'MIDI klavye ile beat üretimi, tekno müzik prodüksiyonu ve ses düzenleme projelerim.',
      detailedDescription: 'Ableton Live 11 ve profesyonel MIDI controller\'lar kullanarak ürettiğim tekno müzik parçaları. Analog synthesizer\'lar ve digital audio workstation\'lar ile harmanlayarak özgün sesler yaratmaktayım. Spotify ve SoundCloud\'da yayınlanan 25+ orijinal parçam bulunmaktadır.',
      technologies: ['Ableton Live 11', 'Novation Launchpad', 'Roland TB-303', 'Serum VST', 'Massive X'],
      features: ['Analog Synthesis', 'MIDI Sequencing', 'Live Performance', 'Sound Design', 'Mastering'],
      status: 'Sürekli',
      github: null,
      demo: 'https://soundcloud.com/fatihsonturk',
      icon: Music,
      color: 'pink'
    },
    {
      id: 5,
      title: 'Medikal Cihaz Yönetim Sistemi',
      category: 'Sağlık',
      description: 'Dental klinikler için cihaz takibi, bakım planlaması ve raporlama sistemi.',
      detailedDescription: 'Dental kliniklerde kullanılan röntgen cihazları, dental üniteler ve sterilizasyon ekipmanları için geliştirilmiş kapsamlı yönetim sistemi. Cihazların periyodik bakım planlaması, arıza takibi ve kalibrasyon raporlama işlemlerini otomatikleştirmektedir.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js', 'PDF Generator'],
      features: ['Cihaz Envanteri', 'Bakım Planlaması', 'Arıza Takibi', 'Kalibrasyon Raporları', 'QR Kod Sistemi'],
      status: 'Aktif',
      github: 'https://github.com/fatihsonturk/medical-device-management',
      demo: 'https://medical-dashboard.fatihsonturk.com',
      icon: Settings,
      color: 'red'
    },
    {
      id: 6,
      title: 'IoT Akıllı Ev Sistemi',
      category: 'IoT',
      description: 'Arduino ve Raspberry Pi ile geliştirilen akıllı ev otomasyon sistemi.',
      detailedDescription: 'ESP32 ve Raspberry Pi 4 kullanarak geliştirdiğim akıllı ev sistemi, ışık kontrolü, güvenlik kamerası, sıcaklık/nem sensörleri ve akıllı priz kontrolü gibi özellikleri içermektedir. MQTT protokolü ile cihazlar arası iletişim sağlarken, mobile app ile uzaktan kontrol imkanı sunmaktadır.',
      technologies: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'React Native', 'Node-RED', 'InfluxDB'],
      features: ['Uzaktan Kontrol', 'Güvenlik Sistemi', 'Enerji Monitoring', 'Voice Control', 'Automation Rules'],
      status: 'Geliştiriliyor',
      github: 'https://github.com/fatihsonturk/smart-home-iot',
      demo: null,
      icon: Settings,
      color: 'cyan'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return 'text-blue-400 border-blue-500/50 hover:border-blue-400';
      case 'green': return 'text-green-400 border-green-500/50 hover:border-green-400';
      case 'purple': return 'text-purple-400 border-purple-500/50 hover:border-purple-400';
      case 'pink': return 'text-pink-400 border-pink-500/50 hover:border-pink-400';
      case 'red': return 'text-red-400 border-red-500/50 hover:border-red-400';
      case 'cyan': return 'text-cyan-400 border-cyan-500/50 hover:border-cyan-400';
      default: return 'text-blue-400 border-blue-500/50 hover:border-blue-400';
    }
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const IconComponent = project.icon;
    const colorClasses = getColorClasses(project.color);

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <IconComponent className={`${colorClasses.split(' ')[0]}`} size={32} />
                <div>
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <span className={`text-sm ${colorClasses.split(' ')[0]} opacity-80`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Proje Detayları</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.detailedDescription}
                </p>
                
                <h4 className="text-md font-semibold text-white mb-2">Özellikler</h4>
                <ul className="text-gray-300 space-y-1 mb-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${colorClasses.split(' ')[0].replace('text-', 'bg-')}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-md font-semibold text-white mb-2">Teknolojiler</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${colorClasses.split(' ')[0].replace('text-', 'bg-')}/20 hover:${colorClasses.split(' ')[0].replace('text-', 'bg-')}/30`}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
          {projects.map((project) => {
            const IconComponent = project.icon;
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={project.id}
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
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-400 border border-gray-600">
                      +{project.technologies.length - 3} daha
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Aktif' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Tamamlandı' ? 'bg-blue-500/20 text-blue-400' :
                    project.status === 'Geliştiriliyor' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {project.status}
                  </span>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className={`${colorClasses.split(' ')[0]} hover:underline font-medium`}
                  >
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
              <h4 className="font-semibold text-gray-400 mb-2">Blockchain Wallet</h4>
              <p className="text-gray-500 text-sm">Multi-chain cryptocurrency wallet</p>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <h4 className="font-semibold text-gray-400 mb-2">Music Streaming App</h4>
              <p className="text-gray-500 text-sm">Kendi beat'lerimi paylaştığım platform</p>
            </div>
          </div>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </Layout>
  );
};

export default Projeler;
