import { useState } from "react";
import "./App.css";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Footer />
    </main>
  );
}

export default App;
