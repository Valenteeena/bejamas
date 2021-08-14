import React from "react";
import styles from "../styles/Home.module.css";

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <a href="#"> &lt; </a>
      <a href="#"> 1 </a>
      <a href="#"> 2 </a>
      <a href="#" className={styles.activePage}>
        3
      </a>
      <a href="#"> 4 </a>
      <a href="#"> &gt; </a>
    </div>
  );
};

export default Pagination;
