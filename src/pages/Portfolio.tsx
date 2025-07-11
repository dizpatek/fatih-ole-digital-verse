import React from 'react';
import { Play, ExternalLink, Github, Music, Code, Wrench, Camera, Zap, Settings } from 'lucide-react';
import Layout from '../components/Layout';

const Portfolio = () => {
  const portfolioItems = [
    {
      category: 'AI & Automation Projects',
      icon: <Code className="text-blue-400" size={24} />,
      items: [
        {
          title: 'Multi-Language Chatbot System',
          description: 'Reservation system that speaks 40+ languages with OpenAI GPT-4',
          tech: ['Python', 'OpenAI API', 'Flask', 'Redis', 'MongoDB'],
          status: 'Active',
          link: 'https://chatbot-demo.fatihsonturk.com',
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=200&fit=crop'
        },
        {
          title: 'Stock Trading Bot',
          description: 'Automatic crypto trading with technical analysis and risk management',
          tech: ['Python', 'Binance API', 'TradingView', 'PostgreSQL'],
          status: 'In Development',
          link: 'https://trading-dashboard.fatihsonturk.com',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop'
        },
        {
          title: 'CRM Integration Platform',
          description: 'Automation system integrated with Bitrix24, HubSpot and Salesforce',
          tech: ['Node.js', 'React', 'Bitrix24 API', 'MySQL'],
          status: 'Completed',
          link: 'https://crm-automation.fatihsonturk.com',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop'
        },
        {
          title: 'AI Sentiment Analysis Tool',
          description: 'Sentiment analysis and reporting for social media comments',
          tech: ['Python', 'NLTK', 'Scikit-learn', 'Dashboard'],
          status: 'Active',
          link: '#',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
        }
      ]
    },
    {
      category: 'Techno Music Productions',
      icon: <Music className="text-purple-400" size={24} />,
      items: [
        {
          title: 'Underground Techno EP Vol.1',
          description: '4-track deep techno album - Live on Spotify and Beatport',
          tech: ['Ableton Live', 'Roland TB-303', 'Novation Circuit'],
          status: 'Released',
          link: 'https://spotify.com/fatihsonturk-techno',
          audioPreview: true,
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop'
        },
        {
          title: 'Minimal Techno Remixes',
          description: 'Modern minimal remixes of classic techno tracks',
          tech: ['Logic Pro', 'Serum VST', 'Massive X'],
          status: 'Released',
          link: 'https://soundcloud.com/fatihsonturk-remixes',
          audioPreview: true,
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop'
        },
        {
          title: 'Live Performance Sets',
          description: 'Live performance recordings from Istanbul shows',
          tech: ['Ableton Live', 'Launchpad', 'MIDI Controllers'],
          status: 'Ongoing',
          link: 'https://youtube.com/fatihsonturk-live',
          audioPreview: true,
          image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=200&fit=crop'
        },
        {
          title: 'Ambient Soundscapes',
          description: 'Ambient electronic music blended with nature sounds',
          tech: ['Field Recording', 'Ambient Synthesis', 'Reverb'],
          status: 'In Development',
          link: '#',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop'
        }
      ]
    },
    {
      category: 'Technical Service & Electronic Solutions',
      icon: <Wrench className="text-green-400" size={24} />,
      items: [
        {
          title: 'Dental Clinic Systems',
          description: 'X-ray devices, dental units and sterilization equipment',
          tech: ['Electronic Repair', 'Calibration', 'System Integration'],
          status: 'Ongoing',
          link: '#',
          image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=200&fit=crop'
        },
        {
          title: 'Hotel HVAC Systems',
          description: 'Fancoil, AHU, boiler and chiller system maintenance and repair',
          tech: ['HVAC', 'Electrical', 'Automation', 'BMS'],
          status: 'Experienced',
          link: '#',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop'
        },
        {
          title: 'Elevator Systems',
          description: 'Maintenance and modernization of Otis, Schindler and Kone elevators',
          tech: ['Elevator Technology', 'Safety Systems', 'Motors'],
          status: 'Expert',
          link: '#',
          image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=200&fit=crop'
        },
        {
          title: 'Smart Home Automation',
          description: 'IoT-based home security and automation systems',
          tech: ['Arduino', 'Raspberry Pi', 'MQTT', 'Smart Sensors'],
          status: 'Active',
          link: '#',
          image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=200&fit=crop'
        }
      ]
    },
    {
      category: 'Photography & Visual Arts',
      icon: <Camera className="text-yellow-400" size={24} />,
      items: [
        {
          title: 'Press Photography',
          description: 'News photography and event documentation',
          tech: ['Canon EOS R5', 'Photoshop', 'Lightroom'],
          status: 'Certified',
          link: '#',
          image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=200&fit=crop'
        },
        {
          title: 'Documentary Photography',
          description: 'Documentary series on social issues and human stories',
          tech: ['Documentary Technique', 'Interview', 'Storytelling'],
          status: 'Certified',
          link: '#',
          image: 'https://images.unsplash.com/photo-1471306224500-6d0d218be372?w=400&h=200&fit=crop'
        },
        {
          title: 'Graphic Design Projects',
          description: 'Logo design, branding and digital media designs',
          tech: ['Adobe Creative Suite', 'Figma', 'Illustrator'],
          status: 'Freelance',
          link: '#',
          image: 'https://images.unsplash.com/photo-1558655146-364adaf921dc?w=400&h=200&fit=crop'
        },
        {
          title: 'Animation and Motion Graphics',
          description: 'Animation and motion graphics for social media',
          tech: ['After Effects', '3D Animation', 'Cinema 4D'],
          status: 'Active',
          link: '#',
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=200&fit=crop'
        }
      ]
    },
    {
      category: 'Network & Security Systems',
      icon: <Settings className="text-cyan-400" size={24} />,
      items: [
        {
          title: 'Corporate Network Infrastructure',
          description: 'Network setup with Cisco and Ubiquiti equipment',
          tech: ['Cisco', 'Ubiquiti', 'pfSense', 'VLAN Configuration'],
          status: 'Expert',
          link: '#',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop'
        },
        {
          title: 'IP Camera Security Systems',
          description: 'Hikvision, Dahua and Axis camera system installation',
          tech: ['IP Cameras', 'NVR', 'Video Analytics', 'Mobile App'],
          status: 'Active',
          link: '#',
          image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop'
        },
        {
          title: 'Firewall and Security',
          description: 'SonicWall, Fortinet firewall installation and management',
          tech: ['Firewall', 'VPN', 'Intrusion Detection', 'Security Policies'],
          status: 'Certified',
          link: '#',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop'
        },
        {
          title: 'VoIP Phone Systems',
          description: 'Asterisk and 3CX based VoIP system installation',
          tech: ['Asterisk', '3CX', 'SIP', 'VoIP Gateways'],
          status: 'Experienced',
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
          My Portfolio
        </h1>
        
        <p className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          With 10+ years of experience, my work spans from artificial intelligence systems to music production, 
          from technical services to creative projects across a wide spectrum.
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
                  {/* Image */}
                  <div className="h-48 bg-gray-700 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                        item.status === 'Completed' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' :
                        item.status === 'Released' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50' :
                        item.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                        item.status === 'Certified' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50' :
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
                          <span className="text-sm">Listen</span>
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

        {/* Future Projects */}
        <div className="bg-gray-800/30 rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Future Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Zap className="text-yellow-400 mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-white mb-2">AI Voice Assistant</h3>
              <p className="text-gray-400 text-sm">Turkish and English supported voice assistant</p>
            </div>
            <div className="text-center">
              <Code className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-white mb-2">Blockchain Wallet</h3>
              <p className="text-gray-400 text-sm">Multi-chain cryptocurrency wallet</p>
            </div>
            <div className="text-center">
              <Music className="text-purple-400 mx-auto mb-4" size={40} />
              <h3 className="font-semibold text-white mb-2">Music Streaming Platform</h3>
              <p className="text-gray-400 text-sm">Platform where I share my own productions</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-800/30 rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Portfolio Statistics</h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm">AI/Automation Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">40+</div>
              <div className="text-gray-400 text-sm">Music Productions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Repaired Devices</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-400 text-sm">Photography Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Network Installations</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;