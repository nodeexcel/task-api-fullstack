import React, { useEffect } from "react";
import styles from "@/styles/home/OwnBank.module.css";
import Button from "../common/Button";

const bankData = [
  {
    number: "140K+",
    text: "Users",
  },
  {
    number: "200K+",
    text: "Strong Community",
  },
  {
    number: "20M+",
    text: "Transactions",
  },
];

const OwnBank = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(/assets/images/home/gradientBg.svg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "black",
        }}
        className={`container ${styles.mainDiv}`}
        id="home"
      >
        <div className="container">
          <div className={`row ${styles.div}`}>
            <div
              className={`col-sm-12 col-md-12 col-lg-12 col-xl-6 col ${styles.leftDiv}`}
            >
              <div className={`col-12 ${styles.heading}`}>
                <h1 className={`display-1 ${styles.heading}`}>
                  {" "}
                  Be Your
                  <br /> Own Bank{" "}
                </h1>
              </div>
              <img
                src={"/assets/images/home/curl.svg"}
                alt="curl"
                className={` ${styles.curl}`}
              />
              <div className={styles.subHeading}>
                <p>
                  Introducing <span className={styles.strong}>Plena 2.0</span>,
                  Self-Custodial Smart Wallet with{" "}
                  <span className={styles.strong}>
                    EIP-4337: Account Abstraction
                  </span>
                </p>
              </div>
              <div className={styles.btnDiv}>
                <Button text={"Get the App"} className={styles["mainbtn"]} />
                <div className="d-flex align-items-center">
                  <div className="btn_ripple">
                    <img
                      src={"/assets/images/home/playBtn1.svg"}
                      height={40}
                      width={40}
                      alt="playbtn"
                    />
                  </div>
                  Watch Intro
                </div>
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-12 col-lg-12 col-xl-6 col d-sm-flex justify-content-sm-center align-item-center ${styles.rightDiv}`}
            >
              <img
                src={"/assets/images/home/Iphone.png"}
                alt="phone"
                className={styles.images}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="d-flex justify-content-evenly align-item-center">
                {bankData?.map((data, i) => {
                  return (
                    <div className={`text-white ${styles.main}`} key={i}>
                      <div className={styles.bankNumber}>{data.number}</div>
                      <p className={`px-1 ${styles.userText}`}> {data.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OwnBank;
