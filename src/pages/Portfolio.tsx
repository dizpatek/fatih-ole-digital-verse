import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Portföy
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Tasarım Projeleri */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Web Tasarım</h2>
            <img src="https://via.placeholder.com/350x200?text=Web+Tasarim" alt="Web Tasarım Projesi" className="rounded-md mb-4" />
            <p className="text-gray-300 text-sm">
              Modern ve kullanıcı dostu web siteleri tasarlıyorum. SEO optimizasyonu ve mobil uyumluluk önceliğimdir.
            </p>
          </div>

          {/* Grafik Tasarım Projeleri */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Grafik Tasarım</h2>
            <img src="https://i.ibb.co/j498bsm/adsiz-tasarim-1.png" alt="Grafik Tasarım Projesi" className="rounded-md mb-4" />
            <p className="text-gray-300 text-sm">
              Markanızın kimliğini yansıtan özgün logo, broşür ve kurumsal kimlik tasarımları hazırlıyorum.
            </p>
          </div>

          {/* Network Sistemleri Projeleri */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-green-400">Network Sistemleri</h2>
            <img src="https://i.ibb.co/0yMGj6N/network.jpg" alt="Network Sistemleri Projesi" className="rounded-md mb-4" />
            <p className="text-gray-300 text-sm">
              Güvenli ve yüksek performanslı network çözümleri sunuyorum. Kurulum, yapılandırma ve bakım hizmetleri sağlıyorum.
            </p>
          </div>

          {/* Müzik Prodüksiyon Projeleri */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">Müzik Prodüksiyon</h2>
            <img src="https://via.placeholder.com/350x200?text=Muzik+Produksiyon" alt="Müzik Prodüksiyon Projesi" className="rounded-md mb-4" />
            <p className="text-gray-300 text-sm">
              Profesyonel müzik prodüksiyon hizmetleri sunuyorum. Beat yapımı, mix ve mastering konularında uzmanım.
            </p>
          </div>

          {/* Fotoğrafçılık Projeleri */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-pink-400">Fotoğrafçılık</h2>
            <img src="https://via.placeholder.com/350x200?text=Fotografcilik" alt="Fotoğrafçılık Projesi" className="rounded-md mb-4" />
            <p className="text-gray-300 text-sm">
              Etkileyici fotoğraf çekimleri yapıyorum. Düğün, portre, ürün ve etkinlik fotoğrafçılığı hizmetleri sunuyorum.
            </p>
          </div>

          {/* Teknik Servis Projeleri */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">Teknik Servis</h2>
            <img src="https://via.placeholder.com/350x200?text=Teknik+Servis" alt="Teknik Servis Projesi" className="rounded-md mb-4" />
            <p className="text-gray-300 text-sm">
              Elektronik cihazların tamiri ve bakımı konusunda uzmanım. Hızlı ve güvenilir teknik servis hizmeti sağlıyorum.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
