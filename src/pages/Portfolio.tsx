
import React from 'react';
import { Play, ExternalLink, Github, Music, Code, Wrench } from 'lucide-react';
import Layout from '../components/Layout';

const Portfolio = () => {
  const portfolioItems = [
    {
      category: 'Yapay Zeka Projeleri',
      icon: <Code className="text-blue-400" size={24} />,
      items: [
        {
          title: 'Çok Dilli Chatbot Sistemi',
          description: 'Otomatik dil algılama, ülke bazlı ayarlamalar ve rezervasyon özellikli AI chatbot',
          tech: ['Python', 'OpenAI API', 'Flask', 'Redis'],
          status: 'Aktif',
          link: '#'
        },
        {
          title: 'Borsa Trading Botu',
          description: 'Teknik analiz ve risk yönetimi ile otomatik alım-satım yapan finansal bot',
          tech: ['Python', 'Binance API', 'TradingView', 'MongoDB'],
          status: 'Geliştiriliyor',
          link: '#'
        },
        {
          title: 'CRM Entegrasyon Sistemi',
          description: 'Bitrix24 ile entegre müşteri yönetimi ve otomasyon çözümü',
          tech: ['Node.js', 'Bitrix24 API', 'React', 'PostgreSQL'],
          status: 'Tamamlandı',
          link: '#'
        }
      ]
    },
    {
      category: 'Müzik Prodüksiyonları',
      icon: <Music className="text-purple-400" size={24} />,
      items: [
        {
          title: 'Techno Nights EP',
          description: '4 parçalık orijinal tekno müzik albümü',
          tech: ['Ableton Live', 'Synthesizer', 'MIDI'],
          status: 'Yayınlandı',
          link: '#',
          audioPreview: true
        },
        {
          title: 'Underground Remixes',
          description: 'Klasik tekno parçaların modern remixleri',
          tech: ['Logic Pro', 'Analog Synth', 'Drum Machine'],
          status: 'Yayınlandı',
          link: '#',
          audioPreview: true
        },
        {
          title: 'Ambient Soundscapes',
          description: 'Doğa sesleri ile harmanlı ambient müzik serisi',
          tech: ['Field Recording', 'Ambient Synthesis', 'Reverb'],
          status: 'Geliştiriliyor',
          link: '#'
        }
      ]
    },
    {
      category: 'Teknik Çözümler',
      icon: <Wrench className="text-green-400" size={24} />,
      items: [
        {
          title: 'Elektronik Tamir Atölyesi',
          description: 'Telefon, tablet ve bilgisayar tamiri ile donanım çözümleri',
          tech: ['Lehimleme', 'Multimetre', 'Osiloskop'],
          status: 'Sürekli',
          link: '#'
        },
        {
          title: 'Akıllı Ev Sistemleri',
          description: 'IoT tabanlı ev otomasyonu ve güvenlik sistemleri',
          tech: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node-RED'],
          status: 'Aktif',
          link: '#'
        },
        {
          title: 'Bisiklet Modifikasyonları',
          description: 'Extreme bisiklet sürüşü için özel donanım tasarımları',
          tech: ['Mekanik', '3D Printing', 'Carbon Fiber'],
          status: 'Hobi',
          link: '#'
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Portföyüm
        </h1>
        
        <p className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Yapay zeka sistemlerinden müzik prodüksiyonuna, teknik çözümlerden yaratıcı projelerime kadar 
          çalışmalarımın bir özeti.
        </p>

        {portfolioItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              {category.icon}
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {category.category}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'Aktif' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'Tamamlandı' ? 'bg-blue-500/20 text-blue-400' :
                      item.status === 'Yayınlandı' ? 'bg-purple-500/20 text-purple-400' :
                      item.status === 'Geliştiriliyor' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    {item.audioPreview && (
                      <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                        <Play size={16} />
                        <span className="text-sm">Dinle</span>
                      </button>
                    )}
                    
                    <div className="flex gap-2 ml-auto">
                      <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <ExternalLink size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <Github size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* İstatistikler */}
        <div className="bg-gray-800/30 rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Portföy İstatistikleri</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400 text-sm">AI Projesi</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm">Müzik Parçası</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-400 text-sm">Tamir Edilen Cihaz</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-400 text-sm">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
