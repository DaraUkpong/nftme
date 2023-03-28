/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Image from "next/image";
import styles from "./nftcard.module.css";

type Props = {
  image: string;
  price: string;
  artist: string;
};

const Nftcard = ({ image, price, artist }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardtitle}>
        <div className={styles.cardauthor}>
          <span>{artist}</span>
          <p>Golden Flower</p>
        </div>
        <span>{price} ETH</span>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Nftcard;
