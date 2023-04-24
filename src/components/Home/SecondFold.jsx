import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect } from "react";
import VideoSection from "./VideoSection";
import TokenSection from "./TokenSection";
import ChatPaySection from "./ChatPaySection";
import TransactionSection from "./TransactionSection";

gsap.registerPlugin(ScrollTrigger);

const SecondFold = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // return;
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

//   return    <TransactionSection />

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
        <TransactionSection />
      </div>
      <ChatPaySection />
    </>
  );
};

export default SecondFold;
