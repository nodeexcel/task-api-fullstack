import React from "react";
import styles from "@/styles/Card.module.css"

const Card = ({ src, text, style, subText, type, imgText ,className, imgContainerStyle }) => {
  return (
    <div className={`${className}`} style={style}>
      <div className={imgContainerStyle ? styles.imgContainerStyle :styles.imageContainer}>
        <img className="card-img-top" src={src} alt="Card image cap" />
        {type==="team" && 
        <div className={styles.textOverlay}>
          <p>{imgText}</p>
        </div>}
      </div>

      <div className="card-body">
        <div className="fs-4 card-title py-2">{text}</div>
        <div className="fs-6 fw-lighter card-text" style={{color:"#BABABA"}}>{subText}</div>
      </div>

      {type === "team" && (
        <div>
          <hr style={{ width: 40, height: 2, background: "white" }} />
          <div style={{ lineHeight: 0 }}>LinkedIN &nbsp; | &nbsp; Twitter</div>
        </div>
      )}
    </div>
  );
};

export default Card;
