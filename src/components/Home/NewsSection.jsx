import { motion } from "framer-motion";
import styles from "../../styles/home/NewsSection.module.css";
import React, { useState } from "react";

const newsData = [
  {
    src: "/assets/images/home/googleIcon.svg",
    height: 40,
    width: 200,
  },
  {
    src: "/assets/images/home/linkedInIcon.svg",
    height: 35,
    width: 200,
  },
  {
    src: "/assets/images/home/redditIcon.svg",
    height: 40,
    width: 200,
  },
  {
    src: "/assets/images/home/facebookIcon.svg",
    height: 30,
    width: 200,
  },
  {
    src: "/assets/images/home/googleIcon.svg",
    height: 40,
    width: 200,
  },
  {
    src: "/assets/images/home/linkedInIcon.svg",
    height: 35,
    width: 200,
  },
  {
    src: "/assets/images/home/redditIcon.svg",
    height: 40,
    width: 200,
  },
  {
    src: "/assets/images/home/facebookIcon.svg",
    height: 30,
    width: 200,
  },
];

const newsMobileData = [
  {
    src: "/assets/images/home/googleIcon.svg",
    height: 35,
    width: 200,
  },
  {
    src: "/assets/images/home/linkedInIcon.svg",
    height: 30,
    width: 200,
  },
  {
    src: "/assets/images/home/redditIcon.svg",
    height: 35,
    width: 200,
  },
  {
    src: "/assets/images/home/facebookIcon.svg",
    height: 25,
    width: 200,
  },
  {
    src: "/assets/images/home/googleIcon.svg",
    height: 35,
    width: 200,
  },
];

const LeftScroll = () => {
  return (
    <motion.div
      className={styles.newsDiv}
      animate={{ x: ["0%", "-100%"] }}
      transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
    >
      {newsData.map((img, i) => (
        <img key={i} src={img.src} width={img.width} height={img.height} />
      ))}
    </motion.div>
  );
};

const RightScroll = () => {
  return (
    <motion.div
      className={styles.newsDiv}
      animate={{ x: ["-100%", "0%"] }}
      transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
    >
      {newsData.map((img, index) => (
        <img key={index} src={img.src} width={img.width} height={img.height} />
      ))}
    </motion.div>
  );
};

const LeftPanal = ({ less }) => {
  return (
    <div className="d-flex flex-column " >
      {newsMobileData
        .filter((img, index) => index < less)
        .map((img, index) => (
          <img
            src={img.src}
            width={img.width}
            height={img.height}
            style={{ marginBottom: 24 }}
          />
        ))}
    </div>
  );
};

const RightPanal = ({ less }) => {
  return (
    <div className="d-flex justify-content-between flex-column">
      {newsMobileData
        .filter((img, index) => index < less)
        .reverse()
        .map((img, index) => (
          <img
            src={img.src}
            width={img.width}
            height={img.height}
            style={{ marginBottom: 24 }}
          />
        ))}
    </div>
  );
};

const NewsSection = () => {
  const [less, setLess] = useState(3);

  const loadMore = () => {
    console.log("hello");
    if (less < newsMobileData.length) {
      setLess(less + 2);
    }
    else {
      setLess(3)
    }
  };
  return (
    <div className={styles.mainDiv}>
      <h1
        className={`d-flex justify-content-center my-4 pt-5 pb-4 ${styles.heading}`}
      >
        Plena in the News
      </h1>
      <div className={`pb-5 ${styles.desktopIcons}`}>
        <div className="d-flex ">
          <LeftScroll />
          <LeftScroll />
        </div>
        <div className="d-flex">
          <RightScroll />
          <RightScroll />
        </div>
      </div>
      <div className={styles.mobileIcons}>
        <div className={`${styles.mobileIconsBox} d-flex justify-content-center`}
        >
          <LeftPanal less={less} />
          <RightPanal less={less} />
        </div>
      </div>
      <div className={styles.arrow} onClick={() => loadMore()}>
        <p className={styles.text}>
          {less !== 3 ? "See less" : "See more"}
        </p>
        <div className="d-flex justify-content-center mb-4">
          {less !== 3 ?
            <img src="/assets/images/home/upIcon.png" />
            :
            <img src="/assets/images/home/downIcon.png" />
          }
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
