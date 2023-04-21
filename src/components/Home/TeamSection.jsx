import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import styles from '../../styles/home/TeamSection.module.css'

const teamData = [
    {
        src: "/assets/images/home/team1.svg",
        text: "Jared E. Wallace",
        subText: "CEO & Co-Founder",
        imgText: "Protected by a multi-level security architecture and is regularly Protected by a multi-level security architecture and is regularly"
    },
    {
        src: "/assets/images/home/team2.svg",
        text: "Jessica Johnson",
        subText: "Co-Founder",
        imgText: "Protected by a multi-level security architecture and is regularly Protected by a multi-level security architecture and is regularly"
    },
    {
        src: "/assets/images/home/team3.svg",
        text: "Trevor Noah",
        subText: "Tech Lead",
        imgText: "Protected by a multi-level security architecture and is regularly Protected by a multi-level security architecture and is regularly"
    },
    {
        src: "/assets/images/home/team4.svg",
        text: "Kate Winslet",
        subText: "Marketing Lead",
        imgText: "Protected by a multi-level security architecture and is regularly Protected by a multi-level security architecture and is regularly"
    },
    {
        src: "/assets/images/home/team1.svg",
        text: "Jared E. Wallace",
        subText: "CEO & Co-Founder",
        imgText: "Protected by a multi-level security architecture and is regularly Protected by a multi-level security architecture and is regularly"
    },
    {
        src: "/assets/images/home/team2.svg",
        text: "Jessica Johnson",
        subText: "Co-Founder",
        imgText: "Protected by a multi-level security architecture and is regularly Protected by a multi-level security architecture and is regularly"
    },
    {
        src: "/assets/images/home/team3.svg",
        text: "Trevor Noah",
        subText: "Tech Lead",
        imgText: "Protected by a multi-level security architecture and is regularly Protected by a multi-level security architecture and is regularly"
    },

]

const TeamSection = () => {
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(4)
    const [data, setdata] = useState(teamData)

    useEffect(() => {
        const d = teamData.slice(startIndex, endIndex)
        setdata(d)
    }, [endIndex])

    return (
        <section className='bg-dark text-white p-5' id="teamSection">
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='fs-1 fw-bolder'>
                    The Team
                </div>
                <div className={styles.description}>
                    Protected by a multi-level security <br />architecture and is regularly
                </div>
            </div>
            <div className='d-flex flex-row justify-content-center'>
                <button className={`d-flex ${styles.leftBtnDiv}`} onClick={() => {
                    setStartIndex(startIndex - 1)
                    setEndIndex(endIndex - 1)
                }}
                    disabled={startIndex == 0}
                >
                    {startIndex === 0 ?
                        <img src="/assets/images/home/leftGray.svg" alt='left' />
                        :
                        <img src="/assets/images/home/left.svg" alt='left' />
                    }
                </button>
                <div className='d-flex justify-content-center'>
                    {data?.map((data) => {
                        return (
                            <>
                                <Card src={data.src} text={data.text} imgText={data.imgText} subText={data.subText}  type={"team"} className={styles.cardStyle} />
                            </>
                        )
                    })}
                </div>
                <button className={`d-flex ${styles.rightBtnDiv}`} disabled={endIndex == teamData.length - 1} onClick={() => {
                    if (endIndex !== teamData.length - 1) {
                        setStartIndex(startIndex + 1)
                        setEndIndex(endIndex + 1)
                    }
                }}>
                    {
                        endIndex == teamData.length - 1 ?
                            <img src="/assets/images/home/rightGray.svg" alt='right' />
                            :
                            <img src="/assets/images/home/right.svg" alt='right' />
                    }
                </button>
            </div>
            <div className={`${styles.phoneArrow}`} >
                <button className={`d-flex`} onClick={() => {
                    setStartIndex(startIndex - 1)
                    setEndIndex(endIndex - 1)

                }}
                    disabled={startIndex == 0}
                >
                    {startIndex === 0 ?
                        <img src="/assets/images/home/leftGray.svg" alt='left' />
                        :
                        <img src="/assets/images/home/left.svg" alt='left' />
                    }
                </button>
                <button className={`d-flex`} disabled={endIndex == teamData.length - 1} onClick={() => {
                    if (endIndex !== teamData.length - 1) {
                        setStartIndex(startIndex + 1)
                        setEndIndex(endIndex + 1)
                    }
                }}>
                    {
                        endIndex == teamData.length - 1 ?
                            <img src="/assets/images/home/rightGray.svg" alt='right' />
                            :
                            <img src="/assets/images/home/right.svg" alt='right' />
                    }
                </button>
            </div>
        </section>
    )
}

export default TeamSection
