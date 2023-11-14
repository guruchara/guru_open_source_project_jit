//R.S 
import React from "react";
import styles from "./home.module.css";
import Navbar from "../navbar/Navbar";

import arrive1 from "../../../src/assets/image/arrive1.webp";
import arrive2 from "../../../src/assets/image/arrive2.webp";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.firstContainer}>
        <h1 className={styles.heading}>New Smart Phones </h1>
        <img className={styles.secondBanner} width='86%' height='60%' src={arrive1} />
      </div>
    </div>
  );
};

export default Home;
