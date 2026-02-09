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
          {/* Header */}
          <div className="sticky z-10 top-0 left-0 right-0 p-6 md:p-9 flex justify-end gap-3.5 bg-[#212121]/80 backdrop-blur-sm">
            {/* Audio button removed */}
            <button
              onClick={handleClose}
              className="bg-[#ffffffcc] hover:bg-[#C8E4C2] active:bg-[#C8E4C2] rounded-full text-black cursor-pointer p-3 transition-all"
            >
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
                <path d="M11.25 4.75L4.75 11.25M4.75 4.75L11.25 11.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div
            className="w-full px-6 lg:container mx-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Mobile Header */}
            <div className="md:hidden mt-6">
              <h2 className="text-2xl font-bethany mb-1 text-white">{selected.name}</h2>
              <p className="mb-2 text-white text-sm">{selected.dates}</p>
              {/* Audio button removed */}
            </div>

            {/* Image + Content */}
            <div className="flex flex-col md:flex-row items-center px-48 py-24 justify-center gap-2 md:gap-2  text-center">
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-64 lg:w-72 sticky md:relative flex justify-center">
                <div className="relative overflow-hidden -translate-y-6 md:-translate-y-0 flex justify-center">
                  <img
                    alt={selected.name}
                    src={selected.image_src.large}
                    loading="eager"
                    className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover rounded-xl shadow-lg mx-auto"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-6 md:pt-0 xl:ml-8 flex flex-col items-start justify-start text-left">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
