"use client";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-[80vh] w-full flex items-center justify-center mb-22 overflow-hidden ">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[80vh] min-w-[142.216vh] min-h-[45vw] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/gzv9MHkhcVw?autoplay=1&mute=1&loop=1&playlist=gzv9MHkhcVw&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Background video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Black Overlay - 75% opacity */}
      <div className="absolute inset-0 bg-black/75 z-10 h-full" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#161819] to-transparent z-20" />
      {/* Left Gradient Overlay */}
      <div className="absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-[#161819] to-transparent z-20 pointer-events-none opacity-40" />
      {/* Right Gradient Overlay */}
      <div className="absolute top-0 right-0 h-full w-3/4 bg-gradient-to-l from-[#161819] to-transparent z-20 pointer-events-none opacity-0" />

      {/* Content */}
      <div className="relative z-30 text-center text-white flex flex-col items-center px-4">
        
        <div className="flex flex-row items-center justify-center gap-8 mb-2 mt-4">
          <img src="/Nikhoj.svg" alt="Logo 1" className="h-38 w-auto" />
          <a href="https://www.munalert.org" target="_blank" rel="noopener noreferrer">
            <img src="/Munalert.svg" alt="Logo 2" className="h-16 w-auto" />
          </a>
        </div>
        <h1 
          className="text-6xl font-bold mb-4  md:px-4 leading-relaxed" 
          style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif' }}
        >
          প্রত্যেক নিখোঁজের জন্য
        </h1>
        <h1 
          className="text-6xl font-bold mb-4 md:px-4 " 
          style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif', color: '#E82063' }}
        >
          একত্রিত হই
        </h1>

        <p className="text-lg mb-2" style={{ fontFamily: 'CustomFont2, Arial, Helvetica, sans-serif' }}>Every Child Matters</p>
       
        <a
          href="https://munalert.org/report-missing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block"
        >
          <button
            style={{
              border: '2px solid #E82063',
              background: 'transparent',
              color: '#E82063',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              marginBottom: '4rem',
              fontSize: '1.25rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'CustomFont, Arial, Helvetica, sans-serif',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#E82063';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#E82063';
            }}
          >
            নিখোঁজ রিপোর্ট করুন
          </button>
        </a>
      
      </div>
       
    </div>

   
  );
}