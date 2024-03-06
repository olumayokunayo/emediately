import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Qualities from "./components/Qualities";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
import Heroo from "./components/Heroo";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero_pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          {/* <Heroo /> */}
          <Hero />
        </div>
        <Services />
        <Qualities />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
