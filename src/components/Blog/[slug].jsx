import { useRouter } from 'next/router'
import React from 'react'
import SeemLessSection from './SeemLessSection';
import BlogCard from '../common/BlogCard';
import styles from "@/styles/blog/BlogContent.module.css"

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
    }
]

const BlogContent = () => {
    const router = useRouter();
    console.log(router.query, "????????????????")
    
    return (
        <div className='container bg-black'>
            <div className='' style={{ padding: "170px 170px 0px 170px" }}>
                <div>
                    <div>
                    <div className={styles.badge}>Technology</div>
                    </div>
                    <h1 className={styles.topHeading}>Plena Wallet and Onmeta Join forces to empower its users With Easy Access to Crypto</h1>
                    <span style={{ color: "#696A75" }}>August 20, 2023</span>
                    <span style={{ color: "#696A75", marginLeft: 20 }}><img src="/assets/images/blog/clock.svg" />3 min</span>
                </div>
                <div className='' style={{ color: "#BABABF" }}>
                    <img src="/assets/images/blog/cardImg6.svg" style={{ width: "100%", margin: "50px 0px" }} />
                    <p className={styles.para}>
                        We are thrilled to unveil our hotly anticipated referral program that offers rewards worth up to $1,000,000 in $Plena tokens. The program aims to incentivize users to invite their friends and family to join the platform while offering them a chance to earn some significant rewards.
                    </p>
                    <p className={styles.para}>
                        How to join ? The rules are fairly simple and straightforward: To participate in our referral program, you simply need to share your referral link with your friends and family. Once a new user downloads the app and signs up through your referral link & successfully completes 3 Transactions on the Fantom Foundation chain , you and your friends/family will be earning 50 points each.
                    </p>
                </div>
                <div className='' style={{ color: "#BABABF" }}>
                    <h3 className={styles.heading}>
                        For existing users
                    </h3>
                    <p className={styles.para}>
                        Existing customers can make as many referrals as they like but they must be a new Plena App customer. This means that the more friends and family members you refer, the higher your chances of winning a significant reward. For a full step by step Guide please refer to this article.
                    </p>
                    <p className={styles.para}>
                        The program has turned referrals into a game, where you can earn rewards in the form of $Plena tokens for each referral you make & track the leaderboard. The program has turned referrals into a game, where you can earn rewards in the form of $Plena tokens for each referral you make & track the leaderboard.
                    </p>
                </div>
                <div className={styles.offer}>
                    ** Limited time offer** In addition to the exciting rewards for individual referrals, our referral program offers users the opportunity to win even bigger rewards.We are giving away rewards worth up to $100,000 in $Plena tokens to the Top 100 on the leaderboard.
                </div>
                <div className='' style={{ color: "#BABABF" }}>
                    <img src='/assets/images/blog/blogImg.svg' style={{ width: "100%", marginBottom: 50 }} />
                    <p className={styles.para}>
                        We are thrilled to unveil our hotly anticipated referral program that offers rewards worth up to $1,000,000 in $Plena tokens. The program aims to incentivize users to invite their friends and family to join the platform while offering them a chance to earn some significant rewards.
                    </p>
                    <p className={styles.para}>
                        How to join ? The rules are fairly simple and straightforward: To participate in our referral program, you simply need to share your referral link with your friends and family. Once a new user downloads the app and signs up through your referral link & successfully completes 3 Transactions on the Fantom Foundation chain , you and your friends/family will be earning 50 points each.
                    </p>
                </div>
                <div className='' style={{ color: "#BABABF" }}>
                    <h3 className={styles.heading}>
                        Conclusion
                    </h3>
                    <p className={styles.para}>
                        Existing customers can make as many referrals as they like but they must be a new Plena App customer. This means that the more friends and family members you refer, the higher your chances of winning a significant reward. For a full step by step Guide please refer to this article.
                    </p>
                    <p className={styles.para}>
                        The program has turned referrals into a game, where you can earn rewards in the form of $Plena tokens for each referral you make & track the leaderboard. The program has turned referrals into a game, where you can earn rewards in the form of $Plena tokens for each referral you make & track the leaderboard.
                    </p>
                </div>
                <div>
                    <h3 className='text-white fw-3'>Related Blogs</h3>
                    <div className='d-flex justify-content-between flex-wrap'>
                        {cardData.map((data, index) => {
                            return (
                                <BlogCard data={data} imgStyle={{
                                    width: "100%"
                                }} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <SeemLessSection style={{ padding: 50 }} />
        </div>
    )
}

export default BlogContent
