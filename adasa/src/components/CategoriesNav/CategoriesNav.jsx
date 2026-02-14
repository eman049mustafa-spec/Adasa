import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./CategoriesNav.module.css";

export default function CategoriesNav() {
  return (
    <>
      <div className={` pt-3 position-sticky top-0`}>
        <div className=" container py-3 mx-auto">
          <div className={` row align-items-center g-5 ${styles.wrapper}`}>
            {/* 🏷 Tabs */}
            <div className="col-12 col-md-9 ">
              <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0  ">
                <li>
                  <NavLink
                    to="."
                    end
                    className={({ isActive }) =>
                      `${styles.tab} ${isActive ? styles.active : ""}`
                    }>
                    جميع المقالات
                  </NavLink>
                </li>

                {}

                <li>
                  <NavLink
                    to="lighting"
                    className={({ isActive }) =>
                      `${styles.tab} ${isActive ? styles.active : ""}`
                    }>
                    إضاءة
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="portrait"
                    className={({ isActive }) =>
                      `${styles.tab} ${isActive ? styles.active : ""}`
                    }>
                    بورتريه
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="landscapes"
                    className={({ isActive }) =>
                      `${styles.tab} ${isActive ? styles.active : ""}`
                    }>
                    مناظر طبيعية
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="techniques"
                    className={({ isActive }) =>
                      `${styles.tab} ${isActive ? styles.active : ""}`
                    }>
                    تقنيات
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="equipment"
                    className={({ isActive }) =>
                      `${styles.tab} ${isActive ? styles.active : ""}`
                    }>
                    معدات
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* 🔍 Search */}
            <div className="col-12 col-md-3 ">
              <div className={`w-100`}>
                <span className={styles.searchIcon}>⌕</span>
                <input
                  className={styles.searchInput}
                  placeholder="ابحث في المقالات..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>
      </div>

      <Outlet />
    </>
  );
}
