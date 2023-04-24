import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ChatPaySection from "./ChatPaySection";
import TransactionSection from "./TransactionSection";

gsap.registerPlugin(ScrollTrigger);

const SecondFold = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
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
