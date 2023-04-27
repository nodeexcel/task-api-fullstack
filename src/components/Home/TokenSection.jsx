import React from "react";
import styles from "@/styles/home/TokenSection.module.css";
import Button from '../common/Button';

const TokenSection = () => {

  return (
    <section className={styles.mainDiv}>
      <div className={`${styles.tokenDiv} container`}>
        <div className={`row d-flex py-3 text-white  ${styles.firstcolumn}`}>
          <div className={`col-sm-6 ${styles.leftDiv}`}>
            <header className="container pt-5">
              <h1 className={styles.text1}>
                Take control of your assets
              </h1>
              <p className={styles.paragraph}>
                Unlike centralized exchanges, Plena ensures that only users have
                full control over their crypto assets.
              </p>
            </header>
          </div>
          <div className={`col-sm-6 ${styles.rightDiv}`}>
            <img
              src="assets/images/home/logo.png"
              alt="take control image"
              className={`py-auto ${styles.image1}`}
            />
          </div>
        </div>
        <div className={`row d-flex text-white ${styles.secondColumn}`}>
          <div className={`col-sm-6 ${styles.leftDiv2}`}>
            <img
              src="/assets/images/home/lock.png"
              alt="social login image"
              className={`py-auto ${styles.image2}`}
            />
          </div>
          <div className={`col-sm-6 ${styles.rightDiv2}`}>
            <header className="container pt-5">
              <h1 className={`display-3 fw-bold ${styles.text1}`}>
                Social Login & Easy recovery
              </h1>
              <p className={styles.paragraph}>
                Sign in quickly and effortlessly using social media accounts,
                and retrieve your account even if your device is lost with MPC
                (Multi-Party Computation) security.
              </p>
            </header>
          </div>
        </div>
        <div className={`{row d-flex text-white py-3 ${styles.ThirdColumn}`}>
        <div className={`col-sm-6 ${styles.leftDiv}`}>
            <header className="container pt-5">
              <h1 className={`display-3 fw-bold ${styles.text1}`}>100K+ Tokens</h1>
              <p className={styles.paragraph}>
                Store, Send, Receive and Trade over 100,000 crypto across
                Multiple Chains at Best Rates
              </p>
              <Button text="Get the App"/>
            </header>
          </div>
          <div className={`col-sm-6 ${styles.rightDiv}`}>
            <img
              src="/assets/images/home/coins.png"
              alt="token image"
              className={`py-auto ${styles.image1}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
