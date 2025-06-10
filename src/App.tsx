import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import HouseDetailPage from './pages/HouseDetailPage';
import LoungePage from './pages/LoungePage';
import SmartPage from './pages/SmartPage';
import SkandyNordyPage from './pages/SkandyNordyPage';
import ModernBPage from './pages/ModernBPage';
import ModernPage from './pages/ModernPage';
import ModularPage from './pages/ModularPage';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/house/:id" element={<HouseDetailPage />} />
            <Route path="/lounge" element={<LoungePage />} />
            <Route path="/smart" element={<SmartPage />} />
            <Route path="/skandy-nordy" element={<SkandyNordyPage />} />
            <Route path="/modern-b" element={<ModernBPage />} />
            <Route path="/modern" element={<ModernPage />} />
            <Route path="/modular" element={<ModularPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;