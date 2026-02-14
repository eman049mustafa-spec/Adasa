import React from 'react'
import Hero from '../../subpages/Hero/Hero'
import data from '../../data/posts.json'
import styles from './home.module.css'

export default function Home() {
  const heroData = {
    tagline: "اكتشف فن التصوير الفوتوغرافي",
    description: "اكتشف أحدث المقالات والأفكار في عالم التكنولوجيا والتطوير",
    badge:"مرحباً بك في عدسة"
  }
  return (
    <>
      <section className={`${styles.hero} position-relative d-flex align-items-center text-center overflow-hidden`}>
      <Hero heroData={heroData}/>
      </section>
    </>
  )
}
