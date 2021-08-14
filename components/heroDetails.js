import React from "react";
import styles from "../styles/Home.module.css";

const HeroDetails = () => {
  return (
    <section className={styles.heroDetails}>
      <div>
        <h2>About the Samurai King Resting</h2>
        <h3>Pets</h3>
        <p>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.So how did the classical Latin
          become so incoherent? According to McClintock, a 15th century
          typesetter likely scrambled part of Cicero's De Finibus in order to
          provide placeholder
        </p>
        <p>
          text to mockup various fonts for a type specimen book.So how did the
          classical Latin become so incoherent? According to McClintock.
        </p>
      </div>
      <aside>
        <h2>People also buy</h2>
        <div>
          <img src="/Rectangle 10.png" />
          <img src="/Rectangle 10.2.png" />
          <img src="/Rectangle 10.2.png" />
        </div>
        <div>
          <h2>Details</h2>
          <p>Size: 1020 x 1020 pixel</p>
          <p>Size: 15 mb</p>
        </div>
      </aside>
    </section>
  );
};

export default HeroDetails;
