import React from 'react'
import styles from "@/styles/Button.module.css"
import storeStyles from "@/styles/StoreButton.module.css"

const Button = ({ text, buttonName, style }) => {
  return (
    <button className={buttonName === "black" ? styles.blackBtnStyle : styles.btnStyle} style={style}>
      {text}
    </button>
  )
}

export const StoreButton = ({ src, subText }) => {
  return (
    <button className={storeStyles.storeBtn}>
      <div className={storeStyles.leftDiv}>
        <img src={src} alt='icon' className={styles.apple} />
      </div>
      <div className={storeStyles.rightDiv}>
        <div className={storeStyles.text}>Download on the</div>
        <div className={storeStyles.subText}>{subText}</div>
      </div>
    </button>
  )
}

export const GradiantButton = ({ text }) => {
  return (
    <div class="btn" href="#">
      <span>{text}</span>
    </div>
  )
}
export default Button