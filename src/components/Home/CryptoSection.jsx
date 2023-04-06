import React from 'react'
import Image from 'next/image'
import { StoreButton } from '../common/Button'
import styles from "@/styles/home/CryptoSection.module.css"

const CryptoSection = () => {
    const AppleIcon = '/assets/images/home/appleIcon.svg'
    const PlaystoreIcon = '/assets/images/home/playstoreIcon.svg'
    return (
        <div className={styles.cryptoDiv}>
            <div className={styles.leftDiv}>
                <div className={styles.heading}>
                    Invest in Crypto, Starting with Just $1
                </div>
                <div className={styles.subHeading}>
                    Buy BTC, ETH, Matic, & 100,000+ crypto Assets across Multiple Chains with Ease
                </div>
                <div className={styles.btnDiv}>
                    <StoreButton subText={"App Store"} src={AppleIcon} />
                    <StoreButton subText={"Play Store"} src={PlaystoreIcon} />
                </div>
            </div>
            <div className={styles.rightDiv}>
                <Image src={"/assets/images/home/crypto.svg"} width={800} height={800} alt='crypto' />
            </div>
        </div>
    )
}

export default CryptoSection
