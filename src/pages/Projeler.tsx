import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const Projeler = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projeler
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proje 1 */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <img
              src="https://via.placeholder.com/400x200?text=Proje+1"
              alt="Proje 1"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Web Site Tasarımı</h3>
            <p className="text-gray-300 text-sm">
              Modern ve kullanıcı dostu web siteleri tasarlıyorum.
            </p>
          </div>

          {/* Proje 2 */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <img
              src="https://via.placeholder.com/400x200?text=Proje+2"
              alt="Proje 2"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Mobil Uygulama Geliştirme</h3>
            <p className="text-gray-300 text-sm">
              iOS ve Android platformları için mobil uygulamalar geliştiriyorum.
            </p>
          </div>

          {/* Proje 3 */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <img
              src="https://via.placeholder.com/400x200?text=Proje+3"
              alt="Proje 3"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-green-400 mb-2">E-ticaret Çözümleri</h3>
            <p className="text-gray-300 text-sm">
              E-ticaret siteleri için özelleştirilmiş çözümler sunuyorum.
            </p>
          </div>

          {/* Proje 4 */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <img
              src="https://via.placeholder.com/400x200?text=Proje+4"
              alt="Proje 4"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Grafik Tasarım</h3>
            <p className="text-gray-300 text-sm">
              Markanız için özgün logo ve kurumsal kimlik tasarımları yapıyorum.
            </p>
          </div>

          {/* Proje 5 */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <img
              src="https://via.placeholder.com/400x200?text=Proje+5"
              alt="Proje 5"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Network Kurulumu</h3>
            <p className="text-gray-300 text-sm">
              Kurumsal network sistemlerinin kurulumunu ve bakımını sağlıyorum.
            </p>
          </div>

          {/* Proje 6 */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <img
              src="https://via.placeholder.com/400x200?text=Proje+6"
              alt="Proje 6"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">SEO Optimizasyonu</h3>
            <p className="text-gray-300 text-sm">
              Web sitenizin arama motorlarında üst sıralarda yer alması için SEO optimizasyonu yapıyorum.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projeler;
