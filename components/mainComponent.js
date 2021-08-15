import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { BiSort } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import SideFilter from "./sideFilter";
import MainContentComponent from "./mainContentComponent";
import FilterModal from "./filterModal";

const MainComponent = () => {
  const [show, setShow] = useState(true);

  const showModal = (e) => {
    setShow(!show);
  };
  return (
    <section className={styles.mcon}>
      <div className={styles.mainHeader}>
        <h2>
          Photography / <span>Premium Photos</span>
        </h2>
        <div>
          <p>
            <BiSort />
            Sort By
            <span>
              Price <RiArrowDownSLine />
            </span>
          </p>
        </div>
        <div onClick={() => showModal()}>
          <img src="/Group.png" />
        </div>
      </div>

      <section className={styles.mainContent}>
        <SideFilter />
        <MainContentComponent />
      </section>
      <FilterModal closeFrm={showModal} show={show} />
    </section>
  );
};

export default MainComponent;
