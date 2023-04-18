import React from "react";
import styles from "@/styles/home/FeaturesSection.module.css";

const RightInner = () => (
  <div className="row justify-content-evenly">
    <div className={`col-5 p-5 ${styles.Lending}`}>
      <div className="d-flex flex-col-reverse">
        <img
          src={"/assets/images/home/lending.png"}
          width={200}
          height={200}
          alt="lending"
          className={styles.images}
        />
      </div>
      <div>
        <div className={styles.Rightheading}>Lending Protocol</div>
        <div className={styles.RightsubHeading}>
          Earn Interest with Top Protocols in the Industry with Just a Tap!
        </div>
      </div>
    </div>
    <div className={`col-5 p-5 ${styles.Lending}`}>
      <img
        src={"/assets/images/home/graph.png"}
        width={200}
        height={200}
        alt="stake"
      />
      <div className={styles.Rightheading}>Stake your assets</div>
      <div className={styles.RightsubHeading}>
        Earn Interest with Top Protocols in the Industry with Just a Tap!
      </div>
    </div>
  </div>
);

const RightSide = () => (
  <div className="col-8">
    <div className="row">
      <div className="col-12 mb-5">
        <div className="container">
          <RightInner />
        </div>
      </div>
      <div className="col"></div>
      <div className={`col-11 d-flex ${styles.RightSideLending}`}>
        <div>
          <div className={styles.Rightheading}>Liquidity Pools</div>
          <div className={styles.RightsubHeading}>
            Enjoy the best exchange rates across all decentralized exchanges in
            one place!
          </div>
        </div>
        <img
          src={"/assets/images/home/troly.png"}
          width={250}
          height={250}
          alt="pools"
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
        width={300}
        height={300}
        alt="swap"
        className={styles.LeftImage}
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
      <div className={styles.featureHeading}>
        Features Like Never <br /> Seen Before
      </div>
      <div className="row">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
};
export default FeaturesSection;
