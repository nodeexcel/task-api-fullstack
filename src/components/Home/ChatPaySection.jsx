import React from "react";
import styles from "@/styles/home/ChatPaySection.module.css";
import Button from "../common/Button";

const ChatPaySection = () => {
  return (
    <div className={`row ${styles.chatDiv}`}>
      <div className={`col-6 ${styles.leftDiv}`}>
        <div className={styles.heading}>Worlds first crypto</div>
        <div className={styles.subHeading}>
          Chat’n’Pay
          <img
            src={"/assets/images/home/emoji.svg"}
            width={60}
            height={60}
            alt="emoji"
          />
        </div>
        <div className={styles.text}>
          The new culture of money is making headlines check out our latest blog
        </div>
         <Button buttonName="black" text="Get the App" />
      </div>

      <div className={`col-6 ${styles.rightDiv}`}>
        <img
          src={"/assets/images/home/chatnPay.svg"}
        //   width={600}
        //   height={600}
          alt="chatpay"
          className={styles.mobile}
        />
      </div>
    </div>
  );
};

export default ChatPaySection;
