import React from "react";
import styles from "../styles/Home.module.css";
import { BiSort } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import SideFilter from "./sideFilter";
import MainContentComponent from "./mainContentComponent";

const MainComponent = () => {
  return (
    <section>
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
      </div>
      <section className={styles.mainContent}>
        <SideFilter />
        <MainContentComponent />
      </section>
    </section>
  );
};

export default MainComponent;
