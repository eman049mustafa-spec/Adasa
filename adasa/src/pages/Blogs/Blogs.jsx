import React from "react";
import TransparentOrangeButton from "../../components/buttons/TransparentOrangeButton/TransparentOrangeButton";
import Hero from "../../subpages/Hero/Hero";
import styles from "../../subpages/Hero/Hero.module.css";
import CategoriesNav from "../../components/CategoriesNav/CategoriesNav";
import { Outlet } from "react-router-dom";
export default function Blogs() {
  const heroData = {
    tagline: "استكشف مقالاتنا",
    description: "اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث",
    badge: "مدونتنا",
  }
  return (
    <>
      {/* The fixed Part */}
      <section className={`position-relative d-flex align-items-center text-center overflow-hidden ${styles.hero}`}>
        <Hero heroData={heroData}/>
      </section>
      {/* The Chageble Part */}
      <Outlet/>
      {/* The fixed Part */}
    </>
  );
}
