import { useEffect } from "react";
import Lenis from "lenis";
import { PixelCursor } from "./components/ui/PixelCursor";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { HowTo } from "./components/sections/HowTo";
import { Rounds } from "./components/sections/Rounds";
import { Prizes } from "./components/sections/Prizes";
import { Sponsors } from "./components/sections/Sponsors";
import { Crew } from "./components/sections/Crew";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // lenis.destroy()
    };
  }, []);

  return (
    <div className="bg-mc-night min-h-screen text-white selection:bg-mc-diamond selection:text-black font-body overflow-x-hidden cursor-none">
      <PixelCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <HowTo />
        <Rounds />
        <Prizes />
        <Sponsors />
        <Crew />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App;
