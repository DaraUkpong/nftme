/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

import Image from "next/image";
import styles from "./artist.module.css";

type Props = {
  image: string;
  name: string;
};

const Artist = ({ image, name }: Props) => {
  return (
    <div className={styles.artist}>
      <img src={image} alt="1" />
      <span>{name}</span>
    </div>
  );
};

export default Artist;
