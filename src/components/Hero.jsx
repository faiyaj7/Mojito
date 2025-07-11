import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
	
  // const startValue = isMobile ? "top 50%" : "center bottom";
  // const endValue = isMobile ? "120% top" : "bottom 60%";
  
  useGSAP(() => {
    // Text Timeline
    const textTimeline = gsap.timeline({ repeatDelay: 0.125 });
    // Right and left leaf move in oppsite direction based on scroll
    const leafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";
    
  
    // Video Timeline
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });
    const heroSplit = new SplitText(".title", { type: "chars , words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // animation based on characters
    textTimeline.from(heroSplit.chars, {
      yPercent: 100,
      duration: 0.8,
      ease: "expo.inOut",
      stagger: 0.125,
    });
    //animation based on lines
    textTimeline.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      stagger: 0.125,
    });

    // animation of right and left leaves based on scroll
    leafTimeline
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    // animation for the video
    videoRef.current.onloadedmetadata = () => {
      videoTimeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  });
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="text-9xl title uppercase ">Mojito</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
