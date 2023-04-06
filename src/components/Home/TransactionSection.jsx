import React from 'react'
import styles from "@/styles/home/TransactionSection.module.css"

const TransactionSection = () => {
    return (
        <div className={styles.transactionDiv}>
            <div className={styles.textDiv}>
                <div className={styles.fasterText}>
                    <img src='/assets/images/home/thunderImg.svg' height={110} width={150} alt='thunderImg' className={styles.img} />
                    <div className={styles.heading}>Faster</div>
                </div>
                <div className={styles.phoneImg}>
                    <img src="/assets/images/home/transactionPhone.svg" width={500} height={800} alt='phone' />
                </div>
            </div>
                <div className={styles.transactionHeading}>Transactions</div>
        </div>
    )
}

export default TransactionSection
