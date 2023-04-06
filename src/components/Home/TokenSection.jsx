import React from 'react'
import styles from "@/styles/home/TokenSection.module.css"
import Button from '../common/Button'

const TokenSection = () => {
    const tokenData = [
        {
            text: "Take control of your assets",
            subText: "Unlike centralized exchanges, Plena ensures that only users have full control over their crypto assets.",
            src: "/assets/images/home/control.svg",
            btn: false,
            alt: "take control image"

        },
        {
            text: "Social Login & Easy recovery",
            subText: "Sign in quickly and effortlessly using social media accounts, and retrieve your account even if your device is lost with MPC (Multi-Party Computation) security.",
            src: "/assets/images/home/login.svg",
            btn: false,
            alt: "social login image",
            style: { flexDirection: "row-reverse" },
            rightStyle: { display: "flex", justifyContent: "end" }

        }, {
            text: "100K+ Tokens",
            subText: "Store, Send, Receive and Trade over 100,000 crypto across Multiple Chains at Best Rates",
            src: "/assets/images/home/tokens.svg",
            btn: true,
            alt: "token image"
        }
    ]
    return (
        <div className={styles.mainDiv}>
            {tokenData.map((data) => {
                return (
                    <>
                        <div className={styles.tokenDiv} style={data?.style}>
                            <div className={styles.leftDiv}>
                                <p className={styles.text}>{data.text}</p>
                                <p className={styles.subText}>{data.subText}</p>
                                {data?.btn==true && <Button text={"Get the App"} />}
                            </div>
                            <div className={styles.rightDiv} style={data?.rightStyle}>
                                <img src={data.src} height={350} width={350} alt={data.alt} />
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default TokenSection
