import React from "react";
import styles from "../styles/Home.module.css";
import { FaTimes } from "react-icons/fa";

const CartComponent = (props) => {
  const closeFrm = (e) => {
    props.closeFrm && props.closeFrm(e);
  };

  if (props.show) {
    return null;
  }
  return (
    <div className={styles.cartSection}>
      <FaTimes
        style={{ float: "right", fontSize: "1.5rem" }}
        onClick={(e) => {
          closeFrm(e);
        }}
      />
      <aside>
        <div>
          <h4>Samurai King Resting</h4>
          <h3>$1000.00</h3>
        </div>
        <img src="/prosmall.png" />
      </aside>
      <button>Clear</button>
    </div>
  );
};

export default CartComponent;
