// import React from 'react';
// import { Star } from 'lucide-react';

// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const PhotobookPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-gray-100 to-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             <div className="flex-1">
//               <h1 className="text-5xl font-serif text-gray-900 mb-6">Travel Photo Books</h1>
//               <p className="text-lg text-gray-600 max-w-lg mb-8">
//                 Work with our design specialists to create a personalized Travel Photo Album. We'll help you capture your
//                 precious memories in the most beautiful way.
//               </p>
//               <button className="bg-gray-800 text-white px-8 py-3 text-lg hover:bg-gray-700 transition-colors">
//                 Start Now
//               </button>
//               <p className="text-sm text-gray-500 mt-2">No advance payment required</p>
//             </div>

//             {/* Hero Image Collage */}
//             <div className="relative w-[400px] h-[350px]">
//               <div className="bg-gradient-to-r from-orange-400 to-yellow-400 w-32 h-48 rounded-lg shadow-lg transform rotate-12 absolute z-10"></div>
//               <div className="bg-blue-600 w-32 h-24 rounded-lg shadow-lg absolute top-16 left-20 z-20"></div>
//               <div className="bg-gray-200 w-40 h-32 rounded-lg shadow-lg absolute top-32 left-32 z-30"></div>
//               <div className="bg-orange-300 w-24 h-24 rounded-full shadow-lg absolute top-24 left-48 z-40"></div>
//               <div className="bg-pink-200 w-20 h-20 rounded-full shadow-lg absolute top-48 left-56 z-50 flex items-center justify-center">
//                 <span className="text-xs text-center">A YEAR FULL OF MEMORIES 2020</span>
//               </div>
//               <div className="bg-blue-400 w-36 h-24 rounded-lg shadow-lg absolute top-8 right-8 z-30"></div>
//               <div className="bg-gray-100 w-28 h-28 rounded-lg shadow-lg absolute top-40 right-16 z-20"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <svg
//                   className="w-8 h-8 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 
//                       0v-2c0-.656-.126-1.283-.356-1.857M7 
//                       20H2v-2a3 3 0 015.356-1.857M7 
//                       20v-2c0-.656.126-1.283.356-1.857m0 
//                       0a5.002 5.002 0 019.288 0M15 
//                       7a3 3 0 11-6 0 3 3 0 016 
//                       0zm6 3a2 2 0 11-4 0 2 2 0 
//                       014 0zM7 10a2 2 0 11-4 0 2 2 0 
//                       014 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-2">The Human Touch</h3>
//               <p className="text-gray-600">
//                 We'll help choose the best photos and design the album exactly as you envisioned.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <svg
//                   className="w-8 h-8 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M9 12l2 2 4-4m6 2a9 9 0 
//                       11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-2">Attention to Detail</h3>
//               <p className="text-gray-600">
//                 Every album is carefully checked to ensure it prints perfectly, and packaged with care.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <Star className="w-8 h-8 text-gray-600" />
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-2">Premium Material</h3>
//               <p className="text-gray-600">
//                 Our Wedding Albums are assembled using the finest materials and photo papers.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Travel Photo Book Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-lg font-light text-gray-600 mb-4">Our Everyday Classic</p>
//           <h2 className="text-4xl font-serif text-gray-900 mb-8">Travel Photo Book</h2>
//           <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
//             Digitally printed and professionally bound, these make for the perfect holiday photo books to display all of
//             your most fond memories for many years to come.
//           </p>

//           <div className="mb-12">
//             <p className="text-xl font-semibold mb-8">From CHF 49.00</p>
//             <div className="flex justify-center gap-4">
//               <button className="bg-gray-800 text-white px-8 py-3 text-lg hover:bg-gray-700 transition-colors">
//                 ORDER
//               </button>
//               <button className="border border-gray-800 text-gray-800 px-8 py-3 text-lg hover:bg-gray-50 transition-colors">
//                 EXPLORE
//               </button>
//             </div>
//           </div>

//           {/* Book Preview */}
//           <div className="relative max-w-4xl mx-auto">
//             <div className="bg-white rounded-lg shadow-2xl p-8 transform perspective-1000 rotate-x-12">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-orange-200 h-64 rounded-lg"></div>
//                 <div className="bg-orange-300 h-64 rounded-lg"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Layflat Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-lg font-light text-gray-600 mb-4">Our Bestseller</p>
//           <h2 className="text-4xl font-serif text-gray-900 mb-8">Layflat Travel Photo Album</h2>
//           <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
//             Developed on Fuji photo paper offering outstanding color and clarity, our layflat travel photo album books
//             offer gorgeous uninterrupted double page spreads of your favorite holiday photos.
//           </p>

//           <p className="text-xl font-semibold mb-8">From CHF 79.00</p>
//           <div className="flex justify-center gap-4 mb-12">
//             <button className="bg-gray-800 text-white px-8 py-3 text-lg hover:bg-gray-700 transition-colors">
//               ORDER
//             </button>
//             <button className="border border-gray-800 text-gray-800 px-8 py-3 text-lg hover:bg-gray-50 transition-colors">
//               EXPLORE
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Premium Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-lg font-light text-gray-600 mb-4">Our Luxury Line</p>
//           <h2 className="text-4xl font-serif text-gray-900 mb-8">Premium Layflat Travel Album</h2>
//           <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
//             Featuring thick layflat pages developed on archival Fuji photo paper and offering a wide range of premium
//             cover options, these premium travel photo albums are the perfect way to turn those special moments into
//             memories that will last a lifetime.
//           </p>

//           <p className="text-xl font-semibold mb-8">From CHF 199.00</p>
//           <div className="flex justify-center gap-4 mb-12">
//             <button className="bg-gray-800 text-white px-8 py-3 text-lg hover:bg-gray-700 transition-colors">
//               ORDER
//             </button>
//             <button className="border border-gray-800 text-gray-800 px-8 py-3 text-lg hover:bg-gray-50 transition-colors">
//               EXPLORE
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">Get Album in 4 Easy Steps</h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <svg
//                   className="w-8 h-8 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M9 17V7m0 10a2 2 0 
//                       01-2 2H5a2 2 0 01-2-2V7a2 
//                       2 0 012-2h2a2 2 0 012 
//                       2m0 10a2 2 0 002 2h2a2 2 0 
//                       002-2M9 7a2 2 0 012-2h2a2 2 
//                       0 012 2m0 10V7m0 10a2 2 0 
//                       002 2h2a2 2 0 002-2V7a2 2 0 
//                       00-2-2h-2a2 2 0 00-2 2"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-2">Select Album Type</h3>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <svg
//                   className="w-8 h-8 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M16 7a4 4 0 11-8 0 4 4 0 
//                       018 0zM12 14a7 7 0 00-7 7h14a7 
//                       7 0 00-7-7z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-2">Choose between</h3>
//               <p className="text-gray-600">Design Service or DIY</p>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <svg
//                   className="w-8 h-8 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M3 10h18M7 15h1m4 0h1m-7 
//                       4h12a3 3 0 003-3V8a3 3 0 
//                       00-3-3H6a3 3 0 00-3 3v8a3 
//                       3 0 003 3z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-2">Complete Payment</h3>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <svg
//                   className="w-8 h-8 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M16 7a4 4 0 11-8 0 4 4 0 
//                       018 0zM12 14a7 7 0 00-7 7h14a7 
//                       7 0 00-7-7z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-2">Sit back & relax</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Design Ideas Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-serif text-center text-gray-900 mb-8">Travel Photo Book Ideas</h2>
//           <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-4">
//             Browse through some of our most popular vacation photo book design styles.
//           </p>
//           <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
//             Or work with our design team to create one that is entirely unique to your style.
//           </p>

//           {/* Album Grids (kept structure same, only corrected font class) */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//             <div className="text-center">
//               <div className="bg-pink-100 h-80 rounded-lg mb-4 shadow-lg"></div>
//               <h3 className="text-xl font-serif text-gray-900 mb-1">African Safari</h3>
//               <p className="text-gray-600 italic">Travel Photo Book</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-green-600 h-80 rounded-lg mb-4 shadow-lg flex items-center justify-center">
//                 <div className="text-center text-white">
//                   <p className="text-2xl italic mb-2">Austin + Bianca</p>
//                   <p className="text-sm">22.05.2021</p>
//                 </div>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-1">African Safari</h3>
//               <p className="text-gray-600 italic">Travel Photo Book</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gray-100 h-80 rounded-lg mb-4 shadow-lg flex items-center justify-center">
//                 <div className="text-center text-gray-800">
//                   <div className="w-24 h-24 border-4 border-green-300 rounded-full mx-auto mb-4 flex items-center justify-center">
//                     <p className="text-sm">Sarah & Alex</p>
//                   </div>
//                 </div>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-1">African Safari</h3>
//               <p className="text-gray-600 italic">Travel Photo Book</p>
//             </div>
//           </div>

//           {/* More grids (corrected fonts same way) */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//             <div className="text-center">
//               <div className="bg-teal-400 h-80 rounded-lg mb-4 shadow-lg flex items-center justify-center">
//                 <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center text-white">
//                   <div className="text-center">
//                     <p className="text-xs">SARAH</p>
//                     <p className="text-xs">ALEX</p>
//                   </div>
//                 </div>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-1">African Safari</h3>
//               <p className="text-gray-600 italic">Travel Photo Book</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-green-600 h-80 rounded-lg mb-4 shadow-lg flex items-center justify-center">
//                 <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center text-white">
//                   <p className="text-lg">SA</p>
//                 </div>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-1">African Safari</h3>
//               <p className="text-gray-600 italic">Travel Photo Book</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gray-100 h-80 rounded-lg mb-4 shadow-lg flex items-center justify-center">
//                 <div className="text-center text-gray-600">
//                   <p className="text-3xl italic mb-2">Our</p>
//                   <p className="text-3xl italic mb-2">Wedding</p>
//                   <p className="text-3xl italic">Day</p>
//                   <p className="text-sm mt-4">22.05.2021</p>
//                 </div>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-1">African Safari</h3>
//               <p className="text-gray-600 italic">Travel Photo Book</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-pink-100 h-80 rounded-lg mb-4 shadow-lg flex items-center justify-center">
//                 <div className="text-center text-gray-600">
//                   <p className="text-sm mb-8">SARAH & ALEX</p>
//                   <p className="text-xs">05.05.2022</p>
//                 </div>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-1">African Safari</h3>
//               <p className="text-gray-600 italic">Travel Photo Book</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-pink-300 h-80 rounded-lg mb-4 shadow-lg flex items-center justify-center">
//                 <div className="text-center">
//                   <p className="text-4xl italic text-pink-600 mb-2">best</p>
//                   <p className="text-4xl italic text-pink-600 mb-2">day</p>
//                   <p className="text-4xl italic text-pink-600">ever</p>
//                   <p className="text-sm text-pink-700 mt-6">SARAH & ALEX</p>
//                   <p className="text-xs text-pink-700">05.05.2022</p>
//                 </div>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-1">African Safari</h3>
//               <p className="text-gray-600 italic">Travel Photo Book</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-pink-100 h-80 rounded-lg mb-4 shadow-lg flex items-center justify-center">
//                 <div className="text-center text-gray-800">
//                   <p className="text-2xl italic">Austin + Bianca</p>
//                   <p className="text-sm mt-4">22.05.2021</p>
//                 </div>
//               </div>
//               <h3 className="text-xl font-serif text-gray-900 mb-1">African Safari</h3>
//               <p className="text-gray-600 italic">Travel Photo Book</p>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default PhotobookPage;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhotobookPage = () => {
  return (
    <div className="min-h-screen bg-[#F0F7F0]">
      <Header bgColor="#F0F7F0" />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 sm:mb-6">
              Travel Photo Books
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0 mb-6">
              Work with our design specialists to create a personalized Travel Photo Album. We'll help you capture your
              precious memories in the most beautiful way.
            </p>
            <button className="bg-gray-800 text-white px-5 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg hover:bg-gray-700 transition-colors mb-2">
              Start Now
            </button>
            <p className="text-xs sm:text-sm text-gray-500">No advance payment required</p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-72 sm:h-80 md:h-96 mx-auto md:mx-0 mt-8">
            <img
              src="/travel book.png"
              alt="Travel Book"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ border: 'none', borderRadius: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/features image.png"
            alt="Features"
            className="w-full h-auto object-cover"
            style={{ border: 'none', borderRadius: 0 }}
          />
        </div>
      </section>

      {/* Travel Photo Book Section */}
      <section className="py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base md:text-lg font-light text-gray-600 mb-4">Our Everyday Classic</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-6 md:mb-8">Travel Photo Book</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 md:mb-12">
            Digitally printed and professionally bound, these make for the perfect holiday photo books to display all of
            your most fond memories for many years to come.
          </p>

          <div className="mb-8 md:mb-12">
            <p className="text-lg md:text-xl font-semibold mb-6 md:mb-8">From CHF 49.00</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button className="bg-gray-800 text-white px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg hover:bg-gray-700 transition-colors">ORDER</button>
              <button className="border border-gray-800 text-gray-800 px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg hover:bg-gray-50 transition-colors">EXPLORE</button>
            </div>
          </div>

          <div className="relative mx-auto max-w-full sm:max-w-4xl md:max-w-5xl">
  <img
    src="/travel 1.png"
    alt="Travel Photo Book"
    className="w-full h-auto sm:h-80 md:h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    style={{ border: 'none', borderRadius: 0 }}
  />
</div>


        </div>
      </section>

      {/* Layflat Section */}
      <section className="py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base md:text-lg font-light text-gray-600 mb-4">Our Bestseller</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-6 md:mb-8">Layflat Travel Photo Album</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Developed on Fuji photo paper offering outstanding color and clarity, our layflat travel photo album books
            offer gorgeous uninterrupted double page spreads of your favorite holiday photos.
          </p>
          <p className="text-lg md:text-xl font-semibold mb-6 md:mb-8">From CHF 79.00</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 md:mb-12">
            <button className="bg-gray-800 text-white px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg hover:bg-gray-700 transition-colors">ORDER</button>
            <button className="border border-gray-800 text-gray-800 px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg hover:bg-gray-50 transition-colors">EXPLORE</button>
          </div>

          <div className="relative mx-auto max-w-full sm:max-w-4xl md:max-w-5xl">
  <img
    src="/layflat.png"
    alt="Layflat Travel Photo Album"
    className="w-full h-auto sm:h-80 md:h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    style={{ border: 'none', borderRadius: 0 }}
  />
</div>


        </div>
      </section>

      {/* Premium Section */}
      <section className="py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base md:text-lg font-light text-gray-600 mb-4">Our Luxury Line</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-6 md:mb-8">
            Premium Layflat Travel Album
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Featuring thick layflat pages developed on archival Fuji photo paper and offering a wide range of premium
            cover options, these premium travel photo albums are the perfect way to turn those special moments into
            memories that will last a lifetime.
          </p>
          <p className="text-lg md:text-xl font-semibold mb-6 md:mb-8">From CHF 199.00</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 md:mb-12">
            <button className="bg-gray-800 text-white px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg hover:bg-gray-700 transition-colors">ORDER</button>
            <button className="border border-gray-800 text-gray-800 px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg hover:bg-gray-50 transition-colors">EXPLORE</button>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <img
              src="/premium layflat.png"
              alt="Premium Layflat Travel Album"
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ border: 'none', borderRadius: 0, boxShadow: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Process Section - No hover */}
      <section className="py-12 md:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-12 md:mb-16 text-gray-900">
            Get Album in 4 Easy Steps
          </h2>

          <div className="relative mx-auto max-w-4xl">
            <img
              src="/steps.png"
              alt="Album Process Steps"
              className="w-full h-auto object-cover"
              style={{ border: 'none', borderRadius: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Design Ideas Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-gray-900 mb-6 md:mb-8">
            Travel Photo Book Ideas
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 md:mb-16">
            Browse through some of our most popular vacation photo book design styles. Or work with our design team to create one that is entirely unique to your style.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              '/1.jpg','/2.jpg','/3.jpg','/4.jpg','/5.jpg','/6.jpg','/7.jpg','/8.jpg','/9.jpg'
            ].map((src, idx) => (
              <div key={idx} className="text-center">
                <div className="h-60 sm:h-64 md:h-80 mb-4 overflow-hidden">
                  <img
                    src={src}
                    alt={`Photo ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    style={{ border: 'none', borderRadius: 0 }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-1">African Safari</h3>
                <p className="text-sm md:text-base text-gray-600 italic">Travel Photo Book</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PhotobookPage;
