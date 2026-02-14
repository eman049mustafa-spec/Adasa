import React from 'react'
import styles from "./TransparentOrangeButton.module.css";
export default function TransparentOrangeButton() {
  return (
    <>
      <div className={`${styles.transparentOrangeButton} rounded-5`}>
        <span>مرحباً بك في عدسة</span>
      </div>
    </>
  )
}
