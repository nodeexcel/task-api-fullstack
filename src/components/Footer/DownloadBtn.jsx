import React from "react";
import styles from "../../styles/home/DownloadBtn.module.css";

function DownloadBtn() {
  return (
    <>
      <div className={styles.DownloadAppBtn}>
        <button className={`my-3 ${styles.DownloadApp}`}>Download App</button>
        <p className={styles.btntext}>Availiable for iOS & Android</p>
      </div>
    </>
  );
}

export default DownloadBtn;
