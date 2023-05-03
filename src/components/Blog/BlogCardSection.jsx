import React from 'react'
import BlogCard from '../common/BlogCard'
import styles from "@/styles/blog/BlogCardSection.module.css"
import { useRouter } from 'next/router'

const cardData = [
    {
        src: "/assets/images/blog/cardImg1.svg",
        badge: "Technology",
        heading: "Account Abstraction 101: Unlocking the Potential of Web3",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg2.svg",
        badge: "Technology",
        heading: "Telegram supports users to send USDT in chat",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg3.svg",
        badge: "Technology",
        heading: "Plena Wallet and Onmeta Join forces to empower its users With Easy Access to Crypto",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg4.svg",
        badge: "Technology",
        heading: "Account Abstraction 101: Unlocking the Potential of Web3",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg5.svg",
        badge: "Technology",
        heading: "Telegram supports users to send USDT in chat",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg6.svg",
        badge: "Technology",
        heading: "Plena Wallet and Onmeta Join forces to empower its users With Easy Access to Crypto",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg1.svg",
        badge: "Technology",
        heading: "Account Abstraction 101: Unlocking the Potential of Web3",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg2.svg",
        badge: "Technology",
        heading: "Telegram supports users to send USDT in chat",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg7.svg",
        badge: "Technology",
        heading: "Plena Wallet and Onmeta Join forces to empower its users With Easy Access to Crypto",
        date: "August 20, 2022"
    },
]

const BlogCardSection = () => {
    const router = useRouter()
    return (
        <div className='container'>
            <div className={`container ${styles.cardTopSection}`} style={{ width:"100%", padding:"20px 30px"}}>
                <div className={`${styles.latestPost}`} >Latest Post</div>
                <div className={`text-white ${styles.rightNav}`} style={{}}>
                    <ul className='d-flex justify-content-between flex-wrap' style={{ listStyleType: "none"}} >
                        <li className='mx-2'>All</li>
                        <li className='mx-2'>Product updates</li>
                        <li className='mx-2'>Announcements</li>
                        <li className='mx-2'>Collaborations</li>
                    </ul>
                </div>
            </div>
            
                <div className={styles.cardDiv}>
                    {cardData.map((data, index) => {
                        return (
                            <div onClick={() => router.push(`/blog/${index}`)} role="button" className={styles.cardContainer} >
                                <BlogCard data={data}  imgStyle={{ width: "100%" }} />
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default BlogCardSection
