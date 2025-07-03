import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Blog
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Yazılarını Buraya Ekleyin */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              <a href="/blog/1" className="hover:text-blue-300 transition-colors">
                Blog Yazısı 1
              </a>
            </h2>
            <p className="text-gray-300 text-sm">
              Bu blog yazısı henüz hazırlanmaktadır. Yakında detaylı içerik ile burada olacak.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              <a href="/blog/2" className="hover:text-blue-300 transition-colors">
                Blog Yazısı 2
              </a>
            </h2>
            <p className="text-gray-300 text-sm">
              Bu blog yazısı da hazırlanıyor. Farklı konuları ele alacak.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              <a href="/blog/3" className="hover:text-blue-300 transition-colors">
                Blog Yazısı 3
              </a>
            </h2>
            <p className="text-gray-300 text-sm">
              Yeni bir blog yazısı daha yolda!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
