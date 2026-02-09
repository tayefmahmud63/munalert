

import AnimatedGroupPreset from "./components/DeadImages";
import { PostersRow } from "./components/PostersRow";

import { PhotoGallery } from "@/components/ui/gallery";

import HeroSection from "./components/HeroSection";

import Footer from "./components/footer";
import Memories from "../src/components/Memories";
import Newsletter from "./components/newsletter";



export default function Home() {
  return (
    <>
      <HeroSection />
      <PostersRow />
      <AnimatedGroupPreset />
      <Memories />
      <Footer />
    </>
  );
}

