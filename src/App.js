import React, { useState } from 'react';
import Header from './components/Header';
import CookieModal from './components/CookieModal';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  const [showCookieModal, setShowCookieModal] = useState(true);

  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSection />
      <Footer />
      {showCookieModal && (
        <CookieModal onClose={() => setShowCookieModal(false)} />
      )}
    </div>
  );
}

export default App;