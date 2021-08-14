import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import CartComponent from "./cartComponent";

const HeaderComponent = () => {
  const [show, setShow] = useState(true);

  const showModal = (e) => {
    setShow(!show);
  };
  return (
    <header className={styles.header}>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className={styles.cart} onClick={() => showModal()}>
        <img src="/shopping-cart.png" alt="cart" />
        <span></span>
      </div>
      <CartComponent closeFrm={showModal} show={show} />
    </header>
  );
};

export default HeaderComponent;
