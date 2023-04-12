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
    <div className="bg-black text-white">
      <div className="container my-5">
        <div className={`row ${styles.maindev}`}>
        {/* justify-content-center align-items-center */}
          <div className=" d-flex flex-column ">
            <h1 className={`display-4 fw-bold ${styles.StoriesSections}`}>
              Our Stories
            </h1>

            <p className={styles.description}>
              The new culture of money is making headlines.Check out our latest
              blog posts to find out more.
            </p>
            <Button text={"More stories"} style={{ color: "white", float:"right" }} />
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ paddingBottom: 100, paddingLeft: 25, paddingRight: 25 }}
      >
        {storyData.map((data) => {
          return (
           <div className="col-md-4 col-sm-12"> <Card text={data.text} src={data.src} subText={data.subText} style={{margin:"1rem"}}/></div>
          );
        })}
      </div>
    </div>
  );
};

export default StoriesSection;
