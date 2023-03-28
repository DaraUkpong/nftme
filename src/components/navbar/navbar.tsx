import React, { Component } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/Union.svg" width={36} height={30} alt="Logo" />
      </div>
      <div className={styles.navlink}>
        <ul className={styles.ul}>
          <li className={styles.link}>About Us</li>
          <li className={styles.link}>Store</li>
          <li className={styles.link}>Games</li>
        </ul>
        <button className={styles.button}>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Navbar;
