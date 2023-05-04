import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect } from "react";
import VideoSection from "./VideoSection";
import TokenSection from "./TokenSection";

gsap.registerPlugin(ScrollTrigger);

const FirstFold = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top+=30px",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          width: "100vw",
          position: "relative",
        }}
        ref={sectionRef}
      >
        <VideoSection />
      </div>
      <TokenSection />
    </>
  );
};

export default FirstFold;
