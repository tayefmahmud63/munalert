import { div } from "framer-motion/client";
import { memories } from "../../app/utils/data";
import { motion } from "framer-motion";

// MemoryType update: audio_src optional
export type MemoryType = (typeof memories)[0] & { audio_src?: string };

type MemoryProps = { memory: MemoryType; handleOpen: () => void };

export default function Memory({ handleOpen, memory }: MemoryProps) {
  return (

    <button onClick={handleOpen} className="cursor-pointer group">
      <div className="border-b border-gray-700">
        <div className="flex items-center gap-5">
          <div className="w-32  md:w-48">
            <div className="relative overflow-hidden">
              <img
                alt={memory.name}
                loading="lazy"
                className="rounded-xl w-auto h-48 object-cover"
                src={memory.image_src.small}
              />
              <div className="absolute inset-0 rounded-xl w-36 h-48 bg-[#E82063] bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center transition-all duration-500 z-30 opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold text-sm">{memory.seat}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-1">
            <div className="text-left">
              <h2 className="font-bethany text-white text-xl mb-1 ">
                {memory.name}
              </h2>


              <p className="text-lg uppercase text-[#a7a7a7]">{memory.seat}</p>
              <p className="text-xs uppercase pt-2 text-[#a7a7a7]">{memory.dates}</p>

            </div>
            <div className="">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#E82063"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
          </div>
        </div>
      </div>
    </button>
  );
}
