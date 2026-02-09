import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-[177.77vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/gzv9MHkhcVw?autoplay=1&mute=1&loop=1&playlist=gzv9MHkhcVw&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Background video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Black Overlay - 75% opacity */}
      <div className="absolute inset-0 bg-black/75 z-10" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#161819] to-transparent z-20" />

      {/* Content */}
      <div className="relative z-30 text-center text-white flex flex-col items-center px-4">
        <div className="flex flex-row items-center justify-center gap-8 mb-2">
          <img src="/Nikhoj.svg" alt="Logo 1" className="h-38 w-auto" />
          <a href="https://www.munalert.org" target="_blank" rel="noopener noreferrer">
            <img src="/Munalert.svg" alt="Logo 2" className="h-16 w-auto" />
          </a>
        </div>
        <h1 
          className="text-6xl font-bold mb-4" 
          style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif' }}
        >
          প্রত্যেক নিখোঁজের জন্য
        </h1>
        <h1 
          className="text-6xl font-bold mb-4" 
          style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif', color: '#E82063' }}
        >
          একত্রিত হই
        </h1>
        <p className="text-lg">Every Child Matters</p>
      </div>
    </div>
  );
}