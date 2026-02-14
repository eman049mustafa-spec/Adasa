import React from "react";
import styles from "./BlogCard.module.css";

export default function BlogCard({ post }) {
  return (
    <article className={styles.card}>
      {/* Image */}
      <div className={styles.imgWrap}>
        <img src={post.image} alt={post.title} className={styles.img} />
        <span className={styles.badge}>{post.category}</span>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Meta */}
        <div className={` ${styles.meta}`}>
          <span className={styles.metaItem}>
            <span className={styles.dot}></span>
            {post.readTime}
          </span>
          <span className={styles.metaSep}>•</span>
          <span className={styles.metaItem}>{post.date}</span>
        </div>

        {/* Title + excerpt */}
        <div className={` border-bottom p-3 border-1 border-secondary`}>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>

        {/* Footer */}
        <div className={`p-3 ${styles.footer}`}>
          <div className={styles.authorBox}>
             <img
              src={post.author.avatar}
              alt={post.author.name}
              className={styles.avatar}
            />
            <div className={styles.authorText}>
              <div className={styles.authorName}>{post.author.name}</div>
              <div className={styles.authorRole}>{post.author.role}</div>
            </div>
           
          </div>
          <button className={styles.arrowBtn} aria-label="Open">
            ‹
          </button>
        </div>
      </div>
    </article>
  );
}
