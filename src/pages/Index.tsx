
import React from 'react';
import { ArrowDown, Code, Music, Settings, Star, Users, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Fatih Sontürk
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Yaratıcı Geliştirici • Beat Producer • Teknik Çözüm Uzmanı
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Yapay zeka destekli chatbot sistemleri geliştiren, beat üretimi yapan ve 
              ekstrem sporcuları olan bir teknoloji tutkunu. Minimalist tasarım anlayışıyla 
              işlevsel çözümler üretiyorum.
            </p>
            
            {/* Öne Çıkan Özellikler */}
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="flex items-center gap-2 text-blue-400">
                <Zap size={20} />
                <span className="text-sm font-medium">AI Chatbot Geliştirici</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Music size={20} />
                <span className="text-sm font-medium">Tekno Beat Producer</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Globe size={20} />
                <span className="text-sm font-medium">Çok Dilli Sistem Uzmanı</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/projeler"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Projelerimi İncele
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
            >
              Portföyümü Görüntüle
            </Link>
            <Link
              to="/iletisim"
              className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              İletişime Geç
            </Link>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-500" size={32} />
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Uzmanlık Alanlarım
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Code className="text-blue-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Yapay Zeka & Otomasyon</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Çok dilli chatbot sistemleri, borsa robotları ve CRM entegrasyonları 
                geliştiriyorum. Her dili konuşabilen ve otomatik ayarlamalı sistemler tasarlıyorum.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Çok dilli destek sistemleri</li>
                <li>• Rezervasyon otomasyonu</li>
                <li>• Bitrix CRM entegrasyonu</li>
                <li>• Finansal bot geliştirme</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Music className="text-purple-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Müzik Prodüksiyonu</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Beat üretimi yapıyor, MIDI klavye çalıyor ve tekno müzik türünde 
                eserler oluşturuyorum. Yaratıcılığımı teknoloji ile harmanlıyorum.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Tekno beat üretimi</li>
                <li>• MIDI kontrol & programlama</li>
                <li>• Ses tasarımı & mixleme</li>
                <li>• Müzik teknolojileri</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Settings className="text-green-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4 text-green-400">Teknik Çözümler</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Elektronik cihaz tamiri, elektrik işleri ve doğa sporları ile 
                teknik yetkinliğimi pratik hayatta uyguluyorum.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Elektronik cihaz tamiri</li>
                <li>• Elektrik tesisatı</li>
                <li>• Doğa sporları ekipmanları</li>
                <li>• Teknik problem çözme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deneyim & Yaklaşım */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Çalışma Yaklaşımım
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Minimalist & İşlevsel</h3>
              <p className="text-gray-300 leading-relaxed">
                Sade ama güçlü çözümler üretmeyi severim. Gereksiz karmaşıklıktan kaçınır, 
                kullanıcı deneyimini ön planda tutarak etkili sistemler geliştiririm.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Sürekli Öğrenme</h3>
              <p className="text-gray-300 leading-relaxed">
                Kitapları dinlemeyi ve eğitim videoları izlemeyi seviyorum. 
                Teknolojideki yenilikleri takip eder, kendimi sürekli geliştiririm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-400">Yıl Deneyim</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400">Tamamlanan Proje</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-400">Öğrenme Tutkusu</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-400">Yaratıcılık</div>
            </div>
          </div>
        </div>
      </section>

      {/* Son Projeler Önizleme */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Son Projelerim
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-blue-400 mb-3">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Çok Dilli Chatbot</h3>
              <p className="text-gray-300 text-sm">Otomatik dil algılama ve rezervasyon sistemli AI chatbot</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-purple-400 mb-3">
                <Music size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Tekno Beat Serisi</h3>
              <p className="text-gray-300 text-sm">Orijinal tekno müzik prodüksiyonları ve remix çalışmaları</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="text-green-400 mb-3">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">CRM Otomasyon</h3>
              <p className="text-gray-300 text-sm">Bitrix entegrasyonlu müşteri yönetim sistemi</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/projeler"
              className="inline-flex items-center px-6 py-3 border border-blue-500 rounded-full font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
            >
              Tüm Projeleri Görüntüle
              <ArrowDown className="ml-2 rotate-[-90deg]" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
