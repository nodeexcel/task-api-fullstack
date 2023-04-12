import React from 'react';
import Card from '../common/Card';
import styles from '../../styles/home/TeamSection.module.css'

const TeamSection = () => {
    const teamData = [
        {
            src: "/assets/images/home/team1.svg",
            text: "Jared E. Wallace",
            subText: "CEO & Co-Founder"
        },
        {
            src: "/assets/images/home/team2.svg",
            text: "Jessica Johnson",
            subText: "Co-Founder"
        },
        {
            src: "/assets/images/home/team3.svg",
            text: "Trevor Noah",
            subText: "Tech Lead"
        },
        {
            src: "/assets/images/home/team4.svg",
            text: "Kate Winslet",
            subText: "Marketing Lead"
        }
    ]
    return (
        <div className='bg-dark text-white p-5' id="teamSection">
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='fs-1 fw-bolder'>
                    The Team
                </div>
                <div className={styles.description}>
                    Protected by a multi-level security <br/>architecture and is regularly
                </div>
            </div>
            <div className='d-flex flex-row justify-content-center'>
                <div className='d-flex'><img src="/assets/images/home/left.svg" alt='left'/></div>
                <div className='d-flex justify-content-center'>
                {teamData.map((data) => {
                    return (
                        <>
                            <Card src={data.src} text={data.text} subText={data.subText} style={{ width: "14rem", margin: 20 }} />
                        </>
                    )
                })}
                </div>
                <div className='d-flex'><img src="/assets/images/home/right.svg" alt='right'/></div>
            </div>
        </div>
    )
}

export default TeamSection
