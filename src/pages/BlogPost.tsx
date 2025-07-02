
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';

const BlogPost = () => {
  const { id } = useParams();

  // Basit bir blog yazısı template'i
  const blogPost = {
    id: id,
    title: 'Bu blog yazısı henüz hazırlanmaktadır',
    content: `
      <div class="prose prose-invert max-w-none">
        <p>Bu blog yazısı şu anda hazırlanmaktadır. Yakında detaylı içerik ile burada olacak.</p>
        <p>Bu yazıda şunları bulacaksınız:</p>
        <ul>
          <li>Detaylı teknik açıklamalar</li>
          <li>Pratik uygulama örnekleri</li>
          <li>Kod örnekleri ve çözümler</li>
          <li>Kişisel deneyimlerim</li>
        </ul>
        <p>Güncellemeler için takipte kalın!</p>
      </div>
    `,
    date: '2024-01-15',
    readTime: '12 dk',
    category: 'Teknoloji',
    tags: ['Blog', 'Hazırlanıyor']
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-20">
        {/* Geri Dön */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Blog'a Geri Dön
        </Link>

        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {blogPost.title}
        </h1>

        {/* Meta Bilgiler */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {new Date(blogPost.date).toLocaleDateString('tr-TR')}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            {blogPost.readTime}
          </div>
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            {blogPost.category}
          </span>
        </div>

        {/* İçerik */}
        <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700 mb-8">
          <div
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>

        {/* Etiketler */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blogPost.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Sosyal Paylaşım */}
        <div className="flex items-center gap-4 mb-8">
          <button className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Heart size={16} />
            Beğen
          </button>
          <button className="flex items-center gap-2 bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600/50 transition-colors">
            <Share2 size={16} />
            Paylaş
          </button>
          <button className="flex items-center gap-2 bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600/50 transition-colors">
            <MessageCircle size={16} />
            Yorum Yap
          </button>
        </div>

        {/* Yazar Bilgisi */}
        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              FS
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Fatih Sontürk</h3>
              <p className="text-gray-300 text-sm mb-3">
                10+ yıllık deneyimi olan teknik uzman. Teknoloji, müzik, fotoğrafçılık ve yaratıcılık 
                alanlarında uzman. Projelerimden ve deneyimlerimden edindiğim bilgileri paylaşıyorum.
              </p>
              <Link
                to="/hakkimda"
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                Hakkımda daha fazla bilgi →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
