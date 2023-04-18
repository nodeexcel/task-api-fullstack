import React from "react";
import styles from "@/styles/home/TransactionSection.module.css";
import { motion } from "framer-motion";

const TransactionSection = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <motion.div
          style={{ display: "inline-block", width: "100%", display: "flex", background: "transparent", marginBottom: 20 }}
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="/assets/images/home/spark.png"
            height={100}
            width={125}
            alt="thunderImg"
            className={styles.img}
          />
          <div className={styles.heading}>Faster</div>
        </motion.div>
        <motion.div
          style={{ display: "inline-block", width: "100%", display: "flex", background: "transparent", marginTop: "35rem" }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className={styles.transactionHeading}>Transactions</div>
        </motion.div>
        <div style={{ position: "absolute", top: 70, left: "50%" }}>
          <div className={styles.phoneImg}>
            <img
              src="/assets/images/home/createWallet.gif"
              alt="phone"
              className={styles.mobile}
            />
          </div>
        </div>
      </div>

    </>

  )
};

export default TransactionSection;
