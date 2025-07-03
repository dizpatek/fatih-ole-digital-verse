
import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, User, Globe, MessageSquare, Send } from 'lucide-react';
import Layout from '../components/Layout';

const Iletisim = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          İletişim
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-green-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-green-400 mb-1">Telefon</h3>
                    <p className="text-gray-300">+90 538 22 444 88</p>
                    <p className="text-gray-500 text-sm">7/24 Ulaşılabilir</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-blue-400 mb-1">E-posta</h3>
                    <p className="text-gray-300">dizpatek@gmail.com</p>
                    <p className="text-gray-500 text-sm">24 saat içinde yanıt</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="text-yellow-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-yellow-400 mb-1">Dil Desteği</h3>
                    <p className="text-gray-300">Türkçe (Ana dil)</p>
                    <p className="text-gray-300">İngilizce (İleri seviye)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Çalışma Tercihleri */}
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-purple-400">Çalışma Tercihleri</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Tercih Edilen Sektörler</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Bilişim</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Elektrik-Elektronik</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Teknik Servis</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Telekomünikasyon</span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Sağlık</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Grafik Tasarım</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-green-300 mb-2">Çalışma Pozisyonları</h3>
                  <p className="text-gray-300 text-sm">Teknik Uzman, Şef, Amir, Müdür, Tekniker, Teknisyen</p>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
              <MessageSquare size={24} />
              Bana Mesaj Gönderin
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Adınız *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Adınızı girin"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Soyadınız *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Soyadınızı girin"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  E-posta Adresiniz *
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="ornek@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Konu *
                </label>
                <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors">
                  <option value="">Konu seçin</option>
                  <option value="teknik-servis">Teknik Servis Talebi</option>
                  <option value="is-teklifi">İş Teklifi</option>
                  <option value="proje-danismanlik">Proje Danışmanlığı</option>
                  <option value="egitim">Eğitim & Mentorluk</option>
                  <option value="muzik-produksiyon">Müzik Prodüksiyonu</option>
                  <option value="grafik-tasarim">Grafik Tasarım</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Mesajınız *
                </label>
                <textarea
                  rows={6}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
                  placeholder="Mesajınızı buraya yazın..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Mesajı Gönder
              </button>
            </form>
          </div>
        </div>

        {/* Referanslar */}
        <div className="mt-16 bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
          <h2 className="text-2xl font-semibold mb-8 text-green-400 flex items-center gap-2">
            <User size={24} />
            Profesyonel Referanslar
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
              <h3 className="font-semibold text-blue-300 mb-2">Mehmet Yücelay</h3>
              <p className="text-gray-400 text-sm mb-2">Royal Asansör - Teknik Uzman</p>
              <p className="text-gray-300 text-sm">0545 569 65 31</p>
              <p className="text-gray-300 text-sm">m.yucelay@gmail.com</p>
            </div>
            
            <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
              <h3 className="font-semibold text-purple-300 mb-2">Alparslan Kabil</h3>
              <p className="text-gray-400 text-sm mb-2">Alpaş Asansör - Üst Düzey Yönetici</p>
              <p className="text-gray-300 text-sm">0532 284 39 84</p>
            </div>
            
            <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
              <h3 className="font-semibold text-green-300 mb-2">Nevzat Aydemir</h3>
              <p className="text-gray-400 text-sm mb-2">CityDent - Üst Düzey Yönetici</p>
              <p className="text-gray-300 text-sm">0533 601 30 55</p>
              <p className="text-gray-300 text-sm">yönetim@citydentistanbul.com</p>
            </div>
            
            <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
              <h3 className="font-semibold text-blue-300 mb-2">Çağlar Aksoylar</h3>
              <p className="text-gray-400 text-sm mb-2">The Galliard - Üst Düzey Yönetici</p>
              <p className="text-gray-300 text-sm">0532 256 90 21</p>
              <p className="text-gray-300 text-sm">caksoylar@thegalliard.com</p>
            </div>
            
            <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
              <h3 className="font-semibold text-purple-300 mb-2">Volkan Gümüş</h3>
              <p className="text-gray-400 text-sm mb-2">Dizayn Elektro Pano - Üst Düzey Yönetici</p>
              <p className="text-gray-300 text-sm">0536 560 92 00</p>
            </div>
          </div>
        </div>

        {/* Hızlı İletişim */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8 border border-blue-500/30">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Hızlı İletişim</h3>
            <p className="text-gray-300 mb-6">
              Teknik destek veya iş birliği için hemen iletişime geçin!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+905382244488"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <Phone size={20} />
                Hemen Ara
              </a>
              <a
                href="mailto:dizpatek@gmail.com"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <Mail size={20} />
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Iletisim;
