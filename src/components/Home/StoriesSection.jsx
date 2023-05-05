import React from "react";
import Card from "../common/Card";
import { GradiantButton } from "../common/Button";
import styles from "../../styles/home/StoriesSection.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter()
  return (
    <section className="bg-black text-white" style={{ paddingTop: 40 }}>
      <div className="container my-3">
        <div className={` ${styles.maindev}`}>
          <div className="row d-flex justify-content-between align-items-center">
            <div className={`col-md-8 col-sm-12 ${styles.LeftDiv}`}>
              <h1 className={`display-4 my-3 ${styles.StoriesSections}`}>
                Our Stories
              </h1>
              <p className={styles.description}>
                The new culture of money is making headlines. Check out our
                latest blog posts to find out more.
              </p>
            </div>
            <div className="col-md-1 col-sm-0"></div>
            <div
              className={`col-md-3 col-sm-0 d-flex justify-content-center ${styles.RightDiv}`}
            >
              <GradiantButton text={"More stories"} className="btn" onClick={() =>{
                location.href="/blog"
              }} />
            </div>

          </div>
        </div>

        <div className={`${styles.cardSection} container mx-auto`}>
          {storyData.map((data, i) => {
            return (
              <Card
                key={i}
                text={data.text}
                src={data.src}
                subText={data.subText}
                className={styles.cardStory}
                imgContainerStyle
              />
            );
          })}
        </div>
      </div>
      <div className={`d-flex justify-content-center align-items-center `}>
        <div className={`${styles.moreStoriesText}`}>
          More Stories
          <hr className={styles.storiesLine} />
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
