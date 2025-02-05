import React from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Skills from "./_components/Skills";
import ProjectSection from "./_components/ProjectSection";
import Footer from "./_components/Footer";
import Achievement from "./_components/Achievement";
import AnimatedCursor from "react-animated-cursor";
const App: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 0, 102"
        outerAlpha={0.3}
        innerScale={1.2}
        outerScale={2.5}
        clickables={["a", "button", ".custom-class"]}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectSection />
      <Achievement />
      <Footer />
    </div>
  );
};

export default App;
