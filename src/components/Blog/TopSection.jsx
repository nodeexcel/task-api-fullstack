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
                        <input class={`${styles.searchBar} form-control`} type="search" placeholder="Search" aria-label="Search"  />
                        <img src='/assets/images/blog/searchIcon.svg' style={{ width: "4%" }} />
                    </div>
                </form>
            </div>
            <div className='m-4 m-sm-2'>
                <img src="/assets/images/blog/topImg.svg" className={styles.topImg} onClick={()=>router.push("/blog/1")}/>
            </div>
        </div>
    )
}

export default TopSection
