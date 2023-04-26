import React from 'react'
import styles from "@/styles/BlogCard.module.css"

const BlogCard = ({data, style}) => {
const {src,badge,heading,date} = data;
  return (
    <div className={`container ${styles.blogCardDiv}`} style={style}>
      <div className='col-12'>
        <img src={src} className={styles.cardImg}/>
      </div>
      <div className='col-12'>
        <div className={styles.badge}>{badge}</div>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  )
}

export default BlogCard
