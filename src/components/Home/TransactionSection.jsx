import React from "react";
import styles from "@/styles/home/TransactionSection.module.css";

const TransactionSection = () => {
  return (
    <div className={styles.transactionDiv}>
      <div className={styles.textDiv}>
        <div className={styles.fasterText}>
          <img
            src="/assets/images/home/thunderImg.svg"
            height={100}
            width={125}
            alt="thunderImg"
            className={styles.img}
          />
          <div className={styles.heading}>Faster</div>
        </div>
        <div className={styles.phoneImg}>
          <img
            src="/assets/images/home/transactionPhone.svg"
            alt="phone"
            className={styles.mobile}
          />
        </div>
      </div>
      <div className={styles.transactionHeading}>Transactions</div>
    </div>
  );
};

export default TransactionSection;
