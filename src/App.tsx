
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Hakkimda from './pages/Hakkimda';
import Projeler from './pages/Projeler';
import Portfolio from './pages/Portfolio';
import Iletisim from './pages/Iletisim';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/projeler" element={<Projeler />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
