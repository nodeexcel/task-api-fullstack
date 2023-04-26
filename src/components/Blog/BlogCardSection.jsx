import React from 'react'
import BlogCard from '../common/BlogCard'
import styles from "@/styles/blog/BlogCardSection.module.css"

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
    return (
        <div className='container'>
            <div className='container d-flex ms-4 justify-content-evenly'>
                <div className={`col-6 ${styles.latestPost}`}>Latest Post</div>
                <div className={`text-white col-5`} style={{marginRight:20}}>
                    <ul className='d-flex justify-content-evenly' style={{listStyleType:"none"}}>
                        <li>All</li>
                        <li>Product updates</li>
                        <li>Announcements</li>
                        <li>Collaborations</li>
                    </ul>
                </div>
            </div>
            <div className='px-5'>
                <div className='d-flex w-100 flex-wrap '>
                    {cardData.map((data) => {
                        return (
                            <BlogCard data={data} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogCardSection
