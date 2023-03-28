/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

import Image from "next/image";
import styles from "./trending.module.css";
import Nftcard from "@/components/nftcard/nftcard";
import Popular from "../popular/popular";

const Trending = () => {
  return (
    <div className={styles.trending}>
      <div className={styles.trendtext}>
        <span>Trending This Week</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur dolore adipiscing <br /> elit,
          sed do eiusmod tempor incididunt ut labore et dolore <br /> magna
          aliqua.
        </p>
      </div>
      <img
        className={styles.trendfirstblurright}
        src="/Ellipse 433.svg"
        alt=""
      />
      <img
        className={styles.trendsecndblurleft}
        src="/Ellipse 432.svg"
        alt=""
      />
      <img
        className={styles.trendsecndblurright}
        src="/Ellipse 431.svg"
        alt=""
      />
      <div className={styles.trends}>
        <div className={styles.trendingrow}>
          <Nftcard image="/sebastiannft.svg" price="2.3" artist="Sebastian" />
          <Nftcard image="/javiernft.svg" price="2.3" artist="Javier Miranda" />
          <Nftcard image="/miladnft.svg" price="2.3" artist="Milad Fakurian" />
        </div>
        <div className={styles.trendingrow1}>
          <Nftcard image="/ericknft.svg" price="2.3" artist="Erick Butler" />
          <Nftcard
            image="/polinanft.svg"
            price="2.3"
            artist="Polina Kondrashova"
          />
          <Nftcard
            image="/ferhatdenisnft.svg"
            price="2.3"
            artist="Ferhat Deniz"
          />
          <button className={styles.button}>
            Explore More{" "}
            <Image src="/arrowtop.svg" width={24} height={24} alt="" />
          </button>
        </div>
      </div>
      <Popular />
    </div>
  );
};

export default Trending;
