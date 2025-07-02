
import React from 'react';
import { Calendar, Clock, Tag, ArrowRight, Code, Music, Wrench, Camera, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Yapay Zeka ile Çok Dilli Chatbot Geliştirme: Sıfırdan Profesyonel Seviyeye',
      excerpt: 'OpenAI GPT-4 API kullanarak 40+ dilde konuşabilen, ülke tespiti yapan ve rezervasyon alabilen gelişmiş chatbot sistemi nasıl geliştiriyorum. Python, Flask ve Redis ile gerçek zamanlı çözümler.',
      category: 'Yapay Zeka',
      categoryIcon: <Code size={16} />,
      date: '2024-01-15',
      readTime: '12 dk',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=300&fit=crop',
      tags: ['AI', 'Python', 'Chatbot', 'OpenAI', 'Flask', 'Redis']
    },
    {
      id: 2,
      title: 'Tekno Müzik Prodüksiyonu: Ableton Live ile Profesyonel Beat Yapımı',
      excerpt: 'Roland TB-303 ve Novation Circuit kullanarak underground tekno müzik üretimi. Analog synthesizer teknikleri, sound design ve mastering süreçleri detaylı rehber.',
      category: 'Müzik',
      categoryIcon: <Music size={16} />,
      date: '2024-01-12',
      readTime: '15 dk',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop',
      tags: ['Tekno', 'Ableton', 'Roland TB-303', 'Sound Design', 'Mastering']
    },
    {
      id: 3,
      title: 'Dental Klinik Teknolojileri: X-Ray Cihazlarından Sterilizasyon Ünitelerine',
      excerpt: 'Dental kliniklerde kullanılan modern teknolojilerin bakım, onarım ve kalibrasyon süreçleri. Röntgen cihazları, dental üniteler ve sterilizasyon ekipmanları hakkında pratik bilgiler.',
      category: 'Medikal Teknoloji',
      categoryIcon: <Wrench size={16} />,
      date: '2024-01-10',
      readTime: '10 dk',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=300&fit=crop',
      tags: ['Dental', 'X-Ray', 'Sterilizasyon', 'Medikal Cihaz', 'Kalibrasyon']
    },
    {
      id: 4,
      title: 'Crypto Trading Botları: Python ile Otomatik Yatırım Stratejileri',
      excerpt: 'Binance API kullanarak geliştirdiğim trading bot ile teknik analiz göstergeleri, risk yönetimi ve backtesting. RSI, MACD ve Bollinger Bands stratejileri.',
      category: 'Fintech',
      categoryIcon: <Code size={16} />,
      date: '2024-01-08',
      readTime: '18 dk',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop',
      tags: ['Crypto', 'Trading Bot', 'Python', 'Binance API', 'Teknik Analiz']
    },
    {
      id: 5,
      title: 'Otel HVAC Sistemleri: Fancoil, AHU ve Chiller Bakım Rehberi',
      excerpt: 'Otelcilik sektöründe 7+ yıllık deneyimimle HVAC sistemlerinin bakım, onarım ve verimlilik optimizasyonu. Enerji tasarrufu ve predictive maintenance teknikleri.',
      category: 'HVAC',
      categoryIcon: <Settings size={16} />,
      date: '2024-01-05',
      readTime: '14 dk',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=300&fit=crop',
      tags: ['HVAC', 'Fancoil', 'AHU', 'Chiller', 'Bakım', 'Otelcilik']
    },
    {
      id: 6,
      title: 'Basın Fotoğrafçılığı: Haber Değeri Taşıyan Anları Yakalamak',
      excerpt: 'Sertifikalı basın fotoğrafçısı olarak edindiğim deneyimler. Canon EOS R5 ile haber fotoğrafçılığı teknikleri, kompozisyon ve etik kurallar.',
      category: 'Fotoğrafçılık',
      categoryIcon: <Camera size={16} />,
      date: '2024-01-03',
      readTime: '8 dk',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=300&fit=crop',
      tags: ['Basın Fotoğrafçılığı', 'Canon EOS R5', 'Kompozisyon', 'Etik']
    },
    {
      id: 7,
      title: 'Network Güvenliği: Cisco ve Ubiquiti ile Kurumsal Altyapı',
      excerpt: 'Kurumsal network kurulumu, VLAN konfigürasyonu ve güvenlik politikaları. pfSense firewall kurulumu ve VPN yapılandırması pratik rehberi.',
      category: 'Network',
      categoryIcon: <Settings size={16} />,
      date: '2024-01-01',
      readTime: '16 dk',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop',
      tags: ['Network', 'Cisco', 'Ubiquiti', 'pfSense', 'VLAN', 'Güvenlik']
    },
    {
      id: 8,
      title: 'Asansör Sistemleri: Otis, Schindler ve Kone Teknolojileri',
      excerpt: 'Asansör teknisyenliği deneyimimle modern asansör sistemlerinin çalışma prensipleri, bakım prosedürleri ve arıza çözümleri. Güvenlik sistemleri ve modernizasyon.',
      category: 'Asansör Teknolojisi',
      categoryIcon: <Wrench size={16} />,
      date: '2023-12-28',
      readTime: '11 dk',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=300&fit=crop',
      tags: ['Asansör', 'Otis', 'Schindler', 'Kone', 'Bakım', 'Güvenlik']
    },
    {
      id: 9,
      title: 'IoT Akıllı Ev Sistemleri: Arduino ve Raspberry Pi ile Otomasyon',
      excerpt: 'ESP32 ve Raspberry Pi 4 kullanarak geliştirdiğim akıllı ev projesi. MQTT protokolü, sensör entegrasyonu ve mobile app kontrolü. Pratik devre şemaları ve kodlar.',
      category: 'IoT',
      categoryIcon: <Zap size={16} />,
      date: '2023-12-25',
      readTime: '20 dk',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=300&fit=crop',
      tags: ['IoT', 'Arduino', 'Raspberry Pi', 'MQTT', 'Akıllı Ev', 'Otomasyon']
    },
    {
      id: 10,
      title: 'CNC Makineler ve CAD-CAM Yazılımları: Precision Manufacturing',
      excerpt: 'CNC teknolojisi ve CAD-CAM yazılımları ile hassas üretim. Makine programlama, takım seçimi ve kalite kontrol süreçleri. Tersine mühendislik uygulamaları.',
      category: 'Üretim Teknolojisi',
      categoryIcon: <Settings size={16} />,
      date: '2023-12-22',
      readTime: '13 dk',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=300&fit=crop',
      tags: ['CNC', 'CAD-CAM', 'Üretim', 'Tersine Mühendislik', 'Kalite Kontrol']
    },
    {
      id: 11,
      title: 'Sosyal Medya İçerik Stratejisi: Teknik Uzmanlık Pazarlaması',
      excerpt: 'CityDent diş hastanesinde sosyal medya uzmanı olarak edindiğim deneyimler. İçerik stratejisi, görsel tasarım ve engagement artırma teknikleri.',
      category: 'Sosyal Medya',
      categoryIcon: <Camera size={16} />,
      date: '2023-12-20',
      readTime: '9 dk',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop',
      tags: ['Sosyal Medya', 'İçerik Stratejisi', 'Görsel Tasarım', 'Engagement']
    },
    {
      id: 12,
      title: 'Belgesel Fotoğrafçılık: İnsan Hikayelerini Görselleştirmek',
      excerpt: 'Sertifikalı belgesel fotoğrafçısı olarak sosyal konuları ele aldığım projeler. Hikaye anlatımı teknikleri, etik yaklaşımlar ve technical details.',
      category: 'Fotoğrafçılık',
      categoryIcon: <Camera size={16} />,
      date: '2023-12-18',
      readTime: '12 dk',
      image: 'https://images.unsplash.com/photo-1471306224500-6d0d218be372?w=600&h=300&fit=crop',
      tags: ['Belgesel', 'Fotoğrafçılık', 'Hikaye Anlatımı', 'Sosyal Konular']
    }
  ];

  const categories = [
    { name: 'Tümü', count: blogPosts.length },
    { name: 'Yapay Zeka', count: blogPosts.filter(post => post.category === 'Yapay Zeka').length },
    { name: 'Müzik', count: blogPosts.filter(post => post.category === 'Müzik').length },
    { name: 'Medikal Teknoloji', count: blogPosts.filter(post => post.category === 'Medikal Teknoloji').length },
    { name: 'Fintech', count: blogPosts.filter(post => post.category === 'Fintech').length },
    { name: 'HVAC', count: blogPosts.filter(post => post.category === 'HVAC').length },
    { name: 'Fotoğrafçılık', count: blogPosts.filter(post => post.category === 'Fotoğrafçılık').length },
    { name: 'Network', count: blogPosts.filter(post => post.category === 'Network').length },
    { name: 'IoT', count: blogPosts.filter(post => post.category === 'IoT').length }
  ];

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Blog
        </h1>
        
        <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          10+ yıllık deneyimimle teknoloji, müzik, elektronik, fotoğrafçılık ve yaratıcılık üzerine 
          edindiğim bilgileri, projelerimi ve öğrendiklerimi detaylı olarak paylaştığım alan.
        </p>

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-blue-500/50 rounded-full text-gray-300 hover:text-white transition-all duration-300 text-sm"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Öne Çıkan Yazı */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Öne Çıkan</span>
              <span className="text-gray-400 text-sm">En Popüler</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Yapay Zeka ile Çok Dilli Chatbot Geliştirme: Sıfırdan Profesyonel Seviyeye
            </h2>
            <p className="text-gray-300 mb-4">
              OpenAI GPT-4 API kullanarak geliştirdiğim chatbot sistemi nasıl 40+ dilde konuşuyor ve 
              otomatik ülke tespiti yapıyor? Python, Flask ve Redis ile gerçek zamanlı çözümler...
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>12 dk okuma</span>
              <span>•</span>
              <span>2,450 görüntüleme</span>
              <span>•</span>
              <span>25 yorum</span>
            </div>
          </div>
        </div>

        {/* Blog Yazıları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Görsel */}
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white">
                    {post.categoryIcon}
                    {post.category}
                  </span>
                </div>
              </div>

              {/* İçerik */}
              <div className="p-6">
                <h2 className="text-lg font-bold mb-3 text-white hover:text-blue-400 transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Bilgiler */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                    >
                      <Tag size={8} />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-700/50 text-gray-400 rounded border border-gray-600">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Devamını Oku */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Devamını Oku
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Daha Fazla Yükle */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            Daha Fazla Yazı Yükle
          </button>
        </div>

        {/* Blog İstatistikleri */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Blog Yazısı</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-2xl font-bold text-purple-400 mb-2">15K+</div>
            <div className="text-gray-400 text-sm">Toplam Okuyucu</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-2xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-400 text-sm">Yorum</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-2xl font-bold text-yellow-400 mb-2">8+</div>
            <div className="text-gray-400 text-sm">Kategori</div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800/30 rounded-lg p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Bülten Aboneliği</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Yeni yazılarımdan, projelerimden ve teknik güncellemelerden haberdar olmak için 
            e-posta listemize katılın. Haftada 1 kez özel içerikler göndereceğim.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              Abone Ol
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Spam göndermiyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
