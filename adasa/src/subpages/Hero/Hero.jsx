import React from "react";
import GridBackGround from "../../components/GridBackGround/GridBackGround";
import styles from "./Hero.module.css";

export default function Hero(props) {
  const { tagline, description , badge} = props.heroData;
  const [firstWord, secondWord, ...rest] = tagline.split(" "); // "مقالاتنا"

  return (
    <>
      {/* الخلفية */}
      <GridBackGround />

      {/* المحتوى */}
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span>{badge}</span>
          {/* <span className={styles.icon}>⌁</span> */}
        </div>

        <h1 className={styles.title}>
          {firstWord} <span className={styles.orange}>{secondWord}</span><br className=""></br>{" "}
          {rest.join(" ")}
        </h1>

        <p className={styles.desc}>{description}</p>
      </div>
    </>
  );
}
