import React from "react";
import { StoreButton } from "../common/Button";
import styles from "../../styles/home/PortfolioSection.module.css";

const PortfolioSection = () => {
  const AppleIcon = "/assets/images/home/appleIcon.svg";
  const PlaystoreIcon = "/assets/images/home/playstoreIcon.svg";

  return (
    <>
      <section className={`bg-transparent ${styles.mainDiv}`}>
        <div className={`row text-white ${styles.title}`}>
          <div className={`col-sm-12 col-md-12 col-lg-6 align-items-center justify-content-center" ${styles.leftDiv}`}>
            <h1 className={`fw-bolder py-2 ${styles.head}`}>
              Start building your portfolio with just $1
            </h1>
            <p className={`fw-normal py-3 ${styles.subhead}`}>
              Over 100,000+ Crypto to choose from, Download the app now!
            </p>
            <p className={`py-3 ${styles.MobileParagraph}`}>
            Buy BTC, ETH, Metric, & 100,000+ cripto Assets across Multiple Chains with Ease
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
          <div className={`col-sm-12 col-md-12 col-lg-6 p-3 justify-content-center align-item-center ${styles.rightDiv}`}>
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

export default PortfolioSection;
