// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Featured from './components/Featured';
// import Steps from './components/Steps';
// import PremiumAlbum from './components/PremiumAlbum';
// import Footer from './components/Footer';
// import TravelPhotoBooks from './components/TravelPhotoBooks';
// function App() {
//   return (
//     <div className="bg-brand-bg">
//       <Header />
//       <main>
//         <Hero />
//         <Featured />
//         <Steps />
//         <PremiumAlbum />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Steps from './components/Steps';
import PremiumAlbum from './components/PremiumAlbum';
import Footer from './components/Footer';
import TravelPhotoBooks from './components/TravelPhotoBooks';

function App() {
  return (
    <Router>
      <div className="bg-brand-bg">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Featured />
                <Steps />
                <PremiumAlbum />
              </>
            } />
            <Route path="/travel-photo-books" element={<TravelPhotoBooks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;