import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect } from "react";
import VideoSection from "./VideoSection";
import TokenSection from "./TokenSection";

gsap.registerPlugin(ScrollTrigger);

const FirstFold = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top+=140px",
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
        <VideoSection/>
      </div>
      <TokenSection/>
     
     
    </>
  );
};

export default FirstFold;
