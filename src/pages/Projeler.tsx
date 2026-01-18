
import React, { useState } from 'react';
import { Code, Computer, Settings, Music, X, ExternalLink, Github, Key, Lock } from 'lucide-react';
import Layout from '../components/Layout';

const Projeler = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Mexc Ultimate Trading Bot',
      category: 'Fintech',
      description: 'Advanced automated trading bot for Mexc exchange with real-time analysis.',
      detailedDescription: 'A sophisticated trading bot designed for the Mexc exchange. It features real-time market analysis, automated trade execution, and risk management strategies. The bot is built to handle high-frequency trading scenarios and provides detailed logs and performance metrics.',
      technologies: ['Python', 'Mexc API', 'AsyncIO', 'Pandas', 'Technical Analysis'],
      features: ['Real-time Analysis', 'Automated Execution', 'Risk Management', 'Performance Logging', 'Strategy Customization'],
      status: 'Aktif',
      github: 'https://github.com/dizpatek/mexc-ultimate-trading-bot',
      demo: 'https://mexc-ultimate-trading-bot.vercel.app',
      icon: Code,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Hydro Flower Machine',
      category: 'IoT & Agriculture',
      description: 'Automated hydroponic farming system for optimal plant growth control.',
      detailedDescription: 'An automated control system for hydroponic farming. It monitors and regulates water levels, nutrient concentration, pH balance, and lighting cycles to ensure optimal plant growth. The system integrates various sensors and actuators managed by a central controller.',
      technologies: ['C++', 'Arduino/ESP32', 'Sensors', 'Automation', 'IoT'],
      features: ['Water Level Control', 'Nutrient Dosing', 'pH Monitoring', 'Lighting Automation', 'Remote Monitoring'],
      status: 'Tamamlandı',
      github: 'https://github.com/dizpatek/hydroflowermachime',
      demo: 'https://hydroflowermachime.vercel.app/',
      credentials: { username: 'jack', password: 'duffy' },
      icon: Settings,
      color: 'green'
    },
    {
      id: 3,
      title: 'Hospital Management',
      category: 'Sağlık & Yönetim',
      description: 'Comprehensive management system for hospital operations and patient data.',
      detailedDescription: 'A complete hospital management system designed to streamline operations. It handles patient registration, appointment scheduling, doctor management, inventory tracking, and billing. The system aims to improve efficiency and patient care quality.',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
      features: ['Patient Records', 'Appointment Scheduling', 'Billing System', 'Inventory Management', 'Staff Management'],
      status: 'Aktif',
      github: 'https://github.com/dizpatek/Hospital',
      demo: 'https://hospital-two-rouge.vercel.app/',
      credentials: { email: 'admin@meddoc.com', password: 'adminpassword123' },
      icon: Settings,
      color: 'red'
    },
    {
      id: 4,
      title: 'SigNeedProv2',
      category: 'Güvenlik',
      description: 'Digital signature and identity verification provider service.',
      detailedDescription: 'A secure service provider for digital signatures and identity verification. It ensures the authenticity and integrity of digital documents and user identities, complying with relevant security standards and protocols.',
      technologies: ['C#', '.NET Core', 'Cryptography', 'IdentityServer', 'SQL Server'],
      features: ['Digital Signatures', 'Identity Verification', 'Secure Storage', 'Audit Trails', 'API Integration'],
      status: 'Aktif',
      github: 'https://github.com/dizpatek/SigNeedProv2',
      demo: 'https://sig-need-prov2.vercel.app/',
      credentials: { username: 'admin', password: 'superpassword' },
      icon: Lock,
      color: 'purple'
    },
    {
      id: 5,
      title: 'Drop Machine',
      category: 'Otomasyon',
      description: 'Automated drop distribution system for simplified logistics.',
      detailedDescription: 'An automated system designed for efficient drop distribution. It manages the logistics of item dropping, tracking metrics like speed, accuracy, and volume. Ideal for automated warehouses or distribution centers.',
      technologies: ['Python', 'Robotics', 'Computer Vision', 'PLC', 'Industrial Automation'],
      features: ['Automated Sorting', 'Drop Mechanism', 'Inventory Tracking', 'Error Detection', 'Speed Optimization'],
      status: 'Tamamlandı',
      github: 'https://github.com/dizpatek/Drop-Machine',
      demo: 'https://dizpatek.github.io/Drop-Machine/',
      icon: Settings,
      color: 'cyan'
    },
    {
      id: 6,
      title: 'Venus Hotel Portal',
      category: 'Turizm & Yönetim',
      description: 'Modern hotel management and booking portal.',
      detailedDescription: 'A sleek and modern portal for hotel management and booking. It provides an intuitive interface for guests to browse rooms and make reservations, while offering management tools for hotel staff to oversee bookings and occupancy.',
      technologies: ['React', 'Tailwind CSS', 'Lovable', 'Supabase'],
      features: ['Online Booking', 'Room Management', 'Guest Portal', 'Responsive Design', 'Real-time Availability'],
      status: 'Aktif',
      github: null,
      demo: 'https://venus-hotel-portal.lovable.app',
      icon: Settings,
      color: 'pink'
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
        <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800">
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

                {project.credentials && (
                  <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-2 mb-2 text-yellow-500">
                      <Key size={16} />
                      <h4 className="font-semibold text-sm">Demo Giriş Bilgileri</h4>
                    </div>
                    <div className="space-y-1 text-sm text-gray-300">
                      {project.credentials.email && <div><span className="text-gray-500">Email:</span> {project.credentials.email}</div>}
                      {project.credentials.username && <div><span className="text-gray-500">Kullanıcı Adı:</span> {project.credentials.username}</div>}
                      {project.credentials.password && <div><span className="text-gray-500">Şifre:</span> <code className="bg-gray-900 px-1 rounded">{project.credentials.password}</code></div>}
                    </div>
                  </div>
                )}

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

                <div className="flex flex-col gap-3 mt-6">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors font-semibold ${colorClasses.split(' ')[0].replace('text-', 'bg-')}/20 hover:${colorClasses.split(' ')[0].replace('text-', 'bg-')}/30 text-white`}
                    >
                      <ExternalLink size={18} />
                      <span>Canlı Demo Görüntüle</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white"
                    >
                      <Github size={18} />
                      <span>GitHub Kodlarını İncele</span>
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
                  <span className={`text-xs px-2 py-1 rounded-full ${project.status === 'Aktif' ? 'bg-green-500/20 text-green-400' :
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
