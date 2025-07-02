
import React from 'react';
import { ArrowDown, Code, Music, Settings, Star, Users, Zap, Globe, Calendar, MapPin, Phone, Mail, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Fatih SONTÜRK
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-lg text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>33 Yaş</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} />
                <span>Teknik Uzman</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Teknik Servis Uzmanı • Beat Producer • Sistem Geliştirici • Fotoğrafçı
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Turizm başta olmak üzere mekatronik konularında yenilikçi ve geliştirilmiş tecrübeye dayanan, 
              bu alanlarda faaliyette olan tüm ürünlerin bakım onarım kullanım ve kontrol eğitimini verebilecek 
              iyi derecede eğitim düzeyine sahip teknik İngilizce anlayabilen ve konuşabilen bir uzmanım.
            </p>
            
            {/* Öne Çıkan Özellikler */}
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="flex items-center gap-2 text-blue-400">
                <Zap size={20} />
                <span className="text-sm font-medium">10+ Yıl Deneyim</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Music size={20} />
                <span className="text-sm font-medium">Beat Producer</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Settings size={20} />
                <span className="text-sm font-medium">Çok Amaçlı Teknisyen</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Globe size={20} />
                <span className="text-sm font-medium">Teknik İngilizce</span>
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

      {/* Uzmanlık Alanları */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Uzmanlık Alanlarım
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Settings className="text-blue-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Teknik Servis & Elektronik</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Elektronik cihaz tamiri, elektrik işleri, medikal cihazlar ve endüstriyel sistemlerde 
                uzman seviyede teknik servis hizmeti sunuyorum.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Elektronik & Elektrik Sistemleri</li>
                <li>• Medikal & Dental Cihazlar</li>
                <li>• Endüstriyel Makineler</li>
                <li>• Network & Güvenlik Sistemleri</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Code className="text-purple-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Yazılım & Sistem Uzmanı</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Web tasarım, network sistemleri, chatbot geliştirme ve çeşitli yazılım 
                çözümleri konusunda deneyimliyim.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Web Tasarım & Geliştirme</li>
                <li>• AI Chatbot Sistemleri</li>
                <li>• CAD-CAM Yazılımları</li>
                <li>• Sosyal Medya Yönetimi</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <Music className="text-green-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4 text-green-400">Yaratıcı Prodüksiyon</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Beat üretimi, fotoğrafçılık ve grafik tasarım alanında yaratıcı 
                projeler geliştiriyorum.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Tekno Beat Üretimi</li>
                <li>• Basın & Belgesel Fotoğrafçılığı</li>
                <li>• Grafik & Animasyon Tasarım</li>
                <li>• Senaryo Yazarlığı</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deneyim Özeti */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Profesyonel Deneyim
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-400" size={24} />
                <span className="text-blue-400 font-semibold">Siya Sağlık - CityDent</span>
              </div>
              <div className="text-sm text-gray-400 mb-2">2022-2025</div>
              <p className="text-gray-300 text-sm">Sosyal Medya, Sistem ve Network Uzmanı, Teknik Sorumlu ve Fotoğrafçı</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="text-purple-400" size={24} />
                <span className="text-purple-400 font-semibold">Repair Hospital</span>
              </div>
              <div className="text-sm text-gray-400 mb-2">2019-2022</div>
              <p className="text-gray-300 text-sm">Kendi işletmem - Elektronik tamir ve bakım servisi</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-green-400" size={24} />
                <span className="text-green-400 font-semibold">The Peak Hotel</span>
              </div>
              <div className="text-sm text-gray-400 mb-2">2017-2018</div>
              <p className="text-gray-300 text-sm">Teknik Servis Şefi - HVAC ve elektrik sistemleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim & Sertifikalar */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Eğitim & Sertifikalar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Eğitim Geçmişi</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-300">Şişli Meslek Yüksek Okulu</h4>
                  <p className="text-gray-400 text-sm">Elektronik Ürünler Ustası - 2024</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-300">İstanbul Üniversitesi</h4>
                  <p className="text-gray-400 text-sm">Sivil Hava Ulaştırma - 2015</p>
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-300">Anadolu Üniversitesi</h4>
                  <p className="text-gray-400 text-sm">Kamu Yönetimi - 2014</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-purple-400">Sertifikalar & Üyelikler</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-gray-300">Basın Fotoğrafçılığı Sertifikası</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-gray-300">Belgesel Fotoğrafçılığı Sertifikası</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-gray-300">Senaryo Sertifikası</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-blue-400" size={16} />
                  <span className="text-gray-300">İFSAK Üyesi (İstanbul Fotoğraf ve Sinema Kurumu)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="text-green-400" size={16} />
                  <span className="text-gray-300">A1, A2, B, D, F Ehliyet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-400">Yıl Deneyim</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-400">Tamamlanan Proje</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Teknik Yetkinlik</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-400">Müşteri Desteği</div>
            </div>
          </div>
        </div>
      </section>

      {/* Son Projeler Önizleme */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Öne Çıkan Projelerim
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-blue-400 mb-3">
                <Settings size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Medikal Cihaz Sistemleri</h3>
              <p className="text-gray-300 text-sm">Dental ve medikal cihazların bakım, onarım ve sistem entegrasyonu</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-purple-400 mb-3">
                <Music size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Tekno Beat Prodüksiyonu</h3>
              <p className="text-gray-300 text-sm">Orijinal tekno müzik prodüksiyonları ve ses tasarımı çalışmaları</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="text-green-400 mb-3">
                <Code size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">Network & Güvenlik</h3>
              <p className="text-gray-300 text-sm">Kurumsal network sistemleri ve güvenlik altyapısı kurulumu</p>
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
