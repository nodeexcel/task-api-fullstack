import React from 'react'
import Card from '../common/Card'
import Button, { StoreButton } from '../common/Button'

const StoriesSection = () => {
    const storyData = [
        {
            text: "Celsius will compensate consumers with a new token",
            subText: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...",
            src: "/assets/images/home/story1.svg"
        },
        {
            text: "Celsius will compensate consumers with a new token",
            subText: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...",
            src: "/assets/images/home/story2.svg"
        },
        {
            text: "Celsius will compensate consumers with a new token",
            subText: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...",
            src: "/assets/images/home/story3.svg"
        }
    ]
    return (
        <div className='bg-black text-white'>
            <div className='row d-flex justify-content-between' style={{padding:"100px"}}>
                <div className='col-6'>
                    <div className='fs-2 fw-bold'>Our Stories</div>
                    <div className='fs-5'>The new culture of money is making headlines.Check out our latest blog posts to find out more.
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-end align-items-center'>
                    <Button text={"More stories"} style={{color:"white"}}/>
                </div>
            </div>
            <div className='row d-flex justify-content-center' style={{paddingBottom:100}}>
                {storyData.map((data) => {
                    return (
                        <Card text={data.text} src={data.src} subText={data.subText} />
                    )
                })}
            </div>
        </div>
    )
}

export default StoriesSection
