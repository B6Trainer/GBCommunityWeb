import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import SocialMediaOverlay from './components/SocialMediaOverlay';
import LoginPopup from './components/LoginPopup';
import SnowEffect from './components/SnowEffect';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import CommunityPlan from './pages/CommunityPlan';
import GoldBoxPlan from './pages/GoldBoxPlan';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Earnings from './pages/Earnings';
import Products from './pages/Products';
import Wallet from './pages/Wallet';
import ZaraAI from './pages/ZaraAI';
import GBUSD from './pages/GBUSD';
import GBXAU from './pages/GBXAU';
import SwapSystem from './pages/SwapSystem';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div className="min-h-screen text-gold-400 relative">
        <SnowEffect />
        <div className="relative" style={{ zIndex: 10 }}>
          <Header onLoginClick={() => setShowLogin(true)} />
          <Ticker />
          <SocialMediaOverlay />
          {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/community" element={<CommunityPlan />} />
          <Route path="/plans/gold-box" element={<GoldBoxPlan />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/wallet" element={<Wallet />} />
          <Route path="/products/zara-ai" element={<ZaraAI />} />
          <Route path="/products/gbusd" element={<GBUSD />} />
          <Route path="/products/gbxau" element={<GBXAU />} />
          <Route path="/products/swap-system" element={<SwapSystem />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;