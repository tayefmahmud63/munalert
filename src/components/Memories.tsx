"use client"


import React, { useState, useEffect } from "react";
import MemoriesModal from "./MemoriesModal";
import Memory, { type MemoryType } from "./Memory";
import { memories } from "../../app/utils/data";

export default function Memories() {
  const [selected, setSelected] = useState<MemoryType>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const memoryName = hash.replace("#", "").replace(/-/g, " ");
      const foundMemory = memories.find((memory) => memory.name === memoryName);
      if (foundMemory) {
        setTimeout(() => {
          setIsVisible(true);
          window.history.replaceState(null, "", window.location.origin);
          setSelected(foundMemory);
        }, 0);
      }
    }
  }, []);

  return (
    <>
      <div className="w-full lg:container px-6 mx-auto" style={{ background: '#161819', minHeight: '100vh' }}>
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-12 mb-4 text-white px-4 md:px-6" style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif', color: '#E82063' }}>
          নিখোঁজ শিশুদের তালিকা

        </h1>
      <p className="text-base max-w-xl mx-auto text-center mb-6 text-white px-4 md:px-12" style={{ fontFamily: 'CustomFont2, Arial, Helvetica, sans-serif',  }}>
					চলুন, আমরা সবাই একসঙ্গে কাজ করি যেসব শিশু এখনো নিখোঁজ রয়েছে, তাদের নিরাপদে ঘরে ফিরিয়ে আনার জন্য।

					</p>
       
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-4">
          {memories.map((memory, idx) => (
            <Memory
              key={idx}
              memory={memory}
              handleOpen={() => {
                setIsVisible(true);
                setSelected(memory);
              }}
            />
          ))}
        </div>
      </div>
      <MemoriesModal
        selected={selected}
        isVisible={isVisible}
        handleClose={() => {
          setIsVisible(false);
          setSelected(undefined);
        }}
      />
    </>
  );
}
