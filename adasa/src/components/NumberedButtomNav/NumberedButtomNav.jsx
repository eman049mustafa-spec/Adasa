import React, { useState } from "react";
import data from "../../data/posts.json"; 
import { NavLink, Outlet } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";


export default function NumberedButtomNav({ categIndex , path }) {
  const [currentPage, setCurrentPage] = useState(1); // الرقم الحالي للصفحة
  const postsPerPage = 6; // عدد المقالات لكل صفحة

  const categoryCount = data.categories[categIndex]?.count || 0; // التأكد من وجود العدد في category
  const numberOfPages = Math.ceil(categoryCount / postsPerPage); // حساب عدد الصفحات بناءً على المقالات

  // تقسيم المقالات إلى صفحات
  const currentPosts = data.posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page); // تحديث رقم الصفحة عند الضغط على رقم الصفحة
  };

  return (
    <>
      {/* عرض المقالات الخاصة بالصفحة الحالية */}
      <div className="container py-4">
        <div className="row g-4">
          {currentPosts.map((post) => (
            <div className="col-12 col-md-6 col-lg-4" key={post.id}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {numberOfPages > 1 && (
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center mt-4">
            {Array.from({ length: numberOfPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <NavLink
                    to = {"path"}
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)} // تحديث الصفحة عند الضغط
                >
                  {index + 1}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* <Outlet /> */}
    </>
  );
}
