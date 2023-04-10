import React from "react";
import styles from "@/styles/home/TokenSection.module.css";

const TokenSection = () => {

  return (
    <div className={styles.mainDiv}>
      <div className="container">
        <div className={`row d-flex py-3 text-white  ${styles.firstcolumn}`}>
          <div className={`col-sm-6 ${styles.Column}`}>
            <header className="container pt-5">
              <h1 className={`display-3 fw-bold ${styles.text1}`}>
                Take control of your assets
              </h1>
              <p className={` ${styles.paragrapgh}`}>
                Unlike centralized exchanges, Plena ensures that only users have
                full control over their crypto assets.
              </p>
            </header>
          </div>
          <div className="col-sm-6">
            <img
              src="assets/images/home/logo.png"
              alt="take control image"
              className={`py-auto ms-4 ${styles.image1}`}
            />
          </div>
        </div>
        <div className="row d-flex text-white py-3">
          <div className="col-sm-6">
            <img
              src="/assets/images/home/lock.png"
              alt="social login image"
              className={`py-auto ms-4 ${styles.image2}`}
            />
          </div>
          <div className="col-sm-6">
            <header className="container pt-5">
              <h1 className={`display-3 fw-bold ${styles.text2}`}>
                Social Login & Easy recovery
              </h1>
              <p className={` ${styles.paragrapgh}`}>
                Sign in quickly and effortlessly using social media accounts,
                and retrieve your account even if your device is lost with MPC
                (Multi-Party Computation) security.
              </p>
            </header>
          </div>
        </div>
        <div className={`{row d-flex  text-white py-3 ${styles.secColumn}`}>
          <div className="col-sm-6 ">
            <header className="container pt-5">
              <h1 className={`display-3 fw-bold ${styles.text3}`}>100K+ Tokens</h1>
              <p className={` ${styles.paragrapgh}`}>
                Store, Send, Receive and Trade over 100,000 crypto across
                Multiple Chains at Best Rates
              </p>
            </header>
          </div>
          <div className="col-sm-6">
            <img
              src="/assets/images/home/coins.png"
              alt="token image"
              className={`py-auto ms-4 ${styles.image3}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSection;
