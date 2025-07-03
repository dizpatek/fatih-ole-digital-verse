
import React from 'react';
import { Play, ExternalLink, Github, Music, Code, Wrench, Camera, Zap, Settings } from 'lucide-react';
import Layout from '../components/Layout';

const Portfolio = () => {
  const portfolioItems = [
    {
      category: 'Yapay Zeka & Otomasyon Projeleri',
      icon: <Code className="text-blue-400" size={24} />,
      items: [
        {
          title: 'Çok Dilli Chatbot Sistemi',
          description: 'OpenAI GPT-4 ile 40+ dilde konuşabilen rezervasyon sistemi',
          tech: ['Python', 'OpenAI API', 'Flask', 'Redis', 'MongoDB'],
          status: 'Aktif',
          link: 'https://chatbot-demo.fatihsonturk.com',
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=200&fit=crop'
        },
        {
          title: 'Borsa Trading Botu',
          description: 'Teknik analiz ve risk yönetimi ile otomatik crypto trading',
          tech: ['Python', 'Binance API', 'TradingView', 'PostgreSQL'],
          status: 'Geliştiriliyor',
          link: 'https://trading-dashboard.fatihsonturk.com',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop'
        },
        {
          title: 'CRM Entegrasyon Platformu',
          description: 'Bitrix24, HubSpot ve Salesforce entegrasyonlu otomasyon sistemi',
          tech: ['Node.js', 'React', 'Bitrix24 API', 'MySQL'],
          status: 'Tamamlandı',
          link: 'https://crm-automation.fatihsonturk.com',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop'
        },
        {
          title: 'AI Sentiment Analysis Tool',
          description: 'Sosyal medya yorumları için duygu analizi ve raporlama',
          tech: ['Python', 'NLTK', 'Scikit-learn', 'Dashboard'],
          status: 'Aktif',
          link: '#',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
        }
      ]
    },
    {
      category: 'Tekno Müzik Prodüksiyonları',
      icon: <Music className="text-purple-400" size={24} />,
      items: [
        {
          title: 'Underground Techno EP Vol.1',
          description: '4 parçalık deep techno albümü - Spotify ve Beatport\'ta yayında',
          tech: ['Ableton Live', 'Roland TB-303', 'Novation Circuit'],
          status: 'Yayınlandı',
          link: 'https://spotify.com/fatihsonturk-techno',
          audioPreview: true,
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop'
        },
        {
          title: 'Minimal Techno Remixes',
          description: 'Klasik techno parçaların modern minimal remixleri',
          tech: ['Logic Pro', 'Serum VST', 'Massive X'],
          status: 'Yayınlandı',
          link: 'https://soundcloud.com/fatihsonturk-remixes',
          audioPreview: true,
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop'
        },
        {
          title: 'Live Performance Sets',
          description: 'İstanbul\'da gerçekleştirdiğim canlı performans kayıtları',
          tech: ['Ableton Live', 'Launchpad', 'MIDI Controllers'],
          status: 'Sürekli',
          link: 'https://youtube.com/fatihsonturk-live',
          audioPreview: true,
          image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=200&fit=crop'
        },
        {
          title: 'Ambient Soundscapes',
          description: 'Doğa sesleri ile harmanlı ambient elektronik müzik',
          tech: ['Field Recording', 'Ambient Synthesis', 'Reverb'],
          status: 'Geliştiriliyor',
          link: '#',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop'
        }
      ]
    },
    {
      category: 'Teknik Servis & Elektronik Çözümler',
      icon: <Wrench className="text-green-400" size={24} />,
      items: [
        {
          title: 'Dental Klinik Sistemleri',
          description: 'X-ray cihazları, dental üniteler ve sterilizasyon ekipmanları',
          tech: ['Elektronik Tamir', 'Kalibrasyon', 'Sistem Entegrasyonu'],
          status: 'Sürekli',
          link: '#',
          image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=200&fit=crop'
        },
        {
          title: 'Otel HVAC Sistemleri',
          description: 'Fancoil, AHU, kazan ve chiller sistemleri bakım onarımı',
          tech: ['HVAC', 'Elektrik', 'Otomasyon', 'BMS'],
          status: 'Deneyimli',
          link: '#',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop'
        },
        {
          title: 'Asansör Sistemleri',
          description: 'Otis, Schindler ve Kone asansörlerinin bakım ve modernizasyonu',
          tech: ['Asansör Teknolojisi', 'Güvenlik Sistemleri', 'Motorlar'],
          status: 'Uzman',
          link: '#',
          image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=200&fit=crop'
        },
        {
          title: 'Akıllı Ev Otomasyonu',
          description: 'IoT tabanlı ev güvenlik ve otomasyon sistemleri',
          tech: ['Arduino', 'Raspberry Pi', 'MQTT', 'Smart Sensors'],
          status: 'Aktif',
          link: '#',
          image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=200&fit=crop'
        }
      ]
    },
    {
      category: 'Fotoğrafçılık & Görsel Sanatlar',
      icon: <Camera className="text-yellow-400" size={24} />,
      items: [
        {
          title: 'Basın Fotoğrafçılığı',
          description: 'Haber fotoğrafçılığı ve etkinlik belgelendirme',
          tech: ['Canon EOS R5', 'Photoshop', 'Lightroom'],
          status: 'Sertifikalı',
          link: '#',
          image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=200&fit=crop'
        },
        {
          title: 'Belgesel Fotoğrafçılık',
          description: 'Sosyal konular ve insan hikayeleri belgesel serisi',
          tech: ['Belgesel Teknik', 'Röportaj', 'Hikaye Anlatımı'],
          status: 'Sertifikalı',
          link: '#',
          image: 'https://images.unsplash.com/photo-1471306224500-6d0d218be372?w=400&h=200&fit=crop'
        },
        {
          title: 'Grafik Tasarım Projeleri',
          description: 'Logo tasarımı, branding ve dijital medya tasarımları',
          tech: ['Adobe Creative Suite', 'Figma', 'Illustrator'],
          status: 'Freelance',
          link: '#',
          image: 'https://images.unsplash.com/photo-1558655146-364adaf921dc?w=400&h=200&fit=crop'
        },
        {
          title: 'Animasyon ve Motion Graphics',
          description: 'Sosyal medya için animasyon ve motion graphics',
          tech: ['After Effects', '3D Animation', 'Cinema 4D'],
          status: 'Aktif',
          link: '#',
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=200&fit=crop'
        }
      ]
    },
    {
      category: 'Network & Güvenlik Sistemleri',
      icon: <Settings className="text-cyan-400" size={24} />,
      items: [
        {
          title: 'Kurumsal Network Altyapısı',
          description: 'Cisco ve Ubiquiti ekipmanları ile network kurulumu',
          tech: ['Cisco', 'Ubiquiti', 'pfSense', 'VLAN Configuration'],
          status: 'Uzman',
          link: '#',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop'
        },
        {
          title: 'IP Kamera Güvenlik Sistemleri',
          description: 'Hikvision, Dahua ve Axis kamera sistemleri kurulumu',
          tech: ['IP Kameralar', 'NVR', 'Video Analytics', 'Mobile App'],
          status: 'Aktif',
          link: '#',
          image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop'
        },
        {
          title: 'Firewall ve Güvenlik',
          description: 'SonicWall, Fortinet firewall kurulumu ve yönetimi',
          tech: ['Firewall', 'VPN', 'Intrusion Detection', 'Security Policies'],
          status: 'Sertifikalı',
          link: '#',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop'
        },
        {
          title: 'VoIP Telefon Sistemleri',
          description: 'Asterisk ve 3CX tabanlı VoIP sistemleri kurulumu',
          tech: ['Asterisk', '3CX', 'SIP', 'VoIP Gateways'],
          status: 'Deneyimli',
          link: '#',
          image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=200&fit=crop'
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
          10+ yıllık deneyimimle, yapay zeka sistemlerinden müzik prodüksiyonuna, 
          teknik servislerden yaratıcı projelerime kadar geniş bir yelpazede çalışmalarım.
        </p>

        {portfolioItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              {category.icon}
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {category.category}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Görsel */}
                  <div className="h-48 bg-gray-700 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'Aktif' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                        item.status === 'Tamamlandı' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' :
                        item.status === 'Yayınlandı' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50' :
                        item.status === 'Geliştiriliyor' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                        item.status === 'Sertifikalı' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/50'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
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
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Gelecek Projeler */}
        <div className="bg-gray-800/30 rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Gelecek Projeler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Zap className="text-yellow-400 mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-white mb-2">AI Voice Assistant</h3>
              <p className="text-gray-400 text-sm">Türkçe ve İngilizce destekli sesli asistan</p>
            </div>
            <div className="text-center">
              <Code className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-white mb-2">Blockchain Wallet</h3>
              <p className="text-gray-400 text-sm">Multi-chain cryptocurrency wallet</p>
            </div>
            <div className="text-center">
              <Music className="text-purple-400 mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-white mb-2">Music Streaming Platform</h3>
              <p className="text-gray-400 text-sm">Kendi prodüksiyonlarımı paylaştığım platform</p>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="bg-gray-800/30 rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Portföy İstatistikleri</h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm">AI/Otomasyon Projesi</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">40+</div>
              <div className="text-gray-400 text-sm">Müzik Prodüksiyonu</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Tamir Edilen Cihaz</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-400 text-sm">Fotoğraf Projesi</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Network Kurulumu</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
