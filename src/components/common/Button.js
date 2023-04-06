import React from 'react'
import styles from "@/styles/Button.module.css"
import storeStyles from "@/styles/StoreButton.module.css"
import Image from 'next/image'

const Button = ({ text, buttonName }) => {
  return (
    <div className={buttonName === "black" ? styles.blackBtnStyle : styles.btnStyle}>
      {text}
    </div>
  )
}

export const StoreButton = ({ src, subText }) => {
  return (
    <div className={storeStyles.storeBtn}>
      <div className={storeStyles.leftDiv}>
        <Image src={src} width={40} height={40} alt='icon' />
      </div>
      <div className={storeStyles.rightDiv}>
        <div className={storeStyles.text}>Download on the</div>
        <div className={storeStyles.subText}>{subText}</div>
      </div>
    </div>
  )
}


export default Button