import React, { useEffect, useState } from 'react'
import BlogCard from '../common/BlogCard'
import styles from "@/styles/blog/BlogCardSection.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link'

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

const navLink = [
    {
        href: "all",
        text: 'All'
    },
    {
        href: "product-updates",
        text: 'Product updates'
    },
    {
        href: "announcements",
        text: 'Announcements'
    },
    {
        href: "collaborations",
        text: 'Collaborations'
    },
]

const BlogCardSection = () => {
    const router = useRouter();
    const [navItem, setNavItem] = useState(0);
    const [viewAll, setViewAll] = useState(false)
    const [cardDetails, setCardDetails] = useState(cardData)
    const style1 = { border: "2px solid #E0EB77", padding: "7px 15px", borderRadius: 6 }

    useEffect(() => {
        let data = !viewAll ? cardData?.filter((data, index) => index < cardData.length / 2) : cardData;
        setCardDetails(data)
    }, [viewAll])

    return (
        <div className='container'>
            <div className={`container ${styles.cardTopSection}`}>
                <div className={`${styles.latestPost}`} >Latest Post</div>
                <div className={`text-white ${styles.rightNav}`}>
                    <ul className='d-flex justify-content-between flex-wrap' style={{ listStyleType: "none" }} >
                        {
                            navLink.map((navlink, index) => {
                                return (
                                    <li><Link href={`/blog#${navlink.href}`} style={index === navItem ? style1 : {}} className={`mx-2 ${styles.liText}`} onClick={() => setNavItem(index)}>{navlink.text}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className={styles.cardDiv}>
                {cardDetails?.map((data, index) => {
                    return (
                        <div onClick={() => router.push(`/blog/${index}`)} role="button" className={styles.cardContainer} >
                            <BlogCard data={data} imgStyle={{ width: "100%" }} />
                        </div>
                    )
                })}
            </div>
            <div className='d-flex justify-content-center'>
                <div className={styles.viewBtn} onClick={() => setViewAll(!viewAll)}>{viewAll ? "View Less Post" : "View All Post"}</div>
            </div>
        </div>
    )
}

export default BlogCardSection
