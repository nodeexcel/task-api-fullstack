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
      <div className="container my-5">
        <div className={`row ${styles.maindev}`}>
          <div className="col-lg-10 col-md-8 d-flex flex-column">
            <h1 className={`display-4 fw-bold my-3 ${styles.StoriesSections}`}>
              Our Stories
            </h1>
            <p className={styles.description}>
              The new culture of money is making headlines.Check out our latest
              blog posts to find out more.
            </p>
          </div>
         <div className="col-lg-2 col-md-4 d-md-flex justify-content-md-center align-items-md-center">
         <Button text={"More stories"} className={styles.button} />
         </div>
         </div>
        </div>
      <div
      id={styles.bbb}
        className={` ${styles.cardSection} d-flex justify-content-center align-items-center overflow-scroll w-full ${styles.cardStory}`}
        style={{minWidth:'100%'}}
      >
        {storyData.map((data , index) => {
          return (
              <Card
                text={data.text}
                src={data.src}
                subText={data.subText}
                className={index == 0 && styles.cardStory}
                style={{ margin: "1rem", minWidth:'200px' }}
              />
          );
        })}
        </div>
    </section>
  );
};

export default StoriesSection;
