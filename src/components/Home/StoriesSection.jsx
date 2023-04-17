import React from "react";
import Card from "../common/Card";
import Button from "../common/Button";
import styles from "../../styles/home/StoriesSection.module.css";

const StoriesSection = () => {
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
        className="row"
        style={{ paddingBottom: 100, paddingLeft: 25, paddingRight: 25 }}
      >
        {storyData.map((data) => {
          return (
            <div className="col-lg-4 col-md-4">
              <Card
                text={data.text}
                src={data.src}
                subText={data.subText}
                style={{ margin: "1rem" }}
              />
            </div>
          );
        })}
        </div>
    </section>
  );
};

export default StoriesSection;
