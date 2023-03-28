/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

import Image from "next/image";
import styles from "./artwork.module.css";
const Artwork = () => {
  return (
    <div className={styles.artwork}>
      <div className={styles.bitcoinart}>
        <img className={styles.bitcoinartimg} src="/bitcoinart.svg" alt="" />
        <img className={styles.artworkblur} src="/Ellipsebitcoin.svg" alt="" />
      </div>

      <div className={styles.artworktext}>
        <span>
          Bitcoin <br />
          Art Work
        </span>
        <p>
          Created by <span>Jonathan Barba</span>
        </p>
        <div className={styles.currentBid}>
          <div className={styles.bid}>
            <span>Current Bid</span>
            <h2>1.09 ETH</h2>
            <span>$1,835</span>
          </div>
          <div className={styles.bid}>
            <span>Auction Ends in</span>
            <div className={styles.bidtime}>
              <div>
                <h2>18</h2>
                <span>Hours</span>
              </div>
              <div>
                <h2>57</h2>
                <span>Minutes</span>
              </div>
              <div>
                <h2>14</h2>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          View ArtWork
          <Image src="/arrowtop.svg" width={24} height={24} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Artwork;
