import React from 'react'
import styles from "@/styles/blog/TopSection.module.css"

const TopSection = () => {
    return (
        <div className={`container ${styles.mainDiv}`}>
            <div className={styles.heading}>The Blog</div>
            <div className={styles.search}>
                <form class="d-flex" role="search">
                    <div className='d-flex justify-content-center px-2 w-100' style={{ background: "#F4F4F51A", borderRadius: "10px" }}>
                        <input class={`${styles.searchBar} form-control`} type="search" placeholder="Search" aria-label="Search" style={{ background: "transparent", color: "white", outline: "none", border: "none", height: "50px" }} />
                        <img src='/assets/images/blog/searchIcon.svg' style={{ width: "7%" }} />
                    </div>
                </form>
            </div>
            <div className='m-4'>
                <img src="/assets/images/blog/topImg.svg" className={styles.topImg} />
            </div>
        </div>
    )
}

export default TopSection
