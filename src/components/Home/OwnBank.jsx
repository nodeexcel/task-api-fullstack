import React from 'react'
import styles from "@/styles/home/OwnBank.module.css"
import Image from 'next/image'
import Button from '../common/Button'

const OwnBank = () => {
    const bankData = [
        {
            number: "140K+",
            text: "Users",
        },
        {
            number: "200K+",
            text: "Strong Community",
        },
        {
            number: "20M+",
            text: "Transactions",
        }
    ]
    return (
        <>
            <div className={`${styles.mainDiv}`}>
                <div className='row'>
                <div className={`col-6 ${styles.leftDiv}`}>
                    <div className={styles.heading}>
                        Be Your<br /> Own Bank
                    </div>
                    <Image src={"/assets/images/home/curl.svg"} height={80} width={250} alt="curl" />
                    <div className={styles.subHeading}>Introducing Plena 2.0,  Self-Custodial Smart Wallet with EIP-4337: Account Abstraction </div>
                    <div className={styles.btnDiv}>
                        <Button text={"Get the App"} />
                        <div>
                            <Image src={"/assets/images/home/playBtn1.svg"} height={40} width={40} alt='playbtn' />
                            Watch Intro</div>
                    </div>
                </div>
                <div className={`col-6 ${styles.rightDiv}`}>
                    <Image src={"/assets/images/home/phoneImg.svg"} width={1000} height={700} alt='phone' className={styles.phoneImg1} />
                    <Image src={"/assets/images/home/gradientBg.svg"} width={1200} height={1200} alt='gradientBg' className={styles.phoneImg2} />
                </div>
                </div>
            </div>
            <div className={` container ${styles.bankDataDiv}`}>
                {bankData?.map((data) => {
                    return (
                        <div className='row'>
                            <div className='col-12'>

                            <div className={styles.bankNumber}>{data.number}</div>
                            <p>{data.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default OwnBank
