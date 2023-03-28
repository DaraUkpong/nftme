/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import styles from "./join.module.css";

const Join = () => {
  return (
    <div className={styles.join}>
      {" "}
      <img className={styles.joinusblur} src="/Ellipse 430.svg" alt="joinus" />
      <div className={styles.joinus}>
        <div className={styles.ctaimgbox}>
          <img className={styles.ctaimg} src="/cta img.svg" alt="join us" />
        </div>

        <div className={styles.jointext}>
          <span>
            Join The Community <br /> And Get The Best NFT <br /> Collection
          </span>
          <button className={styles.button}>JOIN COMMUNITY</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
