import Image from 'next/image'
import React from 'react'
import styles from '@/styles/home/VideoSection.module.css'

const VideoSection = () => {
  return (
    <div className={styles.videoDiv}>
      <div className={styles.videoHeading}>Better than Banks</div>
      <div className={styles.videoSubHeading}>Watch our quick intro video to learn more</div>
      <Image src={"/assets/images/home/videoImg.svg"} height={450} width={900} alt='video' className={styles.video} />
      <Image src={"/assets/images/home/playBtn2.svg"} height={60} width={60} alt='playBtn' className={styles.playVideo}/>
    </div>
  )
}

export default VideoSection
