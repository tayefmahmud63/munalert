"use client";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { useState } from "react";
import { deadImagesData } from "../utils/deadImagesData";
import MemoriesModal from "../../src/components/MemoriesModal";

function AnimatedGroupPreset() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (memory) => {
    setSelected(memory);
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    setSelected(null);
  };

  return (
    <div className="flex flex-col items-center w-full" style={{ background: '#161819' }}>
      <h1 className="text-4xl md:text-5xl font-bold text-center pt-24 text-white" style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif' }}>
        আমাদের হারিয়ে ফেলা ফুল গুলো
      </h1>
      <AnimatedGroup
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-24 py-8"
        preset="scale"
      >
        {deadImagesData.map((memory, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-[3/4] min-h-[420px] flex flex-col items-center justify-end rounded-[12px] overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => handleOpen(memory)}
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
      </AnimatedGroup>
      <MemoriesModal isVisible={modalOpen} selected={selected} handleClose={handleClose} hidePosterDownload />
    </div>
  );
}

function AnimatedGroupCustomVariants() {
  return (
    <AnimatedGroup
      className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4"
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1.2,
              type: "spring",
              bounce: 0.3,
            },
          },
        },
      }}
    >
      <img
        src="/slider_images/1.webp"
       
        className="h-auto w-full rounded-[4px]"
      />
      <img
        src="/slider_images/2.webp"
        
        className="h-auto w-full rounded-[4px]"
      />
      <img
        src="/slider_images/3.webp"
   
        className="h-auto w-full rounded-[4px]"
      />

    </AnimatedGroup>
  );
}

function AnimatedGroupCustomVariants2() {
  return (
    <AnimatedGroup
      className="grid h-full grid-cols-2 gap-8 p-12 md:grid-cols-3 lg:grid-cols-4"
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: "blur(12px)",
            y: -60,
            rotateX: 90,
          },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            rotateX: 0,
            transition: {
              type: "spring",
              bounce: 0.3,
              duration: 1,
            },
          },
        },
      }}
    >
      <div key={1}>
        <img
          src="/national_geographic_logo.svg"
          alt="Apple Music logo"
          className="h-auto w-full"
        />
      </div>
      <div key={2}>
        <img src="/sony_logo.svg" alt="Chrome logo" className="h-auto w-full" />
      </div>
      <div key={3}>
        <img
          src="/strava_logo.svg"
          alt="Strava logo"
          className="h-auto w-full"
        />
      </div>
      <div key={4}>
        <img
          src="/nintendo_logo.svg"
          alt="Nintendo logo"
          className="h-auto w-full"
        />
      </div>
    </AnimatedGroup>
  );
}

export default AnimatedGroupPreset;
