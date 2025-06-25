import { useState } from "react";
import "./App.css";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin({ ScrollTrigger, SplitText });
function App() {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-3xl text-indigo-300">Hello, GSAP</h1>
    </div>
  );
}

export default App;
