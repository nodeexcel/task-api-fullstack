import styles from "@/styles/home/VideoSection.module.css";

const VideoSection = () => {
  return (
    <>
      <section className={`pt-5 ${styles.videoDiv}`} >
        <div className={styles.videoHeading}>Better than Banks</div>
        <div className={styles.videoSubHeading}>
          Watch our quick intro video to learn more
        </div>
        <div style={{ position: "relative" }}>
          <img
            src={"/assets/images/home/video.png"}
            alt="video"
            className={styles.video}
          />
          <div className="btn_ripple"
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
          >
            <img
              src={"/assets/images/home/playBtn2.svg"}
              height={60}
              width={60}
              alt="playBtn"
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
