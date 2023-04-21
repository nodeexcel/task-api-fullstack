import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "@/styles/home/Backed.module.css"

const SlotMachine = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 10);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const logos = [
    "/assets/images/home/polygon.svg",
    "/assets/images/home/biconomy.svg",
    "/assets/images/home/polygon.svg",
    "/assets/images/home/biconomy.svg",
    "/assets/images/home/polygon.svg",
    "/assets/images/home/biconomy.svg",
    "/assets/images/home/polygon.svg",
    "/assets/images/home/biconomy.svg",
    "/assets/images/home/polygon.svg",
    "/assets/images/home/biconomy.svg",
    "/assets/images/home/polygon.svg",
    "/assets/images/home/biconomy.svg",
    "/assets/images/home/polygon.svg",
    "/assets/images/home/biconomy.svg",
    "/assets/images/home/polygon.svg",
    "/assets/images/home/biconomy.svg",
    "/assets/images/home/polygon.svg",
    "/assets/images/home/biconomy.svg",

  ];

  return (
    <div className="col-lg-6 col-md-12 align-items-md-center justify-content-md-center pt-md-0 d-flex justify-content-start p-5 p-sm-0 position-relative" style={{ flexDirection: "column", alignItems: "center", height: 500, overflow: "hidden", position: "relative" }}>
      <div className="position-absolute" style={{
        content: '',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
        zIndex: 3
      }}></div>
      <div className="d-flex flex-column py-5" style={{ background: "transparent", padding: 14 }}>
        {[...new Array(10)].map((img, index) =>
          <motion.div
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "transparent", padding: 14 }}
            key={index}
            animate={{ y: ["0%", "-100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <img src="/assets/images/home/polygon.svg" className={styles.logoImg} alt="polygon" style={{ height: index === 0 ? 80 : 60, width: index === 0 ? 80 : 60 }} />
            <img src="/assets/images/home/biconomy.svg" className={styles.logoImg} alt="biconomy" style={{ height: 60, width: 60 }} />
          </motion.div>
        )}
      </div>
      <div className="position-absolute" style={{
        content: '',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
      }}>
      </div>
    </div>

  );
};

export default SlotMachine;
