
import React from 'react';
import { Award, Star, Zap } from 'lucide-react';

const EducationSection = () => {
  return (
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
                <p className="text-gray-400 text-sm">Elektronik Ürünler Kalfalığı, Ustalığı, Usta Öğreticiliği - 2024</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-300">İstanbul Üniversitesi</h4>
                <p className="text-gray-400 text-sm">Sivil Hava Ulaştırma - 2015</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <h4 className="font-semibold text-green-300">Anadolu Üniversitesi</h4>
                <p className="text-gray-400 text-sm">Kamu Yönetimi - 2014</p>
              </div>
              <div className="border-l-2 border-yellow-500 pl-4">
                <h4 className="font-semibold text-yellow-300">Kasımpaşa Anadolu Fen Lisesi</h4>
                <p className="text-gray-400 text-sm">Fen-Sayısal (2009) - Not Ortalaması: 4.00</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-purple-400">Sertifikalar & Üyelikler</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="text-yellow-400" size={16} />
                <span className="text-gray-300">Elektronik Ürünler Kalfalık Sertifikası</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-yellow-400" size={16} />
                <span className="text-gray-300">Elektronik Ürünler Ustalık Sertifikası</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-yellow-400" size={16} />
                <span className="text-gray-300">Elektronik Ürünler Usta Öğreticilik Sertifikası</span>
              </div>
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
  );
};

export default EducationSection;
