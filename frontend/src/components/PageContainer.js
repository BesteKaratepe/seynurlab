import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../styles/PageContainer.module.css";

const PageContainer = () => {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainConainer}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div> © 2024 Seynur Lab</div>
      </footer>
    </div>
  );
};

export default PageContainer;
