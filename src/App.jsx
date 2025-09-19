import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Steps from './components/Steps';
import PremiumAlbum from './components/PremiumAlbum';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-bg">
      <Header />
      <main>
        <Hero />
        <Featured />
        <Steps />
        <PremiumAlbum />
      </main>
      <Footer />
    </div>
  );
}

export default App;
