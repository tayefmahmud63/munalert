
import AnimatedGroupPreset from "./components/DeadImages";

import HeroSection from "./components/HeroSection";
import Missing from "./components/Missing";
import Footer from "./components/footer";
import Memories from "../src/components/Memories";
import Newsletter from "./components/newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedGroupPreset />

      <Memories />

      <Footer />
    </>
  );
}

