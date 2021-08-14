import React from "react";
import styles from "../styles/Home.module.css";
import HeroDetails from "./heroDetails";

const HeroComponent = () => {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>Samurai King Resting</h1>
          <button>Add To Cart</button>
        </div>
        <div>
          <img src="/hero-img.png" />
          <h3>Photo of the day</h3>
        </div>
      </section>
      <HeroDetails />
    </>
  );
};

export default HeroComponent;
