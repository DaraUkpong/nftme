/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { Component } from "react";

import styles from "./popular.module.css";
import Artist from "@/components/popular/artist";

const Popular = () => {
  return (
    <div className={styles.popular}>
      <div className={styles.title}>
        <span>Popular Artists</span>
        <button className={styles.button}>
          View all artists <img src="/arrowtop.svg" alt="" />
        </button>
      </div>
      <div className={styles.artistsrow}>
        <Artist image="/ferhatpic.svg" name="Ferhat Denis" />
        <Artist image="/sebastianpic.svg" name="Sebastian" />
        <Artist image="/javierpic.svg" name="Javier Miranda" />
        <Artist image="/erickpic.svg" name="Erick Butler" />
      </div>
    </div>
  );
};

export default Popular;
