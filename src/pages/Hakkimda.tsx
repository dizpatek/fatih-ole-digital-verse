
import React from 'react';
import { Book, Computer, Headphones, Circle } from 'lucide-react';
import Layout from '../components/Layout';

const Hakkimda = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Hakkımda
        </h1>

        {/* Main Intro */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Kim Olduğum</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Merhaba! Ben Fatih Ole. Yaratıcı, girişimci ve teknik açıdan yetkin biriyim. 
            Deist bir dünya görüşüne sahip olarak doğayı ve bireysel düşünceyi ön planda tutarım.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Öğrenmeyi çok seviyorum ve bu tutkumu kitapları dinleyerek, eğitim videoları 
            izleyerek besliyorum. Minimalist ve işlevsel tasarımlara olan sevgim, 
            geliştirdiğim projelerde de kendini gösteriyor.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
            <Headphones className="text-purple-400 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Müzik & Yaratıcılık</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Beat üretimi yapıyorum</li>
              <li>• MIDI klavye çalıyorum</li>
              <li>• Tekno müzik türünde uzmanlaşıyorum</li>
              <li>• Müziği teknoloji ile harmanlıyorum</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
            <Circle className="text-green-400 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-4 text-green-400">Spor & Doğa</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Extreme bisiklet sürüşü (Danny MacAskill tarzı)</li>
              <li>• Yüzme sporunu aktif olarak yapıyorum</li>
              <li>• Doğa sporlarına tutkuyla bağlıyım</li>
              <li>• Doğayla iç içe zaman geçirmeyi seviyorum</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <Computer className="text-blue-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Teknik Yetkinliklerim</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Yapay Zeka & Otomasyon</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Chatbot sistemleri geliştirme</li>
                <li>• Çok dilli destek sistemleri</li>
                <li>• Ülke bazlı otomatik ayarlamalar</li>
                <li>• Rezervasyon sistemleri</li>
                <li>• CRM entegrasyonları (Bitrix vb.)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-3">Finansal & Teknik</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Borsa robotları geliştirme</li>
                <li>• Finansal otomasyon sistemleri</li>
                <li>• Elektronik cihaz tamiri</li>
                <li>• Elektrik işleri</li>
                <li>• Veri akışı optimizasyonu</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
          <Book className="text-yellow-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Öğrenme Felsefem</h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Sürekli öğrenme ve gelişim halinde olmayı seven biriyim. Kitapları dinlemeyi 
            tercih ederim çünkü bu sayede multitasking yapabilir, aynı zamanda başka 
            aktivitelerle de meşgul olabilirim.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Eğitim videoları izlemek de öğrenme sürecimin önemli bir parçası. 
            Görsel ve işitsel öğrenmeyi harmanlayarak daha etkili bir öğrenme 
            deneyimi elde etmeye çalışıyorum.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Hakkimda;
