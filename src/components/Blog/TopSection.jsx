import React from 'react'
import styles from "@/styles/blog/TopSection.module.css"
import { useRouter } from 'next/router'

const TopSection = () => {
    const router = useRouter();
    return (
        <div className={`container ${styles.mainDiv}`}>
            <div className={styles.heading}>The Blog</div>
            <div className={styles.search}>
                <form class="d-flex" role="search">
                    <div className='d-flex justify-content-center px-2 w-100' style={{ background: "#F4F4F51A", borderRadius: "10px" }}>
                        <input class={`${styles.searchBar} form-control`} type="search" placeholder="Search" aria-label="Search" />
                        <img src='/assets/images/blog/searchIcon.svg' style={{ width: "4%", cursor: "pointer" }} />
                    </div>
                </form>
            </div>
            <div className='m-4 m-sm-2' style={{
                position: 'relative',
                // backgroundImage: "url(../../../public/assets/images/blog/topImg.svg)",
                // backgroundPosition: "center",
                // backgroundSize: "cover",
            }}>
                {/* <img src="/assets/images/blog/topImg.svg" className={styles.topImg} onClick={()=>router.push("/blog/1")}/> */}

                <img src='/assets/images/blog/topImg.svg' style={{ width: "100%",opacity:0.6, marginBottom: 5, position: "relative" }} />
                <div className={styles.overlayDiv}>
                    <img src='/assets/images/blog/featureBtn.svg' className={styles.featureBtn} onClick={() => router.push("/blog/1")} />
                    <div className={`${styles.overlayText}`}>Join  Plena Smart Wallet Referral Program<br /> & Win Big with $1m PLENA Tokens</div>
                    <div className={styles.overlayDate}>August 20, 2022</div>
                </div>

            </div>
        </div>
    )
}

export default TopSection
