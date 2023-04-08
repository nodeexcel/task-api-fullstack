import React from 'react'

const Card = ({ src, text, subText }) => {
    return (
        <div className="" style={{ width: "26rem", margin: 20 }}>
            <img className="card-img-top" src={src} alt="Card image cap" />
            <div className="card-body">
                <div className="fs-3 card-title py-2">{text}</div>
                <div className="fs-5 fw-lighter card-text py-2">{subText}</div>
            </div>
        </div>
    )
}

export default Card
