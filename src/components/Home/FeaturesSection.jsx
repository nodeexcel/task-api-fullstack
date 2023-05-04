import React from "react";
import styles from "@/styles/home/FeaturesSection.module.css";

const RightInner = () => (
  <div className="d-flex justify-content-between ">
    <div className={`${styles.Lending} me-4 w-50`}>
      <div className="d-flex flex-col-reverse">
        <img
          src={"/assets/images/home/lending.png"}
          height="auto"
          alt="lending"
          className={styles.lending}
        />
      </div>
      <div>
        <div className={styles.Rightheading}>Lending Protocol</div>
        <div className={styles.RightsubHeading}>
          Earn Interest with Top Protocols in the Industry with Just a Tap!
        </div>
      </div>
    </div>
    <div className={` ${styles.Lending} w-50`}>
      <img
        src={"/assets/images/home/graph.png"}
        height="auto"
        alt="stake"
        className={styles.stake}
      />
      <div className={styles.Rightheading}>Stake your assets</div>
      <div className={styles.RightsubHeading}>
        Earn Interest with Top Protocols in the Industry with Just a Tap!
      </div>
    </div>
  </div>

);

const RightSide = () => (
  <div className="col-7 m-auto">
    <div className="">
      <div className=" col-12 mb-4">
        <RightInner />
      </div>
      <div className={`col-12 d-flex ${styles.RightSideLending}`}>
        <div>
          <div className={styles.Liquidity}>Liquidity Pools</div>
          <div className={styles.RightsubHeading}>
            Enjoy the best exchange rates across all decentralized exchanges in
            one place!
          </div>
        </div>
        <img
          src={"/assets/images/home/troly.png"}
          alt="pools"
          className={styles.pools}
        />
      </div>
    </div>
  </div>
);

const LeftSide = () => (
  <div
    className={`col-4 align-items-center d-flex p-5 flex-column ${styles.Lending}`}
  >
    <div>
      <img
        src={"/assets/images/home/arrow.png"}
        alt="arrow"
        className={styles.arrow}
      />
      <div className={styles.heading}>Swap Crypto with ease</div>
      <div className={styles.RightsubHeading}>
        Swap smarter, not harder with Plena Finance - fast, safe, and
        competitive crypto swaps.
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section
      className={`text-white ${styles.featureDiv}`}
      id="feature"
    >
      <div className="container p-5">
        <div className={styles.featureHeading}>
          Features Like Never <br /> Seen Before
        </div>
        <div className="row col-12">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
