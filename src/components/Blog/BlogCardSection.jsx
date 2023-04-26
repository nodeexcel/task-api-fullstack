import React from 'react'
import BlogCard from '../common/BlogCard'

const cardData = [
    {
        src: "/assets/images/blog/cardImg1.svg",
        badge: "Technology",
        heading: "Account Abstraction 101: Unlocking the Potential of Web3",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg1.svg",
        badge: "Technology",
        heading: "Telegram supports users to send USDT in chat",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg1.svg",
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
        src: "/assets/images/blog/cardImg1.svg",
        badge: "Technology",
        heading: "Telegram supports users to send USDT in chat",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg1.svg",
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
        src: "/assets/images/blog/cardImg1.svg",
        badge: "Technology",
        heading: "Telegram supports users to send USDT in chat",
        date: "August 20, 2022"
    },
    {
        src: "/assets/images/blog/cardImg1.svg",
        badge: "Technology",
        heading: "Plena Wallet and Onmeta Join forces to empower its users With Easy Access to Crypto",
        date: "August 20, 2022"
    },
]
const BlogCardSection = () => {
    return (
        <div className='container'>
            <div className='p-5'>
                <div className='d-flex w-100 flex-wrap '>
                    {cardData.map((data, index) => {
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
