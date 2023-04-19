import React from "react";
import styles from "@/styles/home/TransactionSection.module.css";
import { useScroll, useTransform, motion } from "framer-motion";

const TransactionSection = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 4000]);

  return (
    <>
      <div style={{ position: "relative", height: "60rem" }}>
        <motion.h1 className={styles.heading} style={{ x }}>
          <img
            src="/assets/images/home/spark.png"
            height={100}
            width={125}
            alt="thunderImg"
            className={styles.img}
          />
          Faster</motion.h1>
        <div style={{ position: "absolute", top: 70, left: "50%" }}>
          <div className={styles.phoneImg}>
            <img
              src="/assets/images/home/createWallet.gif"
              alt="phone"
              className={styles.mobile}
            />
          </div>
        </div>
        <motion.h1 className={styles.transactionHeading} style={{ x }}>Transactions</motion.h1>
      </div>
    </>
  )
};

export default TransactionSection;
