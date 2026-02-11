import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../data/posts.json";
import navImg from "../../assets/images/logo-GdqARQRt.png";
import styles from "./NavBarStyle.module.css";

export default function NavBar() {
  const { name, tagline } = data.siteInfo;

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.myNav}`}>
      <div className="container">

        {/* Logo + Text */}
        <NavLink className={`navbar-brand ${styles.brand}`} to="/">
          <img src={navImg} alt="logo" />
          <div>
            <h5 className="mb-0">{name}</h5>
            <small >{tagline}</small>
          </div>
        </NavLink>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navContent">

          {/* Links */}
          <ul className={`navbar-nav mx-auto gap-5 p-4 px-5 rounded-5 ${styles.middleLinksBox}`}>

            <li className="nav-item ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                الرئيسية
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                المدونة
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                من نحن
              </NavLink>
            </li>

          </ul>

          {/* Buttons */}
          <div className="d-flex align-items-center gap-2">

            <input
              type="search"
              placeholder="بحث..."
              className={styles.search}
            />

            <button className={`p-3 px-4 rounded-5  ${styles.primaryBtn}`}>
              ابدأ القراءة
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}
