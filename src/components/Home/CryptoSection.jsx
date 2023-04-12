import React from "react";
import { StoreButton } from "../common/Button";
import styles from "@/styles/home/CryptoSection.module.css";

const CryptoSection = () => {
  const AppleIcon = "/assets/images/home/appleIcon.svg";
  const PlaystoreIcon = "/assets/images/home/playstoreIcon.svg";
  return (
    <div className={"container-fluid " + styles.cryptoDiv}>
      <div className={`row  `}>
        <div
          className={`col-sm-12 col-md-6  d-flex justify-content-center align-items-start flex-column `}
        >
          <div className="container p-3">
            <h1 className={`fw-bold pb-3 ${styles.heading}`}>
              Invest in Crypto, <br /> Starting with Just $1
            </h1>
            <p className={styles.paragrapgh}>
              Buy BTC, ETH, Matic, & 100,000+ crypto Assets across Multiple
              Chains with Ease
            </p>
             <img src={"/assets/images/home/Iphone.png"} 
             className={styles.Iphone} />
         

            <div className={`d-flex ${styles.Appstore}`}>
              <StoreButton subText={"App Store"} src={AppleIcon} imgStyle={styles.imgStyle}/>
              
              <StoreButton subText={"Play Store"} src={PlaystoreIcon} />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-3 d-flex justify-content-center align-items-center ">
          <img className={styles.wallet} src={"/assets/images/home/wallet.png"} />
        </div>
      </div>
    </div>
  );
};

export default CryptoSection;
