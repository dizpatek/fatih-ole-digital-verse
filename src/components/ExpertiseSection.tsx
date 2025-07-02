
import React from 'react';
import { Settings, Code, Music } from 'lucide-react';

const ExpertiseSection = () => {
  return (
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
  );
};

export default ExpertiseSection;
