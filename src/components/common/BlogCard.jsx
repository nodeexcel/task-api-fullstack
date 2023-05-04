import React from 'react'
import styles from "@/styles/BlogCard.module.css"

const BlogCard = ({ data, style, imgStyle, className }) => {
    const { src, badge, heading, date } = data;
    return (
        <div className={`container ${styles.blogCardDiv} ${className} `} style={style} >
            <div className='col-12'>
                <img src={src} className={styles.cardImg} style={imgStyle} />
            </div>
            <div className={`d-flex flex-column justify-content-between ${styles.bottomText}`}>
                <div className=''>
                    <div className={styles.badge}>{badge}</div>
                    <div className={styles.heading}>{heading}</div>
                </div>
                <div>
                    <div className={styles.date}>{date}</div>
                </div>
            </div>

        </div>
    )
}

export default BlogCard
