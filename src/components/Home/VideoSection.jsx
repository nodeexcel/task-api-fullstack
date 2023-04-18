import React from 'react'
import styles from '@/styles/home/VideoSection.module.css'
import AnnoucementSection from './AnnoucementSection'

const VideoSection = () => {
  return (
    <>
    <section className={`pt-5 ${styles.videoDiv}`}>
    <AnnoucementSection/>
      <div className={styles.videoHeading}>Better than Banks</div>
      <div className={styles.videoSubHeading}>Watch our quick intro video to learn more</div>
      <img src={"/assets/images/home/video.png"}  alt='video' className={styles.video} />
      <img src={"/assets/images/home/playBtn2.svg"} height={60} width={60} alt='playBtn' className={styles.playVideo}/>
    </section>
    </>
  )
}

export default VideoSection
