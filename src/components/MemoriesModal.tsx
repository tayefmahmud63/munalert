import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import type { MemoryType } from "./Memory";






type MemoriesModalProps = {
  isVisible: boolean;
  selected: MemoryType | undefined;
  handleClose: () => void;
  hidePosterDownload?: boolean;
};

export default function MemoriesModal({
  isVisible,
  selected,
  handleClose,
  hidePosterDownload = false,
}: MemoriesModalProps) {
  const [copied, setCopied] = useState(false);
  const firstName = selected?.name.split(" ").at(0);

  const story = selected?.story;
  const match = story?.match(/\n\n\*(–.*?)\*$/);
  let mainText = story;
  let authorText = null;

  if (match) {
    authorText = match[1];
    mainText = story?.replace(/\n\n\*(–.*?)\*$/, "");
  }

  const handleShare = async () => {
    if (!selected?.name) return;
    const shareLink = `${window.location.origin}/#${selected.name.replace(/\s+/g, "-")}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: selected.name,
          text: selected.story,
          url: shareLink,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && selected && (
        <motion.div
          className="fixed inset-0 bg-[#212121] overflow-y-auto z-[100]"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={handleClose}
        >
          {/* Floating Close Button */}
          <button
            onClick={handleClose}
            className="fixed top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-[110] bg-white hover:bg-[#C8E4C2] active:bg-[#C8E4C2] rounded-full text-black cursor-pointer p-2 sm:p-3 shadow-lg transition-all"
            aria-label="Close modal"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>


          {/* Content */}
          <div
            className="w-full px-1 xs:px-2 sm:px-4 md:px-6 max-w-full lg:container mx-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Mobile Header */}
            <div className="md:hidden mt-6">
              <h2 className="text-2xl font-bethany mb-1 text-white">{selected.name}</h2>
              <p className="mb-2 text-white text-sm">{selected.dates}</p>
              {/* Audio button removed */}
            </div>

            {/* Image + Content */}
            <div className="flex flex-col md:flex-row items-center px-0 md:px-6 lg:px-24 py-4 md:py-16 justify-center gap-4 md:gap-6 text-center w-full">
              {/* Image */}
              {selected.image_src?.large && (
                <div className="flex-shrink-0 w-full max-w-[320px] sm:max-w-[400px] md:w-64 lg:w-72 sticky md:relative flex justify-center mx-auto">
                  <div className="relative overflow-hidden -translate-y-2 md:-translate-y-0 flex justify-center">
                    <img
                      alt={selected.name}
                      src={selected.image_src.large}
                      loading="eager"
                      className="w-full h-40 xs:h-48 sm:h-60 md:h-[320px] lg:h-[360px] object-cover rounded-xl shadow-lg mx-auto"
                    />
                  </div>
                </div>
              )}



              {/* Content */}
              <div className="flex-1 pt-4 md:pt-0 xl:ml-8 flex flex-col items-start justify-start text-left w-full max-w-full">
                <h2 className="text-5xl font-bethany mb-4 text-white hidden md:block">{selected.name}</h2>
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ color: "#E01075" }}
                  className="font-bold text-xl mb-4 cursor-pointer hidden md:block"
                >
                  {selected.seat}
                </motion.p>
                <p className="mb-6 text-white text-lg hidden md:block">{selected.dates}</p>
                <p className="whitespace-pre-line text-white " style={{ fontFamily: 'CustomFont2, Arial, Helvetica, sans-serif' }}>{mainText}</p>
                {authorText && <p className="italic text-sm opacity-70 mt-4 text-white">{authorText}</p>}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 items-start justify-start">
                  {!hidePosterDownload && (selected.posterLink ? (
                    <a
                      href={selected.posterLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-full cursor-pointer px-6 py-3 h-12 text-xs text-[#E01075] font-medium flex items-center gap-2 hover:bg-gray-100 transition min-w-[160px] justify-center"
                    >
                      <p className="-mb-1">পোস্টের ডাউনলোড করুন </p>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="bg-white rounded-full cursor-not-allowed px-6 py-3 h-12 text-xs text-[#E01075] font-medium flex items-center gap-2 opacity-50 min-w-[160px] justify-center"
                    >
                      <p className="-mb-1">পোস্টের ডাউনলোড করুন </p>
                    </button>
                  ))}
                  <button
                    onClick={handleShare}
                    className="bg-[#E01075] rounded-full cursor-pointer px-6 py-3 h-12 transition-all uppercase text-xs text-white font-medium flex items-center gap-2 min-w-[160px] justify-center"
                  >
                    <p className="-mb-1">শেয়ার করুন</p>
                  </button>
                  {selected.videoLink && (
                    <a
                      href={selected.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF0000] rounded-full cursor-pointer px-6 py-3 h-12 text-xs text-white font-medium flex items-center gap-2 hover:bg-[#cc0000] transition min-w-[160px] justify-center"
                      style={{ textTransform: 'uppercase' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.116C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.57A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.116C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.57a2.994 2.994 0 0 0 2.112-2.116C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      <span>ইউটিউব ভিডিও</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
            {/* 2x2 Image Grid */}
            {(selected.image1 || selected.image2 || selected.image3 || selected.image4) && (
              <div className="w-full flex justify-center items-center py-4 md:py-8">
                <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:gap-6 w-full max-w-[320px] sm:max-w-[400px] md:w-[700px] md:max-w-3xl lg:w-[900px]">
                  {selected.image1 && <img src={selected.image1} alt="image1" className="w-full h-24 xs:h-32 sm:h-44 md:h-80 object-cover rounded-xl shadow-lg" />}
                  {selected.image2 && <img src={selected.image2} alt="image2" className="w-full h-24 xs:h-32 sm:h-44 md:h-80 object-cover rounded-xl shadow-lg" />}
                  {selected.image3 && <img src={selected.image3} alt="image3" className="w-full h-24 xs:h-32 sm:h-44 md:h-80 object-cover rounded-xl shadow-lg" />}
                  {selected.image4 && <img src={selected.image4} alt="image4" className="w-full h-24 xs:h-32 sm:h-44 md:h-80 object-cover rounded-xl shadow-lg" />}
                </div>
              </div>
            )}
            {/* Video */}
            {selected.videoLink && (
              <div className="flex justify-center items-center w-full py-4 md:py-8">
                <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-2xl">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      src={selected.videoLink}
                      title=""
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}




          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
