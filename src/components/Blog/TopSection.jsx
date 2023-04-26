import React from 'react'
import styles from "@/styles/blog/TopSection.module.css"

const TopSection = () => {
    return (
        <div className={`container ${styles.mainDiv}`}>
            <div className={styles.heading}>The Blog</div>
            <div className={styles.search}>
                <form class="d-flex" role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
            <div className='m-4'>
                <img src="/assets/images/blog/topImg.svg" className={styles.topImg}/>
            </div>
        </div>
    )
}

export default TopSection
