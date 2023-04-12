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
              src="/assets/images/home/phone.png"
              alt="phone"
              className={styles.mobile}
            />
          </div>
        </div>
      </div>

    </>

  )
  // return (
  //   <div className={styles.transactionDiv}>
  //     {/* <div className={styles.textDiv}> */}
  //     {/* <div className={styles.fasterText}> */}

  //     {/* </div> */}
  //     {/* <div className={styles.phoneImg}>
  //         <img
  //           src="/assets/images/home/phone.png"
  //           alt="phone"
  //           className={styles.mobile}
  //         />
  //       </div> */}
  //     {/* </div> */}
  //     <motion.div
  //       style={{ display: "inline-block", width: "100%", display: "flex", background: "transparent", padding: 20 }}
  //       animate={{ x: ["-100%", "0%"] }}
  //       transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
  //     >
  //       <img
  //         src="/assets/images/home/spark.png"
  //         height={100}
  //         width={125}
  //         alt="thunderImg"
  //         className={styles.img}
  //       />
  //       <div className={styles.heading}>Faster</div>
  //     </motion.div>
  //     <motion.div
  //       style={{ display: "inline-block", width: "100%", display: "flex", background: "transparent", padding: 20 }}
  //       animate={{ x: ["0%", "-100%"] }}
  //       transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
  //     >
  //       <div className={styles.transactionHeading}>Transactions</div>
  //     </motion.div>
  //   </div>
  // );
};

export default TransactionSection;
