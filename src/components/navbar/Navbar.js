import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  let navbarArr = ["Home", "Product", "E-store", "Community", "Support"];
  return (
    <div className={styles.navbarContainer}>
      {navbarArr.map((heading,idx ) => (
        <p key={idx} className={styles.singleValue}>{heading}</p>
      ))}
    </div>
  );
};

export default Navbar;
