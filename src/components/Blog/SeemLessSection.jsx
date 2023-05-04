import React from "react";
import { StoreButton } from "../common/Button";
import styles from "../../styles/blog/SeemLessSection.module.css";

const SeemLessSection = ({ style }) => {
  const AppleIcon = "/assets/images/home/appleIcon.svg";
  const PlaystoreIcon = "/assets/images/home/playstoreIcon.svg";

  return (
    <>
      <section className={`bg-transparent ${styles.mainDiv}`} style={style}>
        <div className={`row text-white container mx-auto d-flex ${styles.title}`}>
          <div
            className={`col-sm-12 col-md-12 col-lg-6 align-items-center justify-content-center" ${styles.leftDiv}`}
          >
            <h1 className={`fw-bolder py-2 ${styles.head}`}>
              Experience fast & seamless transactions
            </h1>
            <p className={`fw-normal lh-base py-3 ${styles.subhead}`}>
              Multi-chain wallet, NFTs, Staking, Predictions and a whole lot more, all in just one app
            </p>
            <img
              src={"/assets/images/home/Iphone.png"}
              className={styles.topImage}
              alt=""
            />

            <div className={styles.storebuttons}>
              <StoreButton subText={"App Store"} src={AppleIcon} />
              <StoreButton subText={"Play Store"} src={PlaystoreIcon} />
            </div>
          </div>
          <div
            className={`col-sm-12 col-md-12 col-lg-6 p-3 justify-content-center align-item-center ${styles.rightDiv}`}
          >
            <img
              src={"/assets/images/home/portfolio.png"}
              className={styles.bottomImage}
              alt="bottom image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SeemLessSection;
