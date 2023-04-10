import React from 'react'
import styles from "@/styles/home/OwnBank.module.css"
import Button from '../common/Button'

const OwnBank = () => {
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
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/assets/images/home/gradientBg.svg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor:"black"
        }}
        className={styles.mainDiv}
      >
        <div className="container">
        <div className="row">
          <div className={`col-sm-6 ${styles.leftDiv}`}>
            <div className={styles.heading}>
              Be Your
              <br /> Own Bank
            </div>
            <img
              src={"/assets/images/home/curl.svg"}
              height={80}
              width={250}
              alt="curl"
              className={styles.curl}
            />
            <div className={` ${styles.subHeading}`}>
              Introducing Plena 2.0, Self-Custodial Smart Wallet with EIP-4337:
              Account Abstraction{" "}
            </div>
            <div className={styles.btnDiv}>
              <Button text={"Get the App"} />
              <div>
                <img
                  src={"/assets/images/home/playBtn1.svg"}
                  height={40}
                  width={40}
                  alt="playbtn"
                />
                Watch Intro
              </div>
            </div>
          </div>
          <div className={`col-sm-6 ${styles.rightDiv}`}>
            <img
              src={"/assets/images/home/Iphone.png"}
              width={1000}
              height={700}
              alt="phone"
            />
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-evenly align-item-center">
            {bankData?.map((data,i) => {
              return (
                <div className="text-white" key={i}>
                  <div className={styles.bankNumber}>{data.number}</div>
                  <p className={`px-1 ${styles.userText}`}> {data.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default OwnBank;
