
import React, { useEffect } from 'react';
import { Book, Computer, Headphones, Circle, Award, Briefcase, GraduationCap, MapPin, Calendar, Phone, Mail, User, Globe } from 'lucide-react';
import Layout from '../components/Layout';

const Hakkimda = () => {
  useEffect(() => {
    // Sayfa başına scroll
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto max-w-5xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Hakkımda
        </h1>

        {/* Kişisel Bilgiler */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-blue-400" size={32} />
            <h2 className="text-2xl font-semibold text-blue-400">Kişisel Bilgiler</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="text-purple-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Doğum Tarihi & Yaş:</span>
                  <p className="text-gray-300">02.03.1991 - 33 Yaş</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-green-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Doğum Yeri:</span>
                  <p className="text-gray-300">Beyoğlu, İstanbul</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Telefon:</span>
                  <p className="text-gray-300">0538 22 444 88</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">E-posta:</span>
                  <p className="text-gray-300">dizpatek@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-purple-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Dil Yetkinliği:</span>
                  <p className="text-gray-300">Türkçe (Ana dil), İngilizce (İleri seviye)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-green-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Ehliyet:</span>
                  <p className="text-gray-300">A1, A2, B, D, F</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profesyonel Özet */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <Computer className="text-blue-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Profesyonel Özet</h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            10+ yıllık deneyime sahip çok yönlü teknik uzman olarak, elektronik ve mekatronik konularında 
            yenilikçi ve gelişmiş tecrübeye dayanan çözümler üretiyorum. Bu alanlarda faaliyette olan 
            veya üretilen tüm ürünlerin bakım, onarım, kullanım ve kontrol eğitimini verebilecek 
            iyi derecede eğitim düzeyine sahip, teknik İngilizce anlayabilen ve konuşabilen bir uzmanım.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Elektronik cihaz tamirinden network sistemlerine, müzik prodüksiyonundan fotoğrafçılığa 
            kadar geniş bir yelpazede profesyonel hizmet sunuyorum. Özellikle sağlık sektöründe 
            aktif olarak çalışmakta, Taksim Meydanda bulunan özel bir diş hastanesinde Sosyal Medya, 
            Sistem ve Network Uzmanı olarak hizmet vermekteyim.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Tersine mühendislik ve sistem entegrasyonu konularında uzmanlaşmış olup, grafik tasarım 
            ve kurumsal network alanlarında da deneyim sahibiyim. Teknik İngilizce yetkinliğim ile 
            uluslararası projeler geliştirip, müzik prodüksiyonu ve beat production konularında 
            da aktif olarak faaliyet göstermekteyim.
          </p>
        </div>

        {/* Teknik Yetkinlikler */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <Computer className="text-purple-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Teknik Yetkinliklerim</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Elektronik & Elektrik</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Elektronik Cihaz Tamiri</li>
                <li>• Elektrik Pano Sistemleri</li>
                <li>• Endüstriyel Elektronik</li>
                <li>• Medikal Cihazlar</li>
                <li>• Dental Sistemler</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-3">Bilgisayar & Network</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Web Tasarım</li>
                <li>• Network Sistemleri</li>
                <li>• Güvenlik Sistemleri</li>
                <li>• Bilgisayar Teknisyenliği</li>
                <li>• Office Programları</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-yellow-300 mb-3">Makine & Sistem</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• CNC Makineler</li>
                <li>• CAD-CAM Yazılımları</li>
                <li>• Klima & HVAC Sistemleri</li>
                <li>• Asansör Teknisyenliği</li>
                <li>• Tersine Mühendislik</li>
              </ul>
            </div>
          </div>
        </div>

        {/* İş Deneyimi */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <Briefcase className="text-green-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-green-400">İş Deneyimim</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-semibold text-blue-300 mb-2">Siya Sağlık Hizmetleri "CityDent"</h4>
              <p className="text-purple-300 text-sm mb-2">Sosyal Medya, Sistem ve Network Uzmanı (2022-Devam Ediyor)</p>
              <p className="text-gray-300 text-sm">
                Özel diş hastanesinde sosyal medya yönetimi, sistem ve network bakımı, teknik sorumluluklar, 
                fotoğrafçılık ve onarım işlerini üstlendim.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Repair Hospital - Elektronik Hastanesi</h4>
              <p className="text-green-300 text-sm mb-2">Kendi İşletmem (2019-Devam Ediyor)</p>
              <p className="text-gray-300 text-sm">
                Kendi işletmem olan elektronik tamir ve bakım servisini yönettim.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">Venus Hotel</h4>
              <p className="text-blue-300 text-sm mb-2">Satış ve Personel Müdürü (2015-Devam Ediyor)</p>
              <p className="text-gray-300 text-sm">
                Otelcilik sektöründe personel yönetimi, işletme ve teknik işlerin kontrolü ile 
                saha sorumluluğunu üstlendim. Fancoil, AHU, kazan, chiller gibi sistemlerin 
                kumanda, onarım ve kontrollerini düzenli olarak yaptım.
              </p>
            </div>
          </div>
        </div>

        {/* Eğitim */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <GraduationCap className="text-yellow-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Eğitim Geçmişim</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-semibold text-blue-300">Şişli Meslek Yüksek Okulu</h4>
              <p className="text-gray-400 text-sm">Elektronik Ürünler Ustası - Usta Öğreticisi (2024)</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-semibold text-purple-300">İstanbul Üniversitesi</h4>
              <p className="text-gray-400 text-sm">Sivil Hava Ulaştırma (2015)</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-semibold text-green-300">Anadolu Üniversitesi</h4>
              <p className="text-gray-400 text-sm">Kamu Yönetimi (2014)</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-lg font-semibold text-yellow-300">Kasımpaşa Anadolu Fen Lisesi</h4>
              <p className="text-gray-400 text-sm">Fen - Sayısal (2009) - Not Ortalaması: 4.00</p>
            </div>
          </div>
        </div>

        {/* Sertifikalar & Üyelikler */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <Award className="text-purple-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Sertifikalar & Üyelikler</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Profesyonel Sertifikalar</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-gray-300 text-sm">Basın Fotoğrafçılığı Sertifikası</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-gray-300 text-sm">Belgesel Fotoğrafçılığı Sertifikası</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-gray-300 text-sm">Senaryo Sertifikası</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-3">Dernek & Klüp Üyelikleri</h4>
              <div className="flex items-center gap-2">
                <Circle className="text-blue-400" size={16} />
                <span className="text-gray-300 text-sm">İFSAK - İstanbul Fotoğraf ve Sinema Kurumu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hobilerim */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
            <Headphones className="text-purple-400 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Müzik & Yaratıcılık</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Beat üretimi yapıyorum</li>
              <li>• MIDI klavye çalıyorum</li>
              <li>• Tekno müzik türünde uzmanlaşıyorum</li>
              <li>• Müziği teknoloji ile harmanlıyorum</li>
              <li>• Grafik tasarım ve animasyon</li>
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
              <li>• Fotoğrafçılık (Basın & Belgesel)</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hakkimda;
