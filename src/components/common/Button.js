import React from 'react'
import styles from "@/styles/Button.module.css"
import storeStyles from "@/styles/StoreButton.module.css"

const Button = ({ text, buttonName }) => {
  return (
    <div className={buttonName === "black" ? styles.blackBtnStyle : styles.btnStyle}>
      {text}
    </div>
  )
}

export const StoreButton = ({ src, subText,imgStyle}) => {
  return (
    <div className={storeStyles.storeBtn}>
      <div className={storeStyles.leftDiv}>
        <img src={src}  alt='icon' style={imgStyle}/>
      </div>
      <div className={storeStyles.rightDiv}>
        <div className={storeStyles.text}>Download on the</div>
        <div className={storeStyles.subText}>{subText}</div>
      </div>
    </div>
  )
}


export default Button