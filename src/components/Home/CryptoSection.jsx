import React from "react";
import { StoreButton } from "../common/Button";
import styles from "@/styles/home/CryptoSection.module.css";
import ResponsiveImage from "../common/ResponsiveImg";

const CryptoSection = () => {
  const AppleIcon = "/assets/images/home/appleIcon.svg";
  const PlaystoreIcon = "/assets/images/home/playstoreIcon.svg";
  return (
    <div className={"container-fluid " + styles.cryptoDiv}>
      <div className={`row  `}>
        <div
          className={`col-sm-12 col-md-6  d-flex justify-content-center align-items-start flex-column `}
        >
          <div className="container p-5">
            <h1>
              Invest in Crypto, <br /> Starting with Just $1
            </h1>
            <p>
              Buy BTC, ETH, Matic, & 100,000+ crypto Assets across Multiple
              Chains with Ease
            </p>
            <div className="d-flex">
              <StoreButton subText={"App Store"} src={AppleIcon} />
              <StoreButton subText={"Play Store"} src={PlaystoreIcon} />
            </div>
          </div>
        </div>
        <div className={`col-sm-12 col-md-6 d-flex justify-content-center align-items-center`}>
          {/* <img src={"/assets/images/home/crypto.svg"} width={800} height={800} alt='crypto' className='img-fluid' /> */}
          <ResponsiveImage
            desktopImage={"/assets/images/home/crypto.svg"}
            mobileImage={"/assets/images/home/phoneImg.svg"}
            
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoSection;
