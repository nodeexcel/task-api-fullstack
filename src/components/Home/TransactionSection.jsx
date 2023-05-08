import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styles from "./DesignSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const Section = styles.section;
const TextContainer = styles.textContainer;
const TextContainer2 = styles.textContainer2;
const FasterText = styles.fasterText;

export default function DesignSection() {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=100 top",
          end: "bottom top",
          scrub: 0.1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "30%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-30%" }, "key1");

    let Elem = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top+=140px",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (t1) t1.kill();
      if (trigger) trigger.kill();
    };
  }, []);
  return (
    <>
      <section ref={container} className={Section}>
        <div ref={textOne} className={TextContainer}>
          <div className={`d-flex justify-content-center align-items-center ${styles.fasterDiv}`}>
            <img
              src="/assets/images/home/spark.png"
              alt="thunderImg"
              className={styles.thunderImg}
            />
            <h1 className={FasterText}>Faster</h1>
          </div>
        </div>
        <h1 ref={textTwo} className={TextContainer2}>
          Transactions
        </h1>
        <img
          src="/assets/images/home/createWallet.gif"
          alt="phone"
          style={{
            position: "absolute",
            zIndex: 1,
          }}
          className={styles.mobile}
        />
      </section>
      <div
        className={styles.transDiv}
        // style={{ height: "100vh", width: "100vw", background: "transparent", position: "relative" }}
        ref={sectionRef}
      />
    </>
  );
}
