import { useState } from "react";
import "./App.css";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
gsap.registerPlugin( ScrollTrigger, SplitText );
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-screen">sohint</div>
    </main>
  );
}

export default App;
