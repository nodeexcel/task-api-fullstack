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
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center flex-column">
            <h1 className={`fw-bolder ${styles.head}`}>
              Start building your portfolio with just $1
            </h1>
            <p className={`fs-3 fw-normal ${styles.subhead}`}>
              Over 100,000+ Crypto to choose from, Download the app now!
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
          <div className={`col-sm-12 col-md-12 col-lg-6 p-3 justify-content-center align-item-center ${styles.lastDiv}`}>
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
