/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerbox}>
      <img className={styles.footerblur} src="/Ellipse 434.svg" alt="ellipse" />
      <div className={styles.footer}>
        <div className={styles.footerlinks}>
          <span>NFTme</span>
          <ul className={styles.socialnav}>
            <li>Explore</li>
            <li>Marketplace</li>
            <li>Artists</li>
            <li>Contact</li>
          </ul>
          <ul className={styles.sociallinks}>
            <img src="/fb.svg" alt="social" />
            <img src="/ig.svg" alt="social" />
            <img src="/twitter (1).svg" alt="social" />
          </ul>
        </div>
        <div className={styles.footertext}>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
          <p>Copyright@Dara Ukpong 2023. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
