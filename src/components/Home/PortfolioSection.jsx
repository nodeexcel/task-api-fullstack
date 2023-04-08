import React from 'react'
import { StoreButton } from '../common/Button'

const PortfolioSection = () => {
    const AppleIcon = "/assets/images/home/appleIcon.svg";
    const PlaystoreIcon = "/assets/images/home/playstoreIcon.svg";

    return (
        <>
            <div className='bg-black ' style={{ padding: 100, position:'relative' }}>
                <div className='row text-white' style={{ padding: "60px 100px", background: "gray", borderRadius: 50 }}>
                    <div className='col-6 d-flex align-items-center justify-content-center flex-column'>
                        <div className='fs-1 fw-bolder'>
                            Start building your portfolio with just $1
                        </div>
                        <div className='fs-3 fw-normal'>
                            Over 100,000+ Crypto to choose from, Download the app now!
                        </div>
                        <div className='row d-flex mt-5'>
                            <StoreButton subText={"App Store"} src={AppleIcon} />
                            <StoreButton subText={"Play Store"} src={PlaystoreIcon} />
                        </div>
                    </div>
                    <div className='col-6 d-flex justify-content-center'>
                    </div>

                </div>
                <div style={{ position: "absolute",  top: -55, left: 600 }}>

                    <img src={"/assets/images/home/portfolio.svg"} height={800} width={1000} alt='' />
                </div>
            </div>

        </>
    )
}

export default PortfolioSection
