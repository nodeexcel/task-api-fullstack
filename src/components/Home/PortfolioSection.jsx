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
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center flex-column">
            <h1 className={`fs-1 fw-bolder ${styles.head}`}>
              Start building your portfolio with just $1
            </h1>
            <p className={`fs-3 fw-normal ${styles.subhead}`}>
              Over 100,000+ Crypto to choose from, Download the app now!
            </p>

            <img
              src={"/assets/images/home/Iphone.png"}
              className={styles.topImage}
              height={800}
              width={1000}
              alt=""
            />

            <div className={styles.storebuttons}>
              <StoreButton subText={"App Store"} src={AppleIcon} />
              <StoreButton subText={"Play Store"} src={PlaystoreIcon} />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 p-3 justify-content-center align-item-center">
            <img
              src={"/assets/images/home/portfolio.png"}
              className={styles.bottomImage}
            //   height={800}
            //   width={1000}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
