import React from "react";
import styles from "@/styles/home/ChatPaySection.module.css";
import Button from "../common/Button";

const ChatPaySection = () => {
  return (
    <section className={`row ${styles.chatDiv}`}>
      <div className={`col-6 col-sm-6 ${styles.leftDiv}`}>
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

        <divm className={styles.btn}>
          <Button buttonName="black" text="Get the App" />
        </divm>
      </div>

      <div className={`col-6 col-sm-6 ${styles.rightDiv}`}>
        <img
          src={"/assets/images/home/chat.png"}
          alt="chatpay"
          className={styles.mobile}
        />
      </div>
    </section>
  );
};

export default ChatPaySection;
