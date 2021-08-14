import React from "react";
import styles from "../styles/Home.module.css";
import Pagination from "./pagination";

const MainContentComponent = () => {
  return (
    <section className={styles.content}>
      <div>
        <div>
          <span>Best Seller</span>
          <img src="/Rectangle 2.png" />
          <button>Add to Cart</button>
        </div>
        <p>People</p>
        <h2>Red Bench</h2>
        <h6>$3.89</h6>
      </div>

      <div>
        <div>
          <img src="/Rectangle 2.1.png" />
          <button>Add to Cart</button>
        </div>
        <p>Food</p>
        <h2>Egg Ballon</h2>
        <h6>$93.89</h6>
      </div>

      <div>
        <div>
          <img src="/Rectangle 2.1.png" />
          <button>Add to Cart</button>
        </div>
        <p>Food</p>
        <h2>Egg Ballon</h2>
        <h6>$93.89</h6>
      </div>

      <div>
        <div>
          <img src="/Rectangle 2.4.png" />
          <button>Add to Cart</button>
        </div>
        <p>People</p>
        <h2>Man</h2>
        <h6>$100.00</h6>
      </div>
      <div>
        <div>
          <img src="/Rectangle 2.5.png" />
          <button>Add to Cart</button>
        </div>
        <p>Landmarks</p>
        <h2>Architecture</h2>
        <h6>$101.00</h6>
      </div>
      <div>
        <div>
          <img src="/Rectangle 2.5.png" />
          <button>Add to Cart</button>
        </div>
        <p>Landmarks</p>
        <h2>Architecture</h2>
        <h6>$101.00</h6>
      </div>
      <Pagination />
    </section>
  );
};

export default MainContentComponent;
