
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Music } from 'lucide-react';
import Layout from '../components/Layout';

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form gönderme işlemi burada olacak
    alert('Mesajınız gönderildi! En kısa sürede dönüş yapacağım.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          İletişim
        </h1>
        
        <p className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Proje fikirleri, iş birlikleri veya sadece merhaba demek için benimle iletişime geçebilirsiniz. 
          Her türlü mesajınızı memnuniyetle karşılıyorum!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">İletişim Bilgileri</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">E-posta</h3>
                  <p className="text-gray-300">fatih.sonturk@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Phone className="text-green-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Telefon</h3>
                  <p className="text-gray-300">+90 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Konum</h3>
                  <p className="text-gray-300">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Sosyal Medya</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all"
                >
                  <Instagram className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Music className="text-white" size={20} />
                </a>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="mt-8 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-bold mb-4 text-white">Çalışma Saatleri</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pazartesi - Cuma</span>
                  <span className="text-gray-300">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cumartesi</span>
                  <span className="text-gray-300">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pazar</span>
                  <span className="text-gray-300">Kapalı</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                * Acil durumlar için 7/24 ulaşabilirsiniz
              </p>
            </div>
          </div>

          {/* İletişim Formu */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Mesaj Gönder</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Adınız Soyadınız *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Adınızı ve soyadınızı girin"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-posta Adresiniz *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Mesajınızın konusu"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
                Mesajı Gönder
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-300">
                <strong>Hızlı yanıt:</strong> Genellikle 24 saat içinde geri dönüş yapıyorum. 
                Acil projeler için telefon numaramı kullanabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Iletisim;
