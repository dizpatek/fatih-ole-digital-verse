
import React from 'react';
import { Calendar, Clock, Tag, ArrowRight, Code, Music, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Yapay Zeka ile Çok Dilli Chatbot Geliştirme',
      excerpt: 'Modern chatbot sistemlerinde dil algılama ve otomatik yanıt üretme teknikleri. OpenAI API ve Python kullanarak nasıl etkili bir sistem kurabilirsiniz?',
      category: 'Yapay Zeka',
      categoryIcon: <Code size={16} />,
      date: '2024-01-15',
      readTime: '8 dk',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=300&fit=crop',
      tags: ['AI', 'Python', 'Chatbot', 'OpenAI']
    },
    {
      id: 2,
      title: 'Tekno Müzik Prodüksiyonunda MIDI Kontrolü',
      excerpt: 'Ableton Live ve hardware synthesizer kullanarak profesyonel tekno müzik üretimi. Beat programlama ve sound design teknikleri.',
      category: 'Müzik',
      categoryIcon: <Music size={16} />,
      date: '2024-01-10',
      readTime: '12 dk',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop',
      tags: ['Tekno', 'MIDI', 'Ableton', 'Prodüksiyon']
    },
    {
      id: 3,
      title: 'Elektronik Cihaz Tamirinde Yaşanan Zorluklar',
      excerpt: 'Modern akıllı telefonların tamir süreçleri ve karşılaşılan teknik problemler. Pratik çözümler ve ipuçları.',
      category: 'Teknik',
      categoryIcon: <Wrench size={16} />,
      date: '2024-01-08',
      readTime: '6 dk',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop',
      tags: ['Elektronik', 'Tamir', 'Teknik', 'Donanım']
    },
    {
      id: 4,
      title: 'Borsa Robotları ve Algoritmic Trading',
      excerpt: 'Python ile otomatik trading sistemleri geliştirme. Risk yönetimi, teknik analiz ve API entegrasyonları.',
      category: 'Finans',
      categoryIcon: <Code size={16} />,
      date: '2024-01-05',
      readTime: '15 dk',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop',
      tags: ['Trading', 'Python', 'Finans', 'API']
    },
    {
      id: 5,
      title: 'Extreme Bisiklet Sürüşü ve Ekipman Modifikasyonları',
      excerpt: 'Danny MacAskill tarzı extreme bisiklet sürüşü için gerekli ekipmanlar ve kişisel modifikasyonlarım.',
      category: 'Spor',
      categoryIcon: <Wrench size={16} />,
      date: '2024-01-03',
      readTime: '10 dk',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop',
      tags: ['Bisiklet', 'Extreme', 'Spor', 'Modifikasyon']
    },
    {
      id: 6,
      title: 'Minimalist Tasarım Felsefesi ve Kodlama',
      excerpt: 'Sade ama güçlü çözümler üretmenin yolları. Hem tasarımda hem de kod yazımında minimalist yaklaşım.',
      category: 'Tasarım',
      categoryIcon: <Code size={16} />,
      date: '2024-01-01',
      readTime: '7 dk',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop',
      tags: ['Minimalizm', 'Tasarım', 'UX', 'Kod']
    }
  ];

  const categories = [
    { name: 'Tümü', count: blogPosts.length },
    { name: 'Yapay Zeka', count: blogPosts.filter(post => post.category === 'Yapay Zeka').length },
    { name: 'Müzik', count: blogPosts.filter(post => post.category === 'Müzik').length },
    { name: 'Teknik', count: blogPosts.filter(post => post.category === 'Teknik').length },
    { name: 'Finans', count: blogPosts.filter(post => post.category === 'Finans').length },
    { name: 'Spor', count: blogPosts.filter(post => post.category === 'Spor').length }
  ];

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Blog
        </h1>
        
        <p className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Teknoloji, müzik, yaratıcılık ve hayat üzerine düşüncelerimi, deneyimlerimi ve 
          öğrendiklerimi paylaştığım alan.
        </p>

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-blue-500/50 rounded-full text-gray-300 hover:text-white transition-all duration-300"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Blog Yazıları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Görsel */}
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white">
                    {post.categoryIcon}
                    {post.category}
                  </span>
                </div>
              </div>

              {/* İçerik */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-white hover:text-blue-400 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Bilgiler */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Devamını Oku */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Devamını Oku
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Daha Fazla Yükle */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            Daha Fazla Yazı Yükle
          </button>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800/30 rounded-lg p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Bülten Aboneliği</h2>
          <p className="text-gray-300 mb-6">
            Yeni yazılarımdan ve projelerimden haberdar olmak için e-posta listemize katılın.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
