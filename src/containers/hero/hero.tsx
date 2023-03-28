/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Image from "next/image";

import styles from "./hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.herotext}>
        <h1 className={styles.h1}>Discover Rare Collections Of Art & NFT</h1>
        <span>Create, Explore & Collect Digital Art NFT</span>
        <div className={styles.button}>
          <Link href="#" className={styles.link}>
            <span className={styles.span}>Explore</span>
          </Link>
        </div>
        <div className={styles.herostats}>
          <div className={styles.herostat}>
            <span>32k+</span>
            <p>Artwork</p>
          </div>
          <div className={styles.herostat}>
            <span>20k+</span>
            <p>Auctions</p>
          </div>
          <div className={styles.herostat}>
            <span>10k+</span>
            <p>Artists</p>
          </div>
        </div>
      </div>

      <img
        src="/Ellipsetophero.svg"
        alt="hero nft"
        className={styles.heroblurtop}
      />

      <div className={styles.heroimgbox}>
        <img
          className={styles.heroblur}
          src="/Ellipsehero.svg"
          alt="hero nft"
        />
        <img className={styles.heroImg} src="/heroimg.svg" alt="hero nft" />
      </div>
    </div>
  );
};

export default Hero;
