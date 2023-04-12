import React from 'react'

const Card = ({ src, text,style, subText }) => {
    return (
        <section className="" style={style}>
            <img className="card-img-top" src={src} alt="Card image cap" />
            <div className="card-body">
                <div className="fs-4 card-title py-2">{text}</div>
                <div className="fs-5 fw-lighter card-text py-">{subText}</div>
            </div>
        </section>
    )
}

export default Card
