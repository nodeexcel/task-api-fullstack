import React from "react";
import Card from "../common/Card";
import Button from "../common/Button";
import styles from "../../styles/home/StoriesSection.module.css";

const storyData = [
  {
    text: "Celsius will compensate consumers with a new token",
    subText:
      "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...",
    src: "/assets/images/home/StoriesImg1.png",
  },
  {
    text: "Celsius will compensate consumers with a new token",
    subText:
      "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...",
    src: "/assets/images/home/StoriesImg2.png",
  },
  {
    text: "Celsius will compensate consumers with a new token",
    subText:
      "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...",
    src: "/assets/images/home/StoriesImg3.png",
  },
];

const StoriesSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="container my-3">
        <div className={`row ${styles.maindev}`}>
          <div className="container">
            <div className={`col-12 col-sm-7 ${styles.LeftDiv}`}>
              <h1 className={`display-4 my-3 ${styles.StoriesSections}`}>
                Our Stories
              </h1>
              <p className={styles.description}>
                The new culture of money is making headlines. Check out our
                latest blog posts to find out more.
              </p>
            </div>
            <div className={`col-12 col-sm-5 ${styles.RightDiv}`}>
              <Button text={"More stories"} className={styles.button} />
            </div>
          </div>
        </div>
      </div>
      <div
        id={styles.bbb}
        className={` ${styles.cardSection} d-flex justify-content-center align-items-center overflow-scroll w-full ${styles.cardStory}`}
      >
        {storyData.map((data, i) => {
          return (
            <Card
              key={i}
              src={data.src}
              text={data.text}
              subText={data.subText}
              className={i == -1 ? styles.cardStory : styles.cardSize}
            />
          );
        })}
      </div>
    </section>
  );
};

export default StoriesSection;
