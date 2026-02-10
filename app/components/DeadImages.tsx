
"use client";
import { deadImagesData as rawDeadImagesData } from "../utils/deadImagesData";
import MemoriesModal from "../../src/components/MemoriesModal";
import { useState } from "react";



function DeadImagesStatic() {
  // Patch the data to match MemoryType
  const deadImagesData = rawDeadImagesData.map((item) => ({
    seat: "",
    posterLink: "",
    image1: undefined,
    image2: undefined,
    image3: undefined,
    ...item,
    image_src: {
      small: item.image_src.large,
      ...item.image_src,
    },
  }));

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full py-20 ">
      <h1 className="text-4xl md:text-5xl font-bold text-center pt-12 mb-4 text-white px-4 md:px-6" style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif', color: '#E82063' }}>
        আমাদের হারিয়ে ফেলা ফুল গুলো
      </h1>
      <p className="text-white text-base mb-6 max-w-[620px] text-center px-4 md:px-12" style={{ fontFamily: 'CustomFont2, Arial, Helvetica, sans-serif',  }}>
নিখোঁজ শিশুদের সন্ধানে জরুরি নোটিফিকেশন পদ্ধতি না থাকার কারণে ঝরে গেছে অনেক রঙিন ফুল। এই ফুলদের ফিরে পেতেই বাংলাদেশ মুন অ্যালার্টের আবির্ভাব।
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-24 py-8 justify-center">
        {deadImagesData.map((memory, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-[3/4] min-h-[420px] flex flex-col items-center justify-end rounded-[12px] overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => setOpenIdx(idx)}
          >
            <img
              src={memory.image_src.large}
              alt={memory.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#161819] to-transparent z-10" />
            <div className="relative z-20 w-full flex flex-col items-center justify-end pb-6">
              <span className="text-white font-bold text-xl">{memory.name}</span>
              <span className="text-white text-lg" style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif', color: '#ea477e' }}>{memory.dates}</span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#E82063] bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center transition-all duration-500 z-30 opacity-0 group-hover:opacity-80">
              <span className="text-white font-bold text-xl">বিস্তারিত পড়ুন </span>
            </div>
          </div>
        ))}
      </div>
      <MemoriesModal
        isVisible={openIdx !== null}
        selected={openIdx !== null ? deadImagesData[openIdx] : undefined}
        handleClose={() => setOpenIdx(null)}
        hidePosterDownload={true}
      />
    </div>
  );
}

export default DeadImagesStatic;
